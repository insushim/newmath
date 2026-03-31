import { NextResponse } from 'next/server';
import { getSessionIdFromCookie, clearSessionCookie } from '@/lib/auth/session';
import { getDB } from '@/lib/db';

export async function POST() {
  try {
    const sessionId = await getSessionIdFromCookie();
    if (sessionId) {
      const db = getDB();
      await db
        .prepare('DELETE FROM sessions WHERE id = ?')
        .bind(sessionId)
        .run();
    }
    await clearSessionCookie();
    return NextResponse.json({ success: true });
  } catch {
    await clearSessionCookie();
    return NextResponse.json({ success: true });
  }
}
