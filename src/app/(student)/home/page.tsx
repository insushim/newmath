'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/stores/auth-store';
import { useMasteryStore } from '@/stores/mastery-store';
import { Flame, Star, Zap, Play, BookOpen, ArrowRight, Trophy, Target, RotateCcw, Crown, CheckCircle } from 'lucide-react';
import { calculateLevel, getLevelTitle } from '@/lib/gamification/xp-system';
import { getMasteryInfo, type MasteryLevel } from '@/lib/adaptive/mastery-system';
import { cn } from '@/lib/utils';

import { G1_UNITS, G1_SKILLS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS } from '@/data/curriculum-g6';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS, ...G6_UNITS];
const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS];

export default function StudentHomePage() {
  const profile = useAuthStore((s) => s.profile);
  const router = useRouter();
  const [starting, setStarting] = useState(false);

  const skills = useMasteryStore((s) => s.skills);
  const getTodayStats = useMasteryStore((s) => s.getTodayStats);
  const dailyGoal = useMasteryStore((s) => s.dailyGoal);
  const resetIfNewDay = useMasteryStore((s) => s.resetIfNewDay);
  resetIfNewDay();

  const totalXp = profile?.total_xp ?? 0;
  const streak = profile?.current_streak ?? 0;
  const level = profile?.level ?? 1;
  const coins = profile?.coins ?? 0;
  const grade = profile?.grade ?? 3;
  const levelInfo = calculateLevel(totalXp);
  const levelTitle = getLevelTitle(levelInfo.level);
  const todayStats = getTodayStats();

  // Get grade-level progress
  const gradeUnits = allUnits.filter(u => u.grade === grade);
  const gradeSkills = allSkills.filter(s => gradeUnits.some(u => u.id === s.unitId));
  const masteredCount = gradeSkills.filter(s => skills[s.id]?.level === 'mastered').length;
  const learningCount = gradeSkills.filter(s => {
    const l = skills[s.id]?.level;
    return l === 'learning' || l === 'practicing';
  }).length;
  const reviewCount = gradeSkills.filter(s => skills[s.id]?.level === 'review_needed').length;
  const gradeProgress = gradeSkills.length > 0 ? masteredCount / gradeSkills.length : 0;

  async function startDailyQuest() {
    setStarting(true);
    try {
      const res = await fetch('/api/lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          sessionType: 'daily_quest',
          count: 10,
          theta: 0, // TODO: use stored theta
        }),
      });
      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('mv_lesson', JSON.stringify(data));
        router.push('/learn/daily/lesson');
      } else {
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
      {/* Greeting + Level */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">
            {profile?.display_name ?? '학생'}님, 안녕!
          </h1>
          <p className="text-sm text-muted-foreground">{grade}학년 · {levelTitle}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
          <Crown className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-primary">Lv.{levelInfo.level}</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-2">
        <Card>
          <CardContent className="flex flex-col items-center p-2.5">
            <Flame className="h-5 w-5 text-orange-500 mb-0.5" />
            <p className="text-lg font-bold">{streak}</p>
            <p className="text-[9px] text-muted-foreground">연속</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-2.5">
            <Star className="h-5 w-5 text-purple-500 mb-0.5" />
            <p className="text-lg font-bold">{totalXp}</p>
            <p className="text-[9px] text-muted-foreground">XP</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-2.5">
            <Zap className="h-5 w-5 text-blue-500 mb-0.5" />
            <p className="text-lg font-bold">{coins}</p>
            <p className="text-[9px] text-muted-foreground">코인</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-2.5">
            <Trophy className="h-5 w-5 text-yellow-500 mb-0.5" />
            <p className="text-lg font-bold">{masteredCount}</p>
            <p className="text-[9px] text-muted-foreground">마스터</p>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <div className="px-1">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-medium">레벨 {levelInfo.level} — {levelTitle}</span>
          <span className="text-muted-foreground">
            {levelInfo.xpInCurrentLevel} / {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP
          </span>
        </div>
        <Progress value={levelInfo.progress * 100} className="h-2" />
      </div>

      {/* Today's Progress */}
      <Card className={cn(
        'border-2 transition-colors',
        todayStats.goalMet ? 'border-green-300 bg-green-50/50 dark:bg-green-900/10' : 'border-border'
      )}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">오늘의 목표</span>
            </div>
            {todayStats.goalMet ? (
              <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                <CheckCircle className="h-3.5 w-3.5" /> 달성!
              </span>
            ) : (
              <span className="text-xs text-muted-foreground">
                {todayStats.total}/{dailyGoal}문제
              </span>
            )}
          </div>
          <Progress
            value={Math.min(100, (todayStats.total / dailyGoal) * 100)}
            className="h-2 mb-1"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>정답 {todayStats.correct}개</span>
            <span>+{todayStats.xp} XP</span>
          </div>
        </CardContent>
      </Card>

      {/* Daily Quest - Main CTA */}
      <button
        onClick={startDailyQuest}
        disabled={starting}
        className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-left text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-70 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium opacity-80 uppercase tracking-wide">오늘의 학습</p>
            <p className="mt-1 text-xl font-bold">10문제 풀기</p>
            <p className="mt-1 text-sm opacity-80">
              {grade}학년 실력에 맞춘 적응형 문제
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Play className="h-7 w-7" />
          </div>
        </div>
      </button>

      {/* Grade Progress */}
      <div className="px-1">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold">{grade}학년 전체 진행도</span>
          <span className="text-muted-foreground">{masteredCount}/{gradeSkills.length} 스킬</span>
        </div>
        <Progress value={gradeProgress * 100} className="h-2.5 mb-2" />
        <div className="flex gap-3 text-[10px]">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" /> 마스터 {masteredCount}
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> 학습중 {learningCount}
          </span>
          {reviewCount > 0 && (
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500" /> 복습필요 {reviewCount}
            </span>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/learn">
          <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">단원 탐색</p>
                <p className="text-[10px] text-muted-foreground">스킬트리 보기</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/review">
          <Card className={cn(
            'cursor-pointer transition-all hover:shadow-md',
            reviewCount > 0 ? 'border-orange-200 hover:border-orange-300' : 'hover:border-primary/30'
          )}>
            <CardContent className="flex items-center gap-3 p-4">
              <div className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl',
                reviewCount > 0 ? 'bg-orange-100' : 'bg-muted'
              )}>
                <RotateCcw className={cn('h-5 w-5', reviewCount > 0 ? 'text-orange-600' : 'text-muted-foreground')} />
              </div>
              <div>
                <p className="text-sm font-semibold">복습하기</p>
                <p className="text-[10px] text-muted-foreground">
                  {reviewCount > 0 ? `${reviewCount}개 복습 필요` : '잊기 전에 복습'}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent skill progress (Duolingo-style mini skill tree) */}
      {gradeUnits.slice(0, 3).map(unit => {
        const uSkills = allSkills.filter(s => s.unitId === unit.id);
        const uMastered = uSkills.filter(s => skills[s.id]?.level === 'mastered').length;

        return (
          <Link key={unit.id} href={`/learn/${unit.id}`}>
            <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold">{unit.nameKo}</p>
                  <span className="text-xs text-muted-foreground">{uMastered}/{uSkills.length}</span>
                </div>
                <div className="flex gap-1.5">
                  {uSkills.map(skill => {
                    const mastery = skills[skill.id];
                    const level: MasteryLevel = mastery?.level ?? 'not_started';
                    const info = getMasteryInfo(level);
                    return (
                      <div
                        key={skill.id}
                        className={cn(
                          'h-2.5 flex-1 rounded-full transition-colors',
                          level === 'mastered' && 'bg-green-500',
                          level === 'practicing' && 'bg-yellow-400',
                          level === 'learning' && 'bg-blue-400',
                          level === 'review_needed' && 'bg-orange-400',
                          level === 'not_started' && 'bg-muted',
                        )}
                        title={`${skill.nameKo}: ${info.label}`}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
