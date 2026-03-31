'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/stores/auth-store';
import { Flame, Star, Zap, Play, BookOpen, ArrowRight } from 'lucide-react';
import { calculateLevel } from '@/lib/gamification/xp-system';

export default function StudentHomePage() {
  const profile = useAuthStore((s) => s.profile);
  const router = useRouter();
  const [starting, setStarting] = useState(false);

  const totalXp = profile?.total_xp ?? 0;
  const streak = profile?.current_streak ?? 0;
  const level = profile?.level ?? 1;
  const coins = profile?.coins ?? 0;
  const grade = profile?.grade ?? 3;
  const levelInfo = calculateLevel(totalXp);

  async function startDailyQuest() {
    setStarting(true);
    try {
      const res = await fetch('/api/lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, sessionType: 'daily_quest', count: 10 }),
      });
      if (res.ok) {
        const data = await res.json();
        // Store session data and navigate to lesson
        sessionStorage.setItem('mv_lesson', JSON.stringify(data));
        router.push(`/learn/daily/lesson`);
      } else {
        // Fallback: go to first unit of current grade
        router.push('/learn');
      }
    } catch {
      router.push('/learn');
    } finally {
      setStarting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-xl font-bold">
          {profile?.display_name ?? '학생'}님, 안녕!
        </h1>
        <p className="text-sm text-muted-foreground">{grade}학년 수학 학습</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="flex flex-col items-center p-3">
            <Flame className="h-5 w-5 text-orange-500 mb-1" />
            <p className="text-lg font-bold">{streak}</p>
            <p className="text-[10px] text-muted-foreground">연속</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-3">
            <Star className="h-5 w-5 text-primary mb-1" />
            <p className="text-lg font-bold">Lv.{level}</p>
            <p className="text-[10px] text-muted-foreground">{totalXp} XP</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-3">
            <Zap className="h-5 w-5 text-blue-500 mb-1" />
            <p className="text-lg font-bold">{coins}</p>
            <p className="text-[10px] text-muted-foreground">코인</p>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <div className="px-1">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-medium">레벨 {levelInfo.level}</span>
          <span className="text-muted-foreground">
            {levelInfo.xpInCurrentLevel} / {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP
          </span>
        </div>
        <Progress value={levelInfo.progress * 100} className="h-2" />
      </div>

      {/* Daily Quest - Main CTA */}
      <button
        onClick={startDailyQuest}
        disabled={starting}
        className="w-full rounded-2xl bg-primary p-6 text-left text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-70"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium opacity-80 uppercase tracking-wide">오늘의 학습</p>
            <p className="mt-1 text-xl font-bold">10문제 풀기</p>
            <p className="mt-1 text-sm opacity-80">
              {grade}학년 맞춤 문제가 준비되어 있어요
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
            <Play className="h-7 w-7" />
          </div>
        </div>
      </button>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/learn">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">단원 탐색</p>
                <p className="text-[10px] text-muted-foreground">원하는 단원 선택</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/review">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <ArrowRight className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-semibold">복습하기</p>
                <p className="text-[10px] text-muted-foreground">잊기 전에 복습</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
