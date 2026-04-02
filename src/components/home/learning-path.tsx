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
import { Lock, Play, RotateCcw, CheckCircle, ChevronDown, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

/* ─── Types ──────────────────────────────────── */

type PathNodeType = 'skill' | 'review';

interface PathStage {
  type: PathNodeType;
  skill: SeedSkill;
  unit: SeedUnit;
  mastery: SkillMastery;
  isUnlocked: boolean;
  isCurrent: boolean;
  stageIndex: number;
}

interface ReviewNode {
  type: 'review';
  unit: SeedUnit;
  allMastered: boolean;
  unitSkillCount: number;
  unitMasteredCount: number;
  isUnlocked: boolean;
}

type PathNode = PathStage | ReviewNode;

interface LearningPathProps {
  units: SeedUnit[];
  skills: SeedSkill[];
  grade: number;
}

/* ─── Zigzag offsets for winding path effect ── */
const OFFSETS = [0, -24, -36, -24, 0, 24, 36, 24];

/* ─── Component ──────────────────────────────── */

export function LearningPath({ units, skills, grade }: LearningPathProps) {
  const router = useRouter();
  const masteryData = useMasteryStore((s) => s.skills);
  const [loadingSkill, setLoadingSkill] = useState<string | null>(null);

  const nodes = buildPathNodes(units, skills, masteryData);

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

  async function handleStartReview(unitId: string) {
    setLoadingSkill(`review_${unitId}`);
    try {
      const unitSkills = skills.filter((s) => s.unitId === unitId);
      const res = await fetch('/api/lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          sessionType: 'review',
          count: 10,
          theta: 0,
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

  let globalIdx = 0;

  return (
    <div className="relative mx-auto max-w-sm pb-4">
      {nodes.map((node, idx) => {
        const isLast = idx === nodes.length - 1;

        if (node.type === 'review') {
          const rn = node as ReviewNode;
          const offset = OFFSETS[globalIdx % OFFSETS.length];
          globalIdx++;
          return (
            <div key={`review_${rn.unit.id}`}>
              <div className="relative flex flex-col items-center py-2">
                {!isLast && (
                  <div
                    className="absolute top-[calc(100%-4px)] left-1/2 h-6 w-0.5 -translate-x-1/2 bg-border"
                    style={{ transform: `translateX(${offset}px)` }}
                  />
                )}
                <ReviewCheckpoint
                  node={rn}
                  offset={offset}
                  isLoading={loadingSkill === `review_${rn.unit.id}`}
                  onStart={() => handleStartReview(rn.unit.id)}
                />
              </div>
            </div>
          );
        }

        const stage = node as PathStage;
        const showUnitHeader = idx === 0 || (() => {
          // Check if previous non-review node was a different unit
          for (let j = idx - 1; j >= 0; j--) {
            const prev = nodes[j];
            if (prev.type === 'skill') return (prev as PathStage).unit.id !== stage.unit.id;
            if (prev.type === 'review') return true; // review always separates units
          }
          return true;
        })();

        const offset = OFFSETS[globalIdx % OFFSETS.length];
        globalIdx++;

        return (
          <div key={stage.skill.id}>
            {showUnitHeader && (
              <div className="relative flex items-center justify-center py-3">
                <div className="absolute inset-0 flex items-center px-4">
                  <div className="w-full border-t border-dashed border-border" />
                </div>
                <span className="relative bg-background px-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {stage.unit.nameKo}
                </span>
              </div>
            )}

            <div className="relative flex flex-col items-center py-2">
              {!isLast && (
                <div
                  className="absolute top-[calc(100%-4px)] left-1/2 h-6 w-0.5 -translate-x-1/2 bg-border"
                  style={{ transform: `translateX(${offset}px)` }}
                />
              )}
              <SkillNode
                stage={stage}
                offset={offset}
                isLoading={loadingSkill === stage.skill.id}
                onStart={() => handleStartStage(stage.skill)}
              />
            </div>
          </div>
        );
      })}

      {nodes.length === 0 && (
        <div className="flex flex-col items-center py-12 text-muted-foreground">
          <p className="text-sm">이번 학기 학습 스킬이 없습니다.</p>
        </div>
      )}
    </div>
  );
}

/* ─── Skill Node ─────────────────────────────── */

function SkillNode({
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

  const isMastered = level === 'mastered';
  const isReview = level === 'review_needed';
  const isLearning = level === 'learning' || level === 'practicing';
  const isLocked = !isUnlocked;

  return (
    <div
      className="flex flex-col items-center gap-1"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {isCurrent && !isMastered && (
        <div className="animate-bounce text-primary">
          <ChevronDown className="h-5 w-5" />
        </div>
      )}

      <button
        onClick={onStart}
        disabled={isLocked || isLoading}
        className={cn(
          'relative flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-200',
          isMastered &&
            'border-emerald-400 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30',
          isReview &&
            'border-orange-400 bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30',
          isCurrent &&
            !isMastered &&
            !isReview &&
            'border-violet-400 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-300 dark:shadow-violet-900/40 ring-4 ring-violet-200 dark:ring-violet-900/40',
          isLearning &&
            !isCurrent &&
            'border-blue-400 bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/30',
          isLocked &&
            'border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed',
          !isLocked &&
            !isMastered &&
            !isReview &&
            !isLearning &&
            !isCurrent &&
            'border-slate-300 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400',
          !isLocked && 'hover:scale-110 active:scale-95'
        )}
      >
        {isLocked && <Lock className="h-6 w-6" />}
        {isMastered && (
          <span className="text-lg">
            {crowns >= 5 ? '👑' : crowns >= 4 ? '⭐' : '✓'}
          </span>
        )}
        {isReview && <RotateCcw className="h-6 w-6" />}
        {isCurrent && !isMastered && !isReview && (
          <Play className="h-7 w-7 fill-current" />
        )}
        {isLearning && !isCurrent && (
          <span className="text-xs font-bold">{accuracy}%</span>
        )}
        {!isLocked &&
          !isMastered &&
          !isReview &&
          !isLearning &&
          !isCurrent && <span className="text-2xl font-light">·</span>}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/20">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}

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
              strokeLinecap="round"
              className="text-white/40"
              transform="rotate(-90 36 36)"
            />
          </svg>
        )}
      </button>

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

/* ─── Review Checkpoint ──────────────────────── */

function ReviewCheckpoint({
  node,
  offset,
  isLoading,
  onStart,
}: {
  node: ReviewNode;
  offset: number;
  isLoading: boolean;
  onStart: () => void;
}) {
  const allDone = node.allMastered;

  return (
    <div
      className="flex flex-col items-center gap-1"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <button
        onClick={onStart}
        disabled={!node.isUnlocked || isLoading}
        className={cn(
          'relative flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-dashed transition-all duration-200',
          allDone
            ? 'border-amber-400 bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-600 shadow-md dark:from-amber-900/30 dark:to-yellow-900/30'
            : node.isUnlocked
              ? 'border-slate-300 bg-slate-50 text-slate-500 hover:scale-110 active:scale-95 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400'
              : 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-600'
        )}
      >
        {allDone ? (
          <Trophy className="h-6 w-6" />
        ) : (
          <RotateCcw className="h-5 w-5" />
        )}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/10">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        )}
      </button>
      <span className="text-[10px] font-medium text-muted-foreground text-center max-w-[100px]">
        {allDone ? `${node.unit.nameKo} 완료!` : '단원 복습'}
      </span>
      <span className="text-[9px] text-muted-foreground">
        {node.unitMasteredCount}/{node.unitSkillCount} 마스터
      </span>
    </div>
  );
}

/* ─── Build path nodes ───────────────────────── */

function buildPathNodes(
  units: SeedUnit[],
  skills: SeedSkill[],
  masteryData: Record<string, SkillMastery>
): PathNode[] {
  const nodes: PathNode[] = [];
  let foundCurrent = false;
  let stageIndex = 0;

  for (const unit of units) {
    const unitSkills = skills
      .filter((s) => s.unitId === unit.id)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    const unitMasteries = unitSkills.map(
      (s) => masteryData[s.id] ?? createSkillMastery(s.id)
    );

    let unitMasteredCount = 0;

    for (let i = 0; i < unitSkills.length; i++) {
      const skill = unitSkills[i];
      const mastery = unitMasteries[i];
      const unlocked = isSkillUnlocked(i, unitMasteries);

      if (mastery.level === 'mastered') unitMasteredCount++;

      const isCurrent =
        !foundCurrent &&
        unlocked &&
        mastery.level !== 'mastered';

      if (isCurrent) foundCurrent = true;

      nodes.push({
        type: 'skill',
        skill,
        unit,
        mastery,
        isUnlocked: unlocked,
        isCurrent,
        stageIndex: stageIndex++,
      });
    }

    // Add review checkpoint after each unit
    const allMastered = unitSkills.length > 0 && unitMasteredCount === unitSkills.length;
    const lastSkillUnlocked = unitSkills.length > 0 && isSkillUnlocked(unitSkills.length - 1, unitMasteries);

    nodes.push({
      type: 'review',
      unit,
      allMastered,
      unitSkillCount: unitSkills.length,
      unitMasteredCount,
      isUnlocked: lastSkillUnlocked,
    });
  }

  return nodes;
}
