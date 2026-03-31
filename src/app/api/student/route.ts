import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Returns mock student profile data when Supabase is not configured
  return NextResponse.json({
    id: 'mock-student-id',
    display_name: '수학 탐험가',
    role: 'student',
    grade: 3,
    total_xp: 450,
    level: 4,
    current_streak: 3,
    longest_streak: 7,
    coins: 120,
    league: 'bronze',
    subscription_tier: 'free',
  });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ success: true, updated: body });
}
