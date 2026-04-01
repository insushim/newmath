import { NextResponse } from 'next/server';
import { getDB } from '@/lib/db';
import { getSessionIdFromCookie } from '@/lib/auth/session';

export async function GET() {
  try {
    const db = getDB();
    const sessionId = await getSessionIdFromCookie();
    if (!sessionId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify teacher session
    const session = await db
      .prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime("now")')
      .bind(sessionId)
      .first<{ user_id: string }>();

    if (!session) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
    }

    const teacher = await db
      .prepare('SELECT id, display_name, role FROM profiles WHERE id = ?')
      .bind(session.user_id)
      .first<{ id: string; display_name: string; role: string }>();

    if (!teacher || teacher.role !== 'teacher') {
      return NextResponse.json({ error: 'Not a teacher' }, { status: 403 });
    }

    // Get all students (for now, all student profiles — later: by classroom)
    const studentsResult = await db
      .prepare('SELECT id, display_name, grade, total_xp, current_streak, level, coins, created_at, updated_at FROM profiles WHERE role = "student" ORDER BY total_xp DESC')
      .all<{
        id: string; display_name: string; grade: number;
        total_xp: number; current_streak: number; level: number;
        coins: number; created_at: string; updated_at: string;
      }>();

    const students = studentsResult.results ?? [];

    // Get today's activity
    const today = new Date().toISOString().slice(0, 10);
    const dailyResult = await db
      .prepare('SELECT student_id, total_questions, correct_count, xp_earned FROM daily_activities WHERE date = ?')
      .bind(today)
      .all<{ student_id: string; total_questions: number; correct_count: number; xp_earned: number }>();

    const todayActivity = dailyResult.results ?? [];
    const activeToday = new Set(todayActivity.map(a => a.student_id)).size;
    const totalQuestionsToday = todayActivity.reduce((s, a) => s + a.total_questions, 0);
    const totalCorrectToday = todayActivity.reduce((s, a) => s + a.correct_count, 0);

    // Get weekly activity (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyResult = await db
      .prepare('SELECT date, COUNT(DISTINCT student_id) as students, SUM(total_questions) as questions, SUM(correct_count) as correct FROM daily_activities WHERE date >= ? GROUP BY date ORDER BY date')
      .bind(weekAgo.toISOString().slice(0, 10))
      .all<{ date: string; students: number; questions: number; correct: number }>();

    // Get mastery distribution
    const masteryResult = await db
      .prepare('SELECT mastery_level, COUNT(*) as count FROM student_abilities GROUP BY mastery_level')
      .all<{ mastery_level: string; count: number }>();

    // Get recent learning sessions
    const recentSessionsResult = await db
      .prepare(`
        SELECT ls.student_id, p.display_name, ls.session_type, ls.correct_count, ls.total_questions, ls.xp_earned, ls.completed_at
        FROM learning_sessions ls
        JOIN profiles p ON p.id = ls.student_id
        WHERE ls.status = 'completed'
        ORDER BY ls.completed_at DESC
        LIMIT 10
      `)
      .all<{
        student_id: string; display_name: string; session_type: string;
        correct_count: number; total_questions: number; xp_earned: number; completed_at: string;
      }>();

    // At-risk students: low accuracy or inactive
    const atRiskResult = await db
      .prepare(`
        SELECT p.id, p.display_name, p.current_streak, p.updated_at,
        COALESCE(
          (SELECT ROUND(CAST(SUM(sa.correct_count) AS REAL) / MAX(SUM(sa.total_attempts), 1) * 100)
           FROM student_abilities sa WHERE sa.student_id = p.id), 0
        ) as accuracy
        FROM profiles p
        WHERE p.role = 'student'
        AND (
          p.updated_at < datetime('now', '-3 days')
          OR p.current_streak = 0
        )
        ORDER BY p.updated_at ASC
        LIMIT 10
      `)
      .all<{ id: string; display_name: string; current_streak: number; updated_at: string; accuracy: number }>();

    const avgAccuracy = totalQuestionsToday > 0
      ? Math.round((totalCorrectToday / totalQuestionsToday) * 100 * 10) / 10
      : 0;

    return NextResponse.json({
      teacher: { name: teacher.display_name },
      overview: {
        totalStudents: students.length,
        activeToday,
        avgAccuracy,
        totalQuestionsToday,
        atRiskCount: (atRiskResult.results ?? []).length,
      },
      students,
      weeklyActivity: weeklyResult.results ?? [],
      masteryDistribution: masteryResult.results ?? [],
      recentSessions: recentSessionsResult.results ?? [],
      atRiskStudents: atRiskResult.results ?? [],
    });
  } catch (error) {
    console.error('Teacher stats error:', error);
    return NextResponse.json({
      teacher: { name: '' },
      overview: { totalStudents: 0, activeToday: 0, avgAccuracy: 0, totalQuestionsToday: 0, atRiskCount: 0 },
      students: [],
      weeklyActivity: [],
      masteryDistribution: [],
      recentSessions: [],
      atRiskStudents: [],
    });
  }
}
