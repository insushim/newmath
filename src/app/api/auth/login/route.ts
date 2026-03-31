import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/auth/password';
import {
  generateSessionId,
  getSessionExpiry,
  setSessionCookie,
} from '@/lib/auth/session';
import { getDB } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 },
      );
    }

    const db = getDB();
    const user = await db
      .prepare(
        `SELECT id, email, password_hash, display_name, role, grade,
                total_xp, current_streak, longest_streak, coins, level, league,
                subscription_tier, theme, sound_enabled, haptic_enabled,
                daily_goal_minutes, avatar_url, school_name, parent_id,
                created_at, updated_at
         FROM profiles WHERE email = ?`,
      )
      .bind(email)
      .first<Record<string, unknown>>();

    if (!user) {
      return NextResponse.json(
        { error: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 },
      );
    }

    const valid = await verifyPassword(password, user.password_hash as string);
    if (!valid) {
      return NextResponse.json(
        { error: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 },
      );
    }

    const sessionId = generateSessionId();
    const expiresAt = getSessionExpiry();
    await db
      .prepare(
        'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)',
      )
      .bind(sessionId, user.id, expiresAt)
      .run();

    await setSessionCookie(sessionId);

    const { password_hash: _, ...profile } = user;
    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '로그인 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
