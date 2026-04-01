'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/stores/auth-store';
import { useMasteryStore } from '@/stores/mastery-store';
import { ArrowRight, Lock, CheckCircle2, Crown } from 'lucide-react';
import { getMasteryInfo, isSkillUnlocked, type MasteryLevel } from '@/lib/adaptive/mastery-system';
import { cn } from '@/lib/utils';

import { G1_UNITS, G1_SKILLS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS } from '@/data/curriculum-g6';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

const allUnitsMap: Record<number, SeedUnit[]> = {
  1: G1_UNITS, 2: G2_UNITS, 3: G3_UNITS, 4: G4_UNITS, 5: G5_UNITS, 6: G6_UNITS,
};
const allSkillsMap: Record<number, SeedSkill[]> = {
  1: G1_SKILLS, 2: G2_SKILLS, 3: G3_SKILLS, 4: G4_SKILLS, 5: G5_SKILLS, 6: G6_SKILLS,
};

const domainMeta: Record<string, { label: string; emoji: string; color: string }> = {
  NUM_OPS: { label: '수와 연산', emoji: '🔢', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  CHANGE_REL: { label: '변화와 관계', emoji: '📈', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
  SHAPE_MEAS: { label: '도형과 측정', emoji: '📐', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  DATA_PROB: { label: '자료와 가능성', emoji: '📊', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
};

const MASTERY_COLORS: Record<MasteryLevel, string> = {
  not_started: 'bg-muted border-muted-foreground/20',
  learning: 'bg-blue-100 border-blue-400 dark:bg-blue-900/30',
  practicing: 'bg-yellow-100 border-yellow-400 dark:bg-yellow-900/30',
  mastered: 'bg-green-100 border-green-500 dark:bg-green-900/30',
  review_needed: 'bg-orange-100 border-orange-400 dark:bg-orange-900/30',
};

export default function LearnPage() {
  const profile = useAuthStore((s) => s.profile);
  const masterySkills = useMasteryStore((s) => s.skills);
  const userGrade = profile?.grade ?? 3;
  const [selectedGrade, setSelectedGrade] = useState(userGrade);

  const units = allUnitsMap[selectedGrade] ?? [];
  const gradeSkills = allSkillsMap[selectedGrade] ?? [];
  const semester1 = units.filter((u) => u.semester === 1);
  const semester2 = units.filter((u) => u.semester === 2);

  // Grade progress
  const totalSkills = gradeSkills.length;
  const masteredSkills = gradeSkills.filter(s => masterySkills[s.id]?.level === 'mastered').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">학습하기</h1>
        <p className="text-muted-foreground">단원을 선택해서 학습을 시작하세요</p>
      </div>

      {/* Grade selector */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[1, 2, 3, 4, 5, 6].map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGrade(g)}
            className={cn(
              'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              selectedGrade === g
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-muted-foreground hover:bg-muted/80',
              g === userGrade && selectedGrade !== g && 'ring-2 ring-primary/30',
            )}
          >
            {g}학년 {g === userGrade ? '(내 학년)' : ''}
          </button>
        ))}
      </div>

      {/* Grade progress bar */}
      <div className="flex items-center gap-3 px-1">
        <Progress value={totalSkills > 0 ? (masteredSkills / totalSkills) * 100 : 0} className="flex-1 h-2.5" />
        <span className="text-xs font-medium text-muted-foreground shrink-0">
          {masteredSkills}/{totalSkills} 마스터
        </span>
      </div>

      {/* Semester tabs */}
      <Tabs defaultValue="s1">
        <TabsList className="w-full">
          <TabsTrigger value="s1" className="flex-1">1학기</TabsTrigger>
          <TabsTrigger value="s2" className="flex-1">2학기</TabsTrigger>
        </TabsList>

        <TabsContent value="s1" className="mt-4 space-y-3">
          {semester1.length > 0 ? semester1.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} gradeSkills={gradeSkills} masterySkills={masterySkills} />
          )) : (
            <p className="text-center py-8 text-muted-foreground">{selectedGrade}학년 1학기 데이터 준비 중이에요</p>
          )}
        </TabsContent>

        <TabsContent value="s2" className="mt-4 space-y-3">
          {semester2.length > 0 ? semester2.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} gradeSkills={gradeSkills} masterySkills={masterySkills} />
          )) : (
            <p className="text-center py-8 text-muted-foreground">{selectedGrade}학년 2학기 데이터 준비 중이에요</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function UnitCard({
  unit,
  index,
  gradeSkills,
  masterySkills,
}: {
  unit: SeedUnit;
  index: number;
  gradeSkills: SeedSkill[];
  masterySkills: Record<string, { level: MasteryLevel; totalAttempts: number; correctCount: number; recentAttempts: boolean[]; bestStreak: number; currentStreak: number; theta: number; lastPracticedAt: string | null; masteredAt: string | null; skillId: string }>;
}) {
  const domain = domainMeta[unit.domainCode];
  const unitSkills = gradeSkills
    .filter(s => s.unitId === unit.id)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const masteries = unitSkills.map(s => masterySkills[s.id]);
  const masteredCount = masteries.filter(m => m?.level === 'mastered').length;
  const isUnitComplete = masteredCount === unitSkills.length && unitSkills.length > 0;
  const hasStarted = masteries.some(m => m && m.level !== 'not_started');
  const unitProgress = unitSkills.length > 0 ? masteredCount / unitSkills.length : 0;

  return (
    <Link href={`/learn/${unit.id}`}>
      <Card className={cn(
        'cursor-pointer transition-all hover:shadow-md',
        isUnitComplete ? 'border-green-300 hover:border-green-400' : 'hover:border-primary/30',
      )}>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Unit icon */}
            <div className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl',
              isUnitComplete ? 'bg-green-100 dark:bg-green-900/30' : 'bg-primary/10',
            )}>
              {isUnitComplete ? <Crown className="h-6 w-6 text-green-600" /> : (domain?.emoji ?? '📚')}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary" className={`text-[10px] px-1.5 py-0 ${domain?.color ?? ''}`}>
                  {domain?.label ?? unit.domainCode}
                </Badge>
                {isUnitComplete && (
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-green-100 text-green-700">
                    완료!
                  </Badge>
                )}
              </div>
              <p className="font-semibold truncate">{unit.nameKo}</p>

              {/* Skill dots */}
              <div className="flex items-center gap-1 mt-2">
                {unitSkills.map((skill, i) => {
                  const mastery = masterySkills[skill.id];
                  const level: MasteryLevel = mastery?.level ?? 'not_started';
                  const unlocked = isSkillUnlocked(
                    i,
                    unitSkills.map(s => ({
                      ...(masterySkills[s.id] ?? { skillId: s.id, level: 'not_started' as MasteryLevel, totalAttempts: 0, correctCount: 0, recentAttempts: [], bestStreak: 0, currentStreak: 0, theta: 0, lastPracticedAt: null, masteredAt: null }),
                    })),
                  );

                  return (
                    <div key={skill.id} className="relative group">
                      <div
                        className={cn(
                          'h-3 w-3 rounded-full border-2 transition-all',
                          unlocked ? MASTERY_COLORS[level] : 'bg-muted border-muted-foreground/10',
                          !unlocked && 'opacity-40',
                        )}
                      />
                      {/* Tooltip */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                        <div className="bg-foreground text-background text-[10px] px-2 py-1 rounded whitespace-nowrap">
                          {skill.nameKo}: {getMasteryInfo(level).label}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <span className="text-[10px] text-muted-foreground ml-1">
                  {masteredCount}/{unitSkills.length}
                </span>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
          </div>

          {/* Progress bar */}
          {hasStarted && (
            <Progress value={unitProgress * 100} className="h-1.5 mt-3" />
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
