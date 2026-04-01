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

// DELETE: Delete classroom or student
export async function DELETE(request: NextRequest) {
  try {
    const db = getDB();
    const teacherId = await getTeacherId(db);
    if (!teacherId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { classroomId, studentId } = await request.json();

    if (studentId && classroomId) {
      // Remove student from classroom + delete profile
      await db.prepare('DELETE FROM classroom_students WHERE classroom_id = ? AND student_id = ?')
        .bind(classroomId, studentId).run();
      await db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(studentId).run();
      await db.prepare('DELETE FROM profiles WHERE id = ?').bind(studentId).run();
      return NextResponse.json({ success: true, deleted: 'student' });
    }

    if (classroomId) {
      // Verify ownership
      const cls = await db.prepare('SELECT id FROM classrooms WHERE id = ? AND teacher_id = ?')
        .bind(classroomId, teacherId).first<{ id: string }>();
      if (!cls) return NextResponse.json({ error: 'Not found' }, { status: 404 });

      // Get all students in this classroom
      const members = await db.prepare('SELECT student_id FROM classroom_students WHERE classroom_id = ?')
        .bind(classroomId).all<{ student_id: string }>();

      // Delete students' data
      for (const m of members.results ?? []) {
        await db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(m.student_id).run();
        await db.prepare('DELETE FROM profiles WHERE id = ?').bind(m.student_id).run();
      }
      await db.prepare('DELETE FROM classroom_students WHERE classroom_id = ?').bind(classroomId).run();
      await db.prepare('DELETE FROM classrooms WHERE id = ?').bind(classroomId).run();
      return NextResponse.json({ success: true, deleted: 'classroom' });
    }

    return NextResponse.json({ error: 'classroomId required' }, { status: 400 });
  } catch (error) {
    console.error('DELETE classroom error:', error);
    return NextResponse.json({ error: '삭제 중 오류' }, { status: 500 });
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
        const email = loginId; // 이메일 형식 아님 — 순수 아이디
        const password = loginId; // 초기 비밀번호 = 아이디와 동일
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
