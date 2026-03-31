'use client';

import { use } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, CheckCircle2, Circle, BookOpen } from 'lucide-react';
import { G1_UNITS, G1_SKILLS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS } from '@/data/curriculum-g5';
import { G6_UNITS, G6_SKILLS } from '@/data/curriculum-g6';
import type { SeedUnit, SeedSkill } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS, ...G6_UNITS];
const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS];

export default function UnitDetailPage({ params }: { params: Promise<{ unitId: string }> }) {
  const { unitId } = use(params);
  const unit = allUnits.find((u) => u.id === unitId);
  const skills = allSkills.filter((s) => s.unitId === unitId);

  if (!unit) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold mb-2">단원을 찾을 수 없어요</p>
        <Link href="/learn">
          <Button variant="outline">학습 목록으로 돌아가기</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3">
          <ArrowLeft className="h-4 w-4" /> 단원 목록
        </Link>
        <h1 className="text-2xl font-bold">{unit.nameKo}</h1>
        <p className="text-muted-foreground mt-1">{unit.descriptionKo}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <span>{unit.grade}학년 {unit.semester}학기</span>
          <span>·</span>
          <span>{skills.length}개 스킬</span>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">진행률</span>
            <span className="text-xs text-muted-foreground">0 / {skills.length} 마스터</span>
          </div>
          <Progress value={0} className="h-2" />
        </CardContent>
      </Card>

      {/* Start lesson button */}
      <Link href={`/learn/${unitId}/lesson`}>
        <Button className="w-full h-12 text-base gap-2">
          <Play className="h-5 w-5" /> 학습 시작하기
        </Button>
      </Link>

      {/* Skills list */}
      <div>
        <h2 className="text-lg font-bold mb-3">학습 스킬</h2>
        <div className="space-y-2">
          {skills.map((skill, i) => (
            <Card key={skill.id}>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{skill.nameKo}</p>
                  {skill.conceptExplanation && (
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{skill.conceptExplanation}</p>
                  )}
                </div>
                <Circle className="h-5 w-5 text-muted-foreground/30" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
