'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, CheckCircle2, Circle, Lock, Crown, BookOpen, RotateCcw } from 'lucide-react';
import { useMasteryStore } from '@/stores/mastery-store';
import { getMasteryInfo, isSkillUnlocked, getCrownLevel, createSkillMastery, type MasteryLevel } from '@/lib/adaptive/mastery-system';
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

const CROWN_COLORS = ['text-muted-foreground/30', 'text-blue-400', 'text-yellow-400', 'text-green-500', 'text-purple-500', 'text-amber-500'];

export default function UnitDetailPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = use(params);
  const router = useRouter();
  const masterySkills = useMasteryStore((s) => s.skills);

  const unit = allUnits.find((u) => u.id === unitId);
  const unitSkillList = allSkills.filter((s) => s.unitId === unitId).sort((a, b) => a.sortOrder - b.sortOrder);

  if (!unit) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold mb-2">단원을 찾을 수 없어요</p>
        <Link href="/learn"><Button variant="outline">학습 목록으로 돌아가기</Button></Link>
      </div>
    );
  }

  const masteries = unitSkillList.map(s => masterySkills[s.id] ?? createSkillMastery(s.id));
  const masteredCount = masteries.filter(m => m.level === 'mastered').length;
  const isUnitComplete = masteredCount === unitSkillList.length && unitSkillList.length > 0;
  const unitProgress = unitSkillList.length > 0 ? masteredCount / unitSkillList.length : 0;
  const reviewNeeded = masteries.filter(m => m.level === 'review_needed').length;

  // Find the recommended skill to practice
  const nextSkillIndex = masteries.findIndex((m, i) =>
    isSkillUnlocked(i, masteries) && m.level !== 'mastered'
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3">
          <ArrowLeft className="h-4 w-4" /> 단원 목록
        </Link>
        <div className="flex items-center gap-3">
          {isUnitComplete && <Crown className="h-6 w-6 text-yellow-500" />}
          <h1 className="text-2xl font-bold">{unit.nameKo}</h1>
        </div>
        <p className="text-muted-foreground mt-1">{unit.descriptionKo}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <span>{unit.grade}학년 {unit.semester}학기</span>
          <span>·</span>
          <span>{unitSkillList.length}개 스킬</span>
        </div>
      </div>

      {/* Progress */}
      <Card className={cn(isUnitComplete && 'border-green-300')}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              {isUnitComplete ? '단원 마스터 완료!' : '진행률'}
            </span>
            <span className="text-xs text-muted-foreground">{masteredCount} / {unitSkillList.length} 마스터</span>
          </div>
          <Progress value={unitProgress * 100} className="h-2.5" />
          {reviewNeeded > 0 && (
            <p className="text-xs text-orange-600 mt-2">
              {reviewNeeded}개 스킬 복습이 필요해요
            </p>
          )}
        </CardContent>
      </Card>

      {/* Action buttons */}
      <div className="flex gap-3">
        <Link href={`/learn/${unitId}/lesson`} className="flex-1">
          <Button className="w-full h-12 text-base gap-2">
            <Play className="h-5 w-5" />
            {isUnitComplete ? '다시 도전' : nextSkillIndex >= 0 ? '이어서 학습' : '학습 시작'}
          </Button>
        </Link>
        {reviewNeeded > 0 && (
          <Button variant="outline" className="h-12 gap-2" onClick={() => {
            // TODO: Start review session for this unit
            router.push(`/learn/${unitId}/lesson`);
          }}>
            <RotateCcw className="h-5 w-5" /> 복습
          </Button>
        )}
      </div>

      {/* Skills list — Duolingo-style skill tree */}
      <div>
        <h2 className="text-lg font-bold mb-3">스킬 트리</h2>
        <div className="space-y-2">
          {unitSkillList.map((skill, i) => {
            const mastery = masteries[i];
            const level: MasteryLevel = mastery.level;
            const unlocked = isSkillUnlocked(i, masteries);
            const info = getMasteryInfo(level);
            const crowns = getCrownLevel(mastery);
            const isRecommended = i === nextSkillIndex;
            const accuracy = mastery.totalAttempts > 0
              ? Math.round((mastery.correctCount / mastery.totalAttempts) * 100)
              : 0;

            return (
              <Card
                key={skill.id}
                className={cn(
                  'transition-all',
                  isRecommended && 'ring-2 ring-primary shadow-md',
                  !unlocked && 'opacity-60',
                  level === 'mastered' && 'border-green-200',
                )}
              >
                <CardContent className="flex items-center gap-3 p-4">
                  {/* Skill node */}
                  <div className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                    level === 'mastered' && 'bg-green-100 border-green-500 dark:bg-green-900/30',
                    level === 'practicing' && 'bg-yellow-100 border-yellow-400 dark:bg-yellow-900/30',
                    level === 'learning' && 'bg-blue-100 border-blue-400 dark:bg-blue-900/30',
                    level === 'review_needed' && 'bg-orange-100 border-orange-400 dark:bg-orange-900/30',
                    level === 'not_started' && unlocked && 'bg-muted border-muted-foreground/30',
                    !unlocked && 'bg-muted/50 border-muted-foreground/10',
                  )}>
                    {!unlocked ? (
                      <Lock className="h-4 w-4 text-muted-foreground/50" />
                    ) : level === 'mastered' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <span className="text-sm font-bold">{i + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={cn('font-medium', !unlocked && 'text-muted-foreground')}>{skill.nameKo}</p>
                      {isRecommended && (
                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">
                          추천
                        </span>
                      )}
                    </div>

                    {/* Progress info */}
                    {unlocked && level !== 'not_started' && (
                      <div className="flex items-center gap-3 mt-1">
                        <span className={cn('text-[10px] font-medium', `text-${info.color}-600`)}>
                          {info.icon} {info.label}
                        </span>
                        {mastery.totalAttempts > 0 && (
                          <span className="text-[10px] text-muted-foreground">
                            정답률 {accuracy}% · {mastery.totalAttempts}문제
                          </span>
                        )}
                      </div>
                    )}

                    {!unlocked && (
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        이전 스킬을 먼저 연습하세요
                      </p>
                    )}

                    {unlocked && level === 'not_started' && (
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">
                        {skill.conceptExplanation}
                      </p>
                    )}
                  </div>

                  {/* Crowns */}
                  {level !== 'not_started' && unlocked && (
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, ci) => (
                        <Crown
                          key={ci}
                          className={cn(
                            'h-3.5 w-3.5 transition-all',
                            ci < crowns ? CROWN_COLORS[crowns] : 'text-muted-foreground/15',
                          )}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
