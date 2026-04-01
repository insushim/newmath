import { NextRequest, NextResponse } from 'next/server';
import { getDB } from '@/lib/db';
import { getSessionIdFromCookie } from '@/lib/auth/session';

function generateJoinCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function generateSimplePassword(): string {
  return String(Math.floor(1000 + Math.random() * 9000));
}

/** Lightweight password hash for bulk student creation (fast, Cloudflare Workers compatible) */
async function quickHash(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    'raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: 10000, hash: 'SHA-256' },
    keyMaterial, 64 * 8,
  );
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('');
  const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `${saltHex}:${hashHex}`;
}

async function getTeacherId(db: ReturnType<typeof getDB>): Promise<string | null> {
  const sessionId = await getSessionIdFromCookie();
  if (!sessionId) return null;
  const session = await db
    .prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime("now")')
    .bind(sessionId)
    .first<{ user_id: string }>();
  if (!session) return null;
  const teacher = await db
    .prepare('SELECT id FROM profiles WHERE id = ? AND role = "teacher"')
    .bind(session.user_id)
    .first<{ id: string }>();
  return teacher?.id ?? null;
}

// GET: List classrooms with students
export async function GET() {
  try {
    const db = getDB();
    const teacherId = await getTeacherId(db);
    if (!teacherId) return NextResponse.json({ classrooms: [] });

    const classrooms = await db
      .prepare('SELECT id, name, grade, code, created_at FROM classrooms WHERE teacher_id = ? ORDER BY created_at DESC')
      .bind(teacherId)
      .all<{ id: string; name: string; grade: number; code: string; created_at: string }>();

    const result = [];
    for (const cls of classrooms.results ?? []) {
      const members = await db
        .prepare(`
          SELECT p.id, p.display_name, p.email, p.grade, p.total_xp, p.current_streak, p.level, p.updated_at
          FROM classroom_students cs
          JOIN profiles p ON p.id = cs.student_id
          WHERE cs.classroom_id = ?
          ORDER BY p.total_xp DESC
        `)
        .bind(cls.id)
        .all<{
          id: string; display_name: string; email: string; grade: number;
          total_xp: number; current_streak: number; level: number; updated_at: string;
        }>();

      result.push({ ...cls, join_code: cls.code, students: members.results ?? [] });
    }

    return NextResponse.json({ classrooms: result });
  } catch (error) {
    console.error('GET classrooms error:', error);
    return NextResponse.json({ classrooms: [] });
  }
}

// POST: Create classroom + bulk create students
export async function POST(request: NextRequest) {
  try {
    const db = getDB();
    const teacherId = await getTeacherId(db);
    if (!teacherId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { name, grade, studentCount, prefix } = body;

    if (!name || !grade || grade < 1 || grade > 6) {
      return NextResponse.json({ error: '학급 이름과 학년을 입력하세요.' }, { status: 400 });
    }

    const classId = crypto.randomUUID();
    const joinCode = generateJoinCode();

    // Create classroom
    await db
      .prepare('INSERT INTO classrooms (id, teacher_id, name, grade, code) VALUES (?, ?, ?, ?, ?)')
      .bind(classId, teacherId, name, grade, joinCode)
      .run();

    // Bulk create students
    const createdStudents: Array<{ name: string; loginId: string; password: string }> = [];

    if (studentCount && studentCount > 0) {
      const count = Math.min(studentCount, 50);

      // Pre-generate all passwords and hash them
      const studentData: Array<{ id: string; email: string; hash: string; displayName: string; password: string }> = [];

      const idPrefix = (prefix || joinCode).toLowerCase().replace(/[^a-z0-9가-힣]/g, '');

      for (let i = 1; i <= count; i++) {
        const studentId = crypto.randomUUID();
        const num = String(i).padStart(2, '0');
        const loginId = `${idPrefix}${num}`;
        const email = `${loginId}@mv.local`;
        const password = generateSimplePassword();
        const displayName = `${i}번 학생`;
        const hash = await quickHash(password);

        studentData.push({ id: studentId, email, hash, displayName, password });
      }

      // Insert one by one (D1 batch can be unreliable with mixed tables)
      for (const s of studentData) {
        await db.prepare(
          'INSERT INTO profiles (id, email, password_hash, display_name, role, grade) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(s.id, s.email, s.hash, s.displayName, 'student', grade).run();

        await db.prepare(
          'INSERT INTO classroom_students (classroom_id, student_id) VALUES (?, ?)'
        ).bind(classId, s.id).run();
      }

      for (const s of studentData) {
        createdStudents.push({ name: s.displayName, loginId: s.email, password: s.password });
      }
    }

    return NextResponse.json({
      classroom: { id: classId, name, grade, joinCode },
      students: createdStudents,
    });
  } catch (error) {
    console.error('POST classroom error:', error);
    const msg = error instanceof Error ? error.message : '학급 생성 중 오류가 발생했습니다.';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
