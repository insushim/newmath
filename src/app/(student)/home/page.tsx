'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/stores/auth-store';
import {
  Flame,
  Target,
  BookOpen,
  Trophy,
  Star,
  ArrowRight,
  Zap,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import { calculateLevel } from '@/lib/gamification/xp-system';
import { G1_UNITS } from '@/data/curriculum-g1';
import { G2_UNITS } from '@/data/curriculum-g2';
import { G3_UNITS } from '@/data/curriculum-g3';
import { G4_UNITS } from '@/data/curriculum-g4';
import { G5_UNITS } from '@/data/curriculum-g5';
import { G6_UNITS } from '@/data/curriculum-g6';
import type { SeedUnit } from '@/data/curriculum-types';

const curriculumMap: Record<number, SeedUnit[]> = {
  1: G1_UNITS,
  2: G2_UNITS,
  3: G3_UNITS,
  4: G4_UNITS,
  5: G5_UNITS,
  6: G6_UNITS,
};

const domainColors: Record<string, string> = {
  NUM_OPS: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  CHANGE_REL: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
  SHAPE_MEAS: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  DATA_PROB: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
};

const domainIcons: Record<string, string> = {
  NUM_OPS: '🔢',
  CHANGE_REL: '📈',
  SHAPE_MEAS: '📐',
  DATA_PROB: '📊',
};

export default function StudentHomePage() {
  const profile = useAuthStore((s) => s.profile);
  const totalXp = profile?.total_xp ?? 0;
  const streak = profile?.current_streak ?? 0;
  const level = profile?.level ?? 1;
  const coins = profile?.coins ?? 0;
  const grade = profile?.grade ?? 3;
  const levelInfo = calculateLevel(totalXp);

  const gradeUnits = curriculumMap[grade] ?? [];
  const currentSemesterUnits = gradeUnits.filter((u) => u.semester === 1);

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold">
          안녕, {profile?.display_name ?? '학생'}! 👋
        </h1>
        <p className="text-muted-foreground">오늘도 수학 우주를 탐험해볼까요?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{streak}</p>
              <p className="text-xs text-muted-foreground">연속 학습</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <Star className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">Lv.{level}</p>
              <p className="text-xs text-muted-foreground">{totalXp} XP</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Zap className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{coins}</p>
              <p className="text-xs text-muted-foreground">코인</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
              <Target className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{grade}학년</p>
              <p className="text-xs text-muted-foreground">학습 단계</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">레벨 {levelInfo.level}</span>
            <span className="text-xs text-muted-foreground">
              {levelInfo.xpInCurrentLevel} / {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP
            </span>
          </div>
          <Progress value={levelInfo.progress * 100} className="h-3" />
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/learn">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <p className="font-semibold">학습 시작</p>
              <p className="text-xs text-muted-foreground">새로운 개념을 배워요</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/review">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <Calendar className="h-7 w-7 text-accent" />
              </div>
              <p className="font-semibold">복습하기</p>
              <p className="text-xs text-muted-foreground">잊기 전에 복습해요</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Current Grade Units */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">{grade}학년 단원</h2>
          <Link href="/learn" className="text-sm text-primary hover:underline flex items-center gap-1">
            전체보기 <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-2">
          {currentSemesterUnits.slice(0, 4).map((unit: SeedUnit) => (
            <Link key={unit.id} href={`/learn/${unit.id}`}>
              <Card className="cursor-pointer transition-shadow hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="text-2xl">{domainIcons[unit.domainCode] ?? '📚'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{unit.nameKo}</p>
                    <span className={`inline-block text-xs rounded-full px-2 py-0.5 mt-1 ${domainColors[unit.domainCode] ?? ''}`}>
                      {unit.domainCode === 'NUM_OPS' ? '수와 연산' :
                       unit.domainCode === 'CHANGE_REL' ? '변화와 관계' :
                       unit.domainCode === 'SHAPE_MEAS' ? '도형과 측정' : '자료와 가능성'}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Leaderboard teaser */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            리더보드
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm text-muted-foreground mb-3">이번 주 랭킹을 확인해보세요!</p>
          <Link href="/leaderboard">
            <Button variant="outline" size="sm" className="gap-1">
              랭킹 보기 <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
