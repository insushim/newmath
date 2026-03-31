'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Clock, Brain, ArrowRight } from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';
import { G1_UNITS, G1_SKILLS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS } from '@/data/curriculum-g6';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS, ...G6_UNITS];
const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS];

export default function ReviewPage() {
  const profile = useAuthStore((s) => s.profile);
  const grade = profile?.grade ?? 3;
  const gradeUnits = allUnits.filter((u) => u.grade === grade);
  const reviewUnits = gradeUnits.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <RotateCcw className="h-6 w-6 text-accent" /> 복습
        </h1>
        <p className="text-muted-foreground">잊기 전에 복습해서 기억을 강화하세요!</p>
      </div>

      {/* Review info */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-accent" />
            <div>
              <p className="font-semibold">간격 반복 학습</p>
              <p className="text-sm text-muted-foreground">
                과학적으로 최적의 시점에 복습하여 장기 기억으로 전환합니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review queue */}
      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Clock className="h-5 w-5" /> 오늘의 복습
        </h2>
        {reviewUnits.length > 0 ? (
          <div className="space-y-2">
            {reviewUnits.map((unit) => {
              const unitSkills = allSkills.filter((s) => s.unitId === unit.id);
              return (
                <Link key={unit.id} href={`/learn/${unit.id}/lesson`}>
                  <Card className="cursor-pointer transition-shadow hover:shadow-md">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                        <RotateCcw className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{unit.nameKo}</p>
                        <p className="text-xs text-muted-foreground">
                          {unitSkills.length}개 스킬 · {unit.grade}학년 {unit.semester}학기
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
              <RotateCcw className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">아직 복습할 내용이 없어요</p>
              <Link href="/learn">
                <Button variant="outline" size="sm">학습 시작하기</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
