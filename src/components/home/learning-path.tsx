'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMasteryStore } from '@/stores/mastery-store';
import {
  createSkillMastery,
  isSkillUnlocked,
  type SkillMastery,
} from '@/lib/adaptive/mastery-system';
import { getCrownLevel } from '@/lib/adaptive/mastery-system';
import { Lock, Play, RotateCcw, CheckCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

/* ─── Types ──────────────────────────────────── */

interface PathStage {
  skill: SeedSkill;
  unit: SeedUnit;
  mastery: SkillMastery;
  isUnlocked: boolean;
  isCurrent: boolean;
  stageIndex: number;
}

interface LearningPathProps {
  units: SeedUnit[];
  skills: SeedSkill[];
  grade: number;
}

/* ─── Zigzag offsets for winding path effect ── */
// Each value is a percentage of the available width (relative to center)
// Pattern creates a smooth S-curve: center → left → center → right → repeat
const OFFSETS = [0, -24, -36, -24, 0, 24, 36, 24];

/* ─── Component ──────────────────────────────── */

export function LearningPath({ units, skills, grade }: LearningPathProps) {
  const router = useRouter();
  const masteryData = useMasteryStore((s) => s.skills);
  const [loadingSkill, setLoadingSkill] = useState<string | null>(null);

  // Build ordered stages from units → skills
  const stages = buildStages(units, skills, masteryData);

  async function handleStartStage(skill: SeedSkill) {
    setLoadingSkill(skill.id);
    try {
      const res = await fetch('/api/lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          sessionType: 'skill_practice',
          skillId: skill.id,
          count: 10,
          theta: masteryData[skill.id]?.theta ?? 0,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('mv_lesson', JSON.stringify(data));
        router.push('/learn/daily/lesson');
      }
    } catch {
      // fallback
    } finally {
      setLoadingSkill(null);
    }
  }

  // Group stages by unit for rendering
  let lastUnitId = '';
  let globalIdx = 0;

  return (
    <div className="relative mx-auto max-w-sm pb-8">
      {stages.map((stage, idx) => {
        const showUnitHeader = stage.unit.id !== lastUnitId;
        lastUnitId = stage.unit.id;

        // Get zigzag offset
        const offset = OFFSETS[globalIdx % OFFSETS.length];
        globalIdx++;

        const isLast = idx === stages.length - 1;

        return (
          <div key={stage.skill.id}>
            {/* Unit header separator */}
            {showUnitHeader && (
              <div className="relative flex items-center justify-center py-4">
                <div className="absolute inset-0 flex items-center px-8">
                  <div className="w-full border-t border-dashed border-border" />
                </div>
                <span className="relative bg-background px-3 text-xs font-semibold text-muted-foreground">
                  {stage.unit.nameKo}
                </span>
              </div>
            )}

            {/* Stage node */}
            <div className="relative flex flex-col items-center py-2">
              {/* Connector line to next node */}
              {!isLast && (
                <div
                  className="absolute top-[calc(100%-4px)] left-1/2 h-6 w-0.5 -translate-x-1/2 bg-border"
                  style={{ transform: `translateX(${offset}px)` }}
                />
              )}

              <StageNode
                stage={stage}
                offset={offset}
                isLoading={loadingSkill === stage.skill.id}
                onStart={() => handleStartStage(stage.skill)}
              />
            </div>
          </div>
        );
      })}

      {stages.length === 0 && (
        <div className="flex flex-col items-center py-12 text-muted-foreground">
          <p className="text-sm">이번 학기 학습 스킬이 없습니다.</p>
        </div>
      )}
    </div>
  );
}

/* ─── Stage Node ─────────────────────────────── */

function StageNode({
  stage,
  offset,
  isLoading,
  onStart,
}: {
  stage: PathStage;
  offset: number;
  isLoading: boolean;
  onStart: () => void;
}) {
  const { skill, mastery, isUnlocked, isCurrent } = stage;
  const level = mastery.level;
  const crowns = getCrownLevel(mastery);
  const accuracy =
    mastery.totalAttempts > 0
      ? Math.round((mastery.correctCount / mastery.totalAttempts) * 100)
      : 0;

  // Node state styling
  const isMastered = level === 'mastered';
  const isReview = level === 'review_needed';
  const isLearning = level === 'learning' || level === 'practicing';
  const isLocked = !isUnlocked;

  return (
    <div
      className="flex flex-col items-center gap-1"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {/* Current stage indicator arrow */}
      {isCurrent && !isMastered && (
        <div className="animate-bounce text-primary">
          <ChevronDown className="h-5 w-5" />
        </div>
      )}

      {/* Main circle button */}
      <button
        onClick={onStart}
        disabled={isLocked || isLoading}
        className={cn(
          'relative flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-200',
          // Mastered: gold/green
          isMastered &&
            'border-emerald-400 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30',
          // Review needed: orange
          isReview &&
            'border-orange-400 bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30',
          // Current (first unlocked non-mastered): purple with glow
          isCurrent &&
            !isMastered &&
            !isReview &&
            'border-violet-400 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-300 dark:shadow-violet-900/40 ring-4 ring-violet-200 dark:ring-violet-900/40',
          // Learning/practicing: blue
          isLearning &&
            !isCurrent &&
            'border-blue-400 bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/30',
          // Locked: gray
          isLocked &&
            'border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed',
          // Not started but unlocked (isCurrent handles this)
          !isLocked &&
            !isMastered &&
            !isReview &&
            !isLearning &&
            !isCurrent &&
            'border-slate-300 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400',
          // Hover/active states
          !isLocked && 'hover:scale-110 active:scale-95'
        )}
      >
        {/* Icon */}
        {isLocked && <Lock className="h-6 w-6" />}
        {isMastered && (
          <div className="flex flex-col items-center">
            <span className="text-lg">
              {crowns >= 5 ? '👑' : crowns >= 4 ? '⭐' : '✓'}
            </span>
          </div>
        )}
        {isReview && <RotateCcw className="h-6 w-6" />}
        {isCurrent && !isMastered && !isReview && (
          <Play className="h-7 w-7 fill-current" />
        )}
        {isLearning && !isCurrent && (
          <div className="flex flex-col items-center text-xs font-bold">
            <span>{accuracy}%</span>
          </div>
        )}
        {!isLocked &&
          !isMastered &&
          !isReview &&
          !isLearning &&
          !isCurrent && <span className="text-2xl font-light">·</span>}

        {/* Loading spinner overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/20">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}

        {/* Progress ring for learning/practicing */}
        {isLearning && !isCurrent && (
          <svg
            className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)]"
            viewBox="0 0 72 72"
          >
            <circle
              cx="36"
              cy="36"
              r="33"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${(accuracy / 100) * 207} 207`}
              strokeDashoffset="0"
              strokeLinecap="round"
              className="origin-center -rotate-90 text-white/40"
              transform="rotate(-90 36 36)"
            />
          </svg>
        )}
      </button>

      {/* Skill name label */}
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'text-xs font-medium text-center max-w-[120px] leading-tight',
            isLocked ? 'text-muted-foreground/50' : 'text-foreground',
            isCurrent && !isMastered && 'text-primary font-semibold'
          )}
        >
          {skill.nameKo}
        </span>

        {/* Status badge */}
        {isMastered && (
          <span className="mt-0.5 flex items-center gap-0.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            <CheckCircle className="h-2.5 w-2.5" />
            완료
          </span>
        )}
        {isReview && (
          <span className="mt-0.5 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
            복습 필요
          </span>
        )}
        {isCurrent && !isMastered && !isReview && (
          <span className="mt-0.5 rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
            10문제
          </span>
        )}
        {isLearning && !isCurrent && (
          <span className="mt-0.5 text-[10px] text-muted-foreground">
            {mastery.totalAttempts}문제 풀음
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Helpers ────────────────────────────────── */

function buildStages(
  units: SeedUnit[],
  skills: SeedSkill[],
  masteryData: Record<string, SkillMastery>
): PathStage[] {
  const stages: PathStage[] = [];
  let foundCurrent = false;
  let stageIndex = 0;

  for (const unit of units) {
    const unitSkills = skills
      .filter((s) => s.unitId === unit.id)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    const unitMasteries = unitSkills.map(
      (s) => masteryData[s.id] ?? createSkillMastery(s.id)
    );

    for (let i = 0; i < unitSkills.length; i++) {
      const skill = unitSkills[i];
      const mastery = unitMasteries[i];
      const unlocked = isSkillUnlocked(i, unitMasteries);

      // "Current" = first unlocked skill that isn't mastered
      const isCurrent =
        !foundCurrent &&
        unlocked &&
        mastery.level !== 'mastered';

      if (isCurrent) foundCurrent = true;

      stages.push({
        skill,
        unit,
        mastery,
        isUnlocked: unlocked,
        isCurrent,
        stageIndex: stageIndex++,
      });
    }
  }

  return stages;
}
