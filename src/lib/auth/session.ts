import { cookies } from 'next/headers';

const SESSION_COOKIE = 'mv_session';
const SESSION_EXPIRY_HOURS = 168; // 7 days

function getAuthSecret(): string {
  return (
    process.env.AUTH_SECRET ||
    'dev-secret-change-in-production-minimum-32-chars!!'
  );
}

async function sign(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getAuthSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  const sigHex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `${value}.${sigHex}`;
}

async function verify(signedValue: string): Promise<string | null> {
  const lastDot = signedValue.lastIndexOf('.');
  if (lastDot === -1) return null;
  const value = signedValue.substring(0, lastDot);
  const expected = await sign(value);
  return expected === signedValue ? value : null;
}

export function generateSessionId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function getSessionExpiry(): string {
  const d = new Date();
  d.setHours(d.getHours() + SESSION_EXPIRY_HOURS);
  return d.toISOString();
}

export async function setSessionCookie(sessionId: string): Promise<void> {
  const signed = await sign(sessionId);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, signed, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_EXPIRY_HOURS * 60 * 60,
  });
}

export async function getSessionIdFromCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE);
  if (!cookie?.value) return null;
  return verify(cookie.value);
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
