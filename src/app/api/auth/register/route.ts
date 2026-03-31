import { NextRequest, NextResponse } from 'next/server';
import { hashPassword } from '@/lib/auth/password';
import { getDB } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, displayName, role = 'student', grade } = body;

    if (!email || !password || !displayName) {
      return NextResponse.json(
        { error: '필수 항목을 입력해주세요.' },
        { status: 400 },
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 6자리 이상이어야 합니다.' },
        { status: 400 },
      );
    }

    const db = getDB();

    const existing = await db
      .prepare('SELECT id FROM profiles WHERE email = ?')
      .bind(email)
      .first();
    if (existing) {
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 409 },
      );
    }

    const id = crypto.randomUUID();
    const passwordHash = await hashPassword(password);

    await db
      .prepare(
        `INSERT INTO profiles (id, email, password_hash, display_name, role, grade)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .bind(id, email, passwordHash, displayName, role, grade ?? null)
      .run();

    return NextResponse.json({
      success: true,
      message: '회원가입이 완료되었습니다.',
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: '회원가입 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
