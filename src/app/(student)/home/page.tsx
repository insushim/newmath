'use client';

import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/stores/auth-store';
import { useMasteryStore } from '@/stores/mastery-store';
import { LearningPath } from '@/components/home/learning-path';
import {
  Flame,
  Star,
  Zap,
  BookOpen,
  RotateCcw,
  Crown,
  Target,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { calculateLevel, getLevelTitle } from '@/lib/gamification/xp-system';
import { cn } from '@/lib/utils';

import { G1_UNITS, G1_SKILLS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS } from '@/data/curriculum-g6';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [
  ...G1_UNITS, ...G2_UNITS, ...G3_UNITS,
  ...G4_UNITS, ...G5_UNITS, ...G6_UNITS,
];
const allSkills: SeedSkill[] = [
  ...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS,
  ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS,
];

function getCurrentSemester(): number {
  const month = new Date().getMonth() + 1;
  return month >= 3 && month <= 7 ? 1 : 2;
}

export default function StudentHomePage() {
  const profile = useAuthStore((s) => s.profile);

  const skills = useMasteryStore((s) => s.skills);
  const getTodayStats = useMasteryStore((s) => s.getTodayStats);
  const dailyGoal = useMasteryStore((s) => s.dailyGoal);
  const resetIfNewDay = useMasteryStore((s) => s.resetIfNewDay);
  resetIfNewDay();

  const totalXp = profile?.total_xp ?? 0;
  const streak = profile?.current_streak ?? 0;
  const coins = profile?.coins ?? 0;
  const grade = profile?.grade ?? 3;
  const levelInfo = calculateLevel(totalXp);
  const levelTitle = getLevelTitle(levelInfo.level);
  const todayStats = getTodayStats();
  const currentSemester = getCurrentSemester();

  // Filter units/skills for current grade + semester
  const gradeUnits = allUnits
    .filter((u) => u.grade === grade && u.semester <= currentSemester)
    .sort((a, b) => a.semester - b.semester || a.sortOrder - b.sortOrder);
  const gradeUnitIds = new Set(gradeUnits.map((u) => u.id));
  const gradeSkills = allSkills.filter((s) => gradeUnitIds.has(s.unitId));
  const masteredCount = gradeSkills.filter(
    (s) => skills[s.id]?.level === 'mastered'
  ).length;
  const reviewCount = gradeSkills.filter(
    (s) => skills[s.id]?.level === 'review_needed'
  ).length;

  const progressPct = Math.min(100, (todayStats.total / dailyGoal) * 100);

  return (
    <div className="space-y-5">
      {/* ── Header: Greeting + Level Badge ── */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            {profile?.display_name ?? '학생'}님, 안녕!
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {grade}학년 {currentSemester}학기
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 px-3.5 py-1.5 text-white shadow-md shadow-violet-200 dark:shadow-violet-900/30">
          <Crown className="h-4 w-4" />
          <span className="text-sm font-bold">Lv.{levelInfo.level}</span>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 p-3 dark:from-slate-900 dark:to-slate-800">
        <StatPill
          icon={<Flame className="h-4 w-4" />}
          value={streak}
          label="연속"
          color="text-orange-500"
          bgColor="bg-orange-100 dark:bg-orange-900/30"
        />
        <div className="h-6 w-px bg-border" />
        <StatPill
          icon={<Star className="h-4 w-4" />}
          value={totalXp}
          label="XP"
          color="text-purple-500"
          bgColor="bg-purple-100 dark:bg-purple-900/30"
        />
        <div className="h-6 w-px bg-border" />
        <StatPill
          icon={<Zap className="h-4 w-4" />}
          value={coins}
          label="코인"
          color="text-amber-500"
          bgColor="bg-amber-100 dark:bg-amber-900/30"
        />
        <div className="h-6 w-px bg-border" />
        <StatPill
          icon={<Sparkles className="h-4 w-4" />}
          value={masteredCount}
          label="마스터"
          color="text-emerald-500"
          bgColor="bg-emerald-100 dark:bg-emerald-900/30"
        />
      </div>

      {/* ── Daily Progress + Quick Start ── */}
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border-2 p-4 transition-all',
          todayStats.goalMet
            ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30'
            : 'border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 dark:border-violet-800 dark:from-violet-950/30 dark:to-purple-950/30'
        )}
      >
        {/* Background decoration */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/40 to-transparent" />

        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {todayStats.goalMet ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white">
                  <Target className="h-5 w-5" />
                </div>
              )}
              <div>
                <p className="text-sm font-bold">
                  {todayStats.goalMet ? '오늘 목표 달성!' : '오늘의 목표'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {todayStats.correct}개 정답 &middot; +{todayStats.xp} XP
                </p>
              </div>
            </div>
            <span
              className={cn(
                'text-xl font-extrabold tabular-nums',
                todayStats.goalMet ? 'text-emerald-600 dark:text-emerald-400' : 'text-violet-600 dark:text-violet-400'
              )}
            >
              {todayStats.total}/{dailyGoal}
            </span>
          </div>

          {/* Progress bar */}
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/60 dark:bg-white/10">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500 ease-out',
                todayStats.goalMet
                  ? 'bg-gradient-to-r from-emerald-400 to-green-500'
                  : 'bg-gradient-to-r from-violet-400 to-purple-500'
              )}
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Level progress (compact) */}
          <div className="mt-3 flex items-center gap-2">
            <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-0.5">
                <span>{levelTitle}</span>
                <span>
                  {levelInfo.xpInCurrentLevel}/
                  {levelInfo.nextLevelXP - levelInfo.currentLevelXP} XP
                </span>
              </div>
              <Progress value={levelInfo.progress * 100} className="h-1.5" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Actions ── */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/learn">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 transition-all hover:border-primary/30 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-semibold">단원 탐색</p>
              <p className="text-[10px] text-muted-foreground">스킬트리 보기</p>
            </div>
          </div>
        </Link>
        <Link href="/review">
          <div
            className={cn(
              'flex items-center gap-3 rounded-2xl border bg-card p-3.5 transition-all hover:shadow-md',
              reviewCount > 0
                ? 'border-orange-200 hover:border-orange-300 dark:border-orange-800'
                : 'border-border hover:border-primary/30'
            )}
          >
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl',
                reviewCount > 0
                  ? 'bg-orange-100 dark:bg-orange-900/30'
                  : 'bg-muted'
              )}
            >
              <RotateCcw
                className={cn(
                  'h-5 w-5',
                  reviewCount > 0
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-muted-foreground'
                )}
              />
            </div>
            <div>
              <p className="text-sm font-semibold">복습하기</p>
              <p className="text-[10px] text-muted-foreground">
                {reviewCount > 0
                  ? `${reviewCount}개 복습 필요`
                  : '잊기 전에 복습'}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Learning Path ── */}
      <div>
        <div className="mb-2 flex items-center justify-between px-1">
          <h2 className="text-base font-bold">나의 학습 여정</h2>
          <span className="text-xs text-muted-foreground">
            {masteredCount}/{gradeSkills.length} 스킬 완료
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-b from-card to-background p-4">
          <LearningPath
            units={gradeUnits}
            skills={gradeSkills}
            grade={grade}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Stat Pill Component ─── */

function StatPill({
  icon,
  value,
  label,
  color,
  bgColor,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-lg',
          bgColor
        )}
      >
        <span className={color}>{icon}</span>
      </div>
      <div>
        <p className="text-sm font-bold tabular-nums leading-none">{value}</p>
        <p className="text-[9px] text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
