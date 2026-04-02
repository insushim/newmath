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
import { Lock, Play, RotateCcw, CheckCircle, ChevronDown, ChevronRight, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

/* ─── Types ──────────────────────────────────── */

interface PathStage {
  skill: SeedSkill;
  mastery: SkillMastery;
  isUnlocked: boolean;
  isCurrent: boolean;
}

interface UnitGroup {
  unit: SeedUnit;
  stages: PathStage[];
  masteredCount: number;
  hasCurrent: boolean;
}

interface LearningPathProps {
  units: SeedUnit[];
  skills: SeedSkill[];
  grade: number;
}

const OFFSETS = [0, -24, -36, -24, 0, 24, 36, 24];

/* ─── Component ──────────────────────────────── */

export function LearningPath({ units, skills, grade }: LearningPathProps) {
  const router = useRouter();
  const masteryData = useMasteryStore((s) => s.skills);
  const [loadingSkill, setLoadingSkill] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const unitGroups = buildUnitGroups(units, skills, masteryData);

  // Find which unit is "current" (has the current skill)
  const currentUnitIdx = unitGroups.findIndex((g) => g.hasCurrent);
  const activeIdx = currentUnitIdx >= 0 ? currentUnitIdx : 0;

  // Show: current unit + previous unit (if any). Collapse rest unless showAll
  const visibleUnits = showAll
    ? unitGroups
    : unitGroups.filter((_, i) => i >= activeIdx - 1 && i <= activeIdx + 1);
  const hiddenCount = unitGroups.length - visibleUnits.length;

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
      const res = await fetch('/api/lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade, sessionType: 'review', count: 10, theta: 0 }),
      });
      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('mv_lesson', JSON.stringify(data));
        router.push('/learn/daily/lesson');
      }
    } catch { /* */ }
    finally { setLoadingSkill(null); }
  }

  return (
    <div className="space-y-2">
      {/* Collapsed previous units */}
      {!showAll && activeIdx > 1 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full flex items-center justify-center gap-1 rounded-xl bg-muted/50 py-2 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
        >
          <ChevronDown className="h-3.5 w-3.5" />
          이전 {activeIdx - 1}개 단원 보기
        </button>
      )}

      {visibleUnits.map((group) => (
        <UnitSection
          key={group.unit.id}
          group={group}
          isExpanded={group.hasCurrent || showAll}
          loadingSkill={loadingSkill}
          onStartStage={handleStartStage}
          onStartReview={() => handleStartReview(group.unit.id)}
        />
      ))}

      {/* Show more / show less */}
      {!showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full flex items-center justify-center gap-1 rounded-xl bg-muted/50 py-2.5 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
        >
          <ChevronDown className="h-3.5 w-3.5" />
          나머지 {hiddenCount}개 단원 더보기
        </button>
      )}
      {showAll && unitGroups.length > 3 && (
        <button
          onClick={() => setShowAll(false)}
          className="w-full flex items-center justify-center gap-1 rounded-xl bg-muted/50 py-2 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors"
        >
          접기
        </button>
      )}
    </div>
  );
}

/* ─── Unit Section (expandable) ──────────────── */

function UnitSection({
  group,
  isExpanded: defaultExpanded,
  loadingSkill,
  onStartStage,
  onStartReview,
}: {
  group: UnitGroup;
  isExpanded: boolean;
  loadingSkill: string | null;
  onStartStage: (skill: SeedSkill) => void;
  onStartReview: () => void;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { unit, stages, masteredCount } = group;
  const allMastered = stages.length > 0 && masteredCount === stages.length;
  const lastUnlocked = stages.length > 0 && stages[stages.length - 1].isUnlocked;

  return (
    <div className="rounded-2xl border border-border bg-gradient-to-b from-card to-background overflow-hidden">
      {/* Unit header - clickable to expand/collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          {allMastered ? (
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <CheckCircle className="h-4 w-4" />
            </div>
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-xs font-bold text-primary">{masteredCount}/{stages.length}</span>
            </div>
          )}
          <span className="text-sm font-bold">{unit.nameKo}</span>
        </div>
        {expanded ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {/* Expanded content: skill nodes */}
      {expanded && (
        <div className="relative mx-auto max-w-xs pb-3 pt-1">
          {stages.map((stage, idx) => {
            const offset = OFFSETS[idx % OFFSETS.length];
            const isLast = idx === stages.length - 1;

            return (
              <div key={stage.skill.id} className="relative flex flex-col items-center py-2">
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
                  onStart={() => onStartStage(stage.skill)}
                />
              </div>
            );
          })}

          {/* Review checkpoint at end */}
          <div className="relative flex flex-col items-center py-2">
            <ReviewCheckpoint
              allMastered={allMastered}
              masteredCount={masteredCount}
              totalCount={stages.length}
              isUnlocked={lastUnlocked}
              isLoading={loadingSkill === `review_${unit.id}`}
              onStart={onStartReview}
              offset={OFFSETS[stages.length % OFFSETS.length]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Skill Node ─────────────────────────────── */

function SkillNode({
  stage, offset, isLoading, onStart,
}: {
  stage: PathStage; offset: number; isLoading: boolean; onStart: () => void;
}) {
  const { skill, mastery, isUnlocked, isCurrent } = stage;
  const level = mastery.level;
  const crowns = getCrownLevel(mastery);
  const accuracy = mastery.totalAttempts > 0 ? Math.round((mastery.correctCount / mastery.totalAttempts) * 100) : 0;

  const isMastered = level === 'mastered';
  const isReview = level === 'review_needed';
  const isLearning = level === 'learning' || level === 'practicing';
  const isLocked = !isUnlocked;

  return (
    <div className="flex flex-col items-center gap-1" style={{ transform: `translateX(${offset}px)` }}>
      {isCurrent && !isMastered && (
        <div className="animate-bounce text-primary"><ChevronDown className="h-5 w-5" /></div>
      )}

      <button
        onClick={onStart}
        disabled={isLocked || isLoading}
        className={cn(
          'relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] transition-all duration-200',
          isMastered && 'border-emerald-400 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-md shadow-emerald-200 dark:shadow-emerald-900/30',
          isReview && 'border-orange-400 bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md shadow-orange-200 dark:shadow-orange-900/30',
          isCurrent && !isMastered && !isReview && 'border-violet-400 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-300 dark:shadow-violet-900/40 ring-4 ring-violet-200 dark:ring-violet-900/40',
          isLearning && !isCurrent && 'border-blue-400 bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-sm',
          isLocked && 'border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed',
          !isLocked && !isMastered && !isReview && !isLearning && !isCurrent && 'border-slate-300 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700',
          !isLocked && 'hover:scale-110 active:scale-95'
        )}
      >
        {isLocked && <Lock className="h-5 w-5" />}
        {isMastered && <span className="text-base">{crowns >= 5 ? '👑' : crowns >= 4 ? '⭐' : '✓'}</span>}
        {isReview && <RotateCcw className="h-5 w-5" />}
        {isCurrent && !isMastered && !isReview && <Play className="h-6 w-6 fill-current" />}
        {isLearning && !isCurrent && <span className="text-[11px] font-bold">{accuracy}%</span>}
        {!isLocked && !isMastered && !isReview && !isLearning && !isCurrent && <span className="text-xl">·</span>}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/20">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}
      </button>

      <span className={cn(
        'text-[11px] font-medium text-center max-w-[110px] leading-tight',
        isLocked ? 'text-muted-foreground/50' : 'text-foreground',
        isCurrent && !isMastered && 'text-primary font-semibold'
      )}>
        {skill.nameKo}
      </span>
      {isCurrent && !isMastered && !isReview && (
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">10문제</span>
      )}
      {isMastered && (
        <span className="flex items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          <CheckCircle className="h-2.5 w-2.5" />완료
        </span>
      )}
    </div>
  );
}

/* ─── Review Checkpoint ──────────────────────── */

function ReviewCheckpoint({
  allMastered, masteredCount, totalCount, isUnlocked, isLoading, onStart, offset,
}: {
  allMastered: boolean; masteredCount: number; totalCount: number;
  isUnlocked: boolean; isLoading: boolean; onStart: () => void; offset: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1" style={{ transform: `translateX(${offset}px)` }}>
      <button
        onClick={onStart}
        disabled={!isUnlocked || isLoading}
        className={cn(
          'relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed transition-all',
          allMastered ? 'border-amber-400 bg-amber-50 text-amber-600 dark:bg-amber-900/20' :
          isUnlocked ? 'border-slate-300 bg-slate-50 text-slate-500 hover:scale-110 active:scale-95 dark:border-slate-600 dark:bg-slate-800' :
          'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed dark:border-gray-700 dark:bg-gray-800'
        )}
      >
        {allMastered ? <Trophy className="h-5 w-5" /> : <RotateCcw className="h-4 w-4" />}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/10">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        )}
      </button>
      <span className="text-[9px] text-muted-foreground">
        {allMastered ? '단원 완료!' : `복습 ${masteredCount}/${totalCount}`}
      </span>
    </div>
  );
}

/* ─── Build unit groups ──────────────────────── */

function buildUnitGroups(
  units: SeedUnit[], skills: SeedSkill[], masteryData: Record<string, SkillMastery>
): UnitGroup[] {
  const groups: UnitGroup[] = [];
  let foundCurrent = false;

  for (const unit of units) {
    const unitSkills = skills.filter((s) => s.unitId === unit.id).sort((a, b) => a.sortOrder - b.sortOrder);
    const unitMasteries = unitSkills.map((s) => masteryData[s.id] ?? createSkillMastery(s.id));

    let masteredCount = 0;
    let hasCurrent = false;
    const stages: PathStage[] = [];

    for (let i = 0; i < unitSkills.length; i++) {
      const skill = unitSkills[i];
      const mastery = unitMasteries[i];
      const unlocked = isSkillUnlocked(i, unitMasteries);
      if (mastery.level === 'mastered') masteredCount++;

      const isCurrent = !foundCurrent && unlocked && mastery.level !== 'mastered';
      if (isCurrent) { foundCurrent = true; hasCurrent = true; }

      stages.push({ skill, mastery, isUnlocked: unlocked, isCurrent });
    }

    groups.push({ unit, stages, masteredCount, hasCurrent });
  }

  return groups;
}
