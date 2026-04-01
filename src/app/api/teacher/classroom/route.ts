import { NextRequest, NextResponse } from 'next/server';
import { getDB } from '@/lib/db';
import { getSessionIdFromCookie } from '@/lib/auth/session';
import { hashPassword } from '@/lib/auth/password';

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
    if (!teacherId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

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

      result.push({
        ...cls,
        join_code: cls.code,
        students: members.results ?? [],
      });
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
    const { name, grade, studentCount } = body;

    if (!name || !grade || grade < 1 || grade > 6) {
      return NextResponse.json({ error: '학급 이름과 학년을 입력하세요.' }, { status: 400 });
    }

    const classId = crypto.randomUUID();
    const joinCode = generateJoinCode();

    // Create classroom (using actual DB schema: code, not join_code)
    await db
      .prepare('INSERT INTO classrooms (id, teacher_id, name, grade, code) VALUES (?, ?, ?, ?, ?)')
      .bind(classId, teacherId, name, grade, joinCode)
      .run();

    // Bulk create students
    const createdStudents: Array<{ name: string; loginId: string; password: string }> = [];

    if (studentCount && studentCount > 0) {
      const count = Math.min(studentCount, 50);

      for (let i = 1; i <= count; i++) {
        const studentId = crypto.randomUUID();
        const loginId = `${joinCode.toLowerCase()}${String(i).padStart(2, '0')}`;
        const email = `${loginId}@mv.local`;
        const password = generateSimplePassword();
        const displayName = `${i}번 학생`;
        const passwordHash = await hashPassword(password);

        // Create student profile
        await db
          .prepare(`INSERT INTO profiles (id, email, password_hash, display_name, role, grade)
                    VALUES (?, ?, ?, ?, 'student', ?)`)
          .bind(studentId, email, passwordHash, displayName, grade)
          .run();

        // Add to classroom (using actual DB schema: classroom_students)
        await db
          .prepare('INSERT INTO classroom_students (classroom_id, student_id) VALUES (?, ?)')
          .bind(classId, studentId)
          .run();

        createdStudents.push({ name: displayName, loginId: email, password });
      }
    }

    return NextResponse.json({
      classroom: { id: classId, name, grade, joinCode },
      students: createdStudents,
    });
  } catch (error) {
    console.error('POST classroom error:', error);
    return NextResponse.json({ error: '학급 생성 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
