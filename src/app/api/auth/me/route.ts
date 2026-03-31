import { NextResponse } from 'next/server';
import {
  getSessionIdFromCookie,
  clearSessionCookie,
} from '@/lib/auth/session';
import { getDB } from '@/lib/db';

export async function GET() {
  try {
    const sessionId = await getSessionIdFromCookie();
    if (!sessionId) {
      return NextResponse.json({ profile: null }, { status: 401 });
    }

    const db = getDB();
    const session = await db
      .prepare('SELECT user_id, expires_at FROM sessions WHERE id = ?')
      .bind(sessionId)
      .first<{ user_id: string; expires_at: string }>();

    if (!session || new Date(session.expires_at) < new Date()) {
      await clearSessionCookie();
      return NextResponse.json({ profile: null }, { status: 401 });
    }

    const user = await db
      .prepare(
        `SELECT id, email, display_name, role, grade,
                total_xp, current_streak, longest_streak, coins, level, league,
                subscription_tier, theme, sound_enabled, haptic_enabled,
                daily_goal_minutes, avatar_url, school_name, parent_id,
                created_at, updated_at
         FROM profiles WHERE id = ?`,
      )
      .bind(session.user_id)
      .first<Record<string, unknown>>();

    if (!user) {
      await clearSessionCookie();
      return NextResponse.json({ profile: null }, { status: 401 });
    }

    return NextResponse.json({ profile: user });
  } catch (error) {
    console.error('Auth me error:', error);
    return NextResponse.json({ profile: null }, { status: 500 });
  }
}
