import { NextRequest, NextResponse } from 'next/server';
import { getSessionIdFromCookie } from '@/lib/auth/session';
import { getDB } from '@/lib/db';

export async function GET() {
  try {
    const sessionId = await getSessionIdFromCookie();
    if (!sessionId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const db = getDB();
    const session = await db
      .prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime("now")')
      .bind(sessionId)
      .first<{ user_id: string }>();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const profile = await db
      .prepare('SELECT id, display_name, role, grade, total_xp, level, current_streak, longest_streak, coins, league, subscription_tier FROM profiles WHERE id = ?')
      .bind(session.user_id)
      .first();
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Student GET error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const sessionId = await getSessionIdFromCookie();
    if (!sessionId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const db = getDB();
    const session = await db
      .prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime("now")')
      .bind(sessionId)
      .first<{ user_id: string }>();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const allowedFields = ['grade', 'display_name', 'theme', 'sound_enabled', 'haptic_enabled', 'daily_goal_minutes'];
    const updates: string[] = [];
    const values: unknown[] = [];

    for (const [key, val] of Object.entries(body)) {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        values.push(val);
      }
    }
    if (updates.length === 0) return NextResponse.json({ error: 'No valid fields' }, { status: 400 });

    values.push(session.user_id);
    await db
      .prepare(`UPDATE profiles SET ${updates.join(', ')}, updated_at = datetime('now') WHERE id = ?`)
      .bind(...values)
      .run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Student PATCH error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
