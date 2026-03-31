'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/stores/auth-store';
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { G1_UNITS } from '@/data/curriculum-g1';
import { G2_UNITS } from '@/data/curriculum-g2';
import { G3_UNITS } from '@/data/curriculum-g3';
import { G4_UNITS } from '@/data/curriculum-g4';
import { G5_UNITS } from '@/data/curriculum-g5';
import { G6_UNITS } from '@/data/curriculum-g6';
import type { SeedUnit } from '@/data/curriculum-types';

const allUnits: Record<number, SeedUnit[]> = {
  1: G1_UNITS,
  2: G2_UNITS,
  3: G3_UNITS,
  4: G4_UNITS,
  5: G5_UNITS,
  6: G6_UNITS,
};

const domainMeta: Record<string, { label: string; emoji: string; color: string }> = {
  NUM_OPS: { label: '수와 연산', emoji: '🔢', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  CHANGE_REL: { label: '변화와 관계', emoji: '📈', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
  SHAPE_MEAS: { label: '도형과 측정', emoji: '📐', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  DATA_PROB: { label: '자료와 가능성', emoji: '📊', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
};

export default function LearnPage() {
  const profile = useAuthStore((s) => s.profile);
  const userGrade = profile?.grade ?? 3;
  const [selectedGrade, setSelectedGrade] = useState(userGrade);

  const units = allUnits[selectedGrade] ?? [];
  const semester1 = units.filter((u) => u.semester === 1);
  const semester2 = units.filter((u) => u.semester === 2);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">학습하기</h1>
        <p className="text-muted-foreground">단원을 선택해서 학습을 시작하세요</p>
      </div>

      {/* Grade selector */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {[1, 2, 3, 4, 5, 6].map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGrade(g)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedGrade === g
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {g}학년
          </button>
        ))}
      </div>

      {/* Semester tabs */}
      <Tabs defaultValue="s1">
        <TabsList className="w-full">
          <TabsTrigger value="s1" className="flex-1">1학기</TabsTrigger>
          <TabsTrigger value="s2" className="flex-1">2학기</TabsTrigger>
        </TabsList>

        <TabsContent value="s1" className="mt-4 space-y-3">
          {semester1.length > 0 ? (
            semester1.map((unit, i) => (
              <UnitCard key={unit.id} unit={unit} index={i} />
            ))
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              {selectedGrade}학년 1학기 데이터 준비 중이에요
            </p>
          )}
        </TabsContent>

        <TabsContent value="s2" className="mt-4 space-y-3">
          {semester2.length > 0 ? (
            semester2.map((unit, i) => (
              <UnitCard key={unit.id} unit={unit} index={i} />
            ))
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              {selectedGrade}학년 2학기 데이터 준비 중이에요
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function UnitCard({ unit, index }: { unit: SeedUnit; index: number }) {
  const domain = domainMeta[unit.domainCode];

  return (
    <Link href={`/learn/${unit.id}`}>
      <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
            {domain?.emoji ?? '📚'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground font-medium">{unit.code}</span>
              <Badge variant="secondary" className={`text-[10px] px-1.5 py-0 ${domain?.color ?? ''}`}>
                {domain?.label ?? unit.domainCode}
              </Badge>
            </div>
            <p className="font-semibold truncate">{unit.nameKo}</p>
            <p className="text-xs text-muted-foreground truncate mt-0.5">{unit.descriptionKo}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
        </CardContent>
      </Card>
    </Link>
  );
}
