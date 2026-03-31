import { NextRequest, NextResponse } from 'next/server';
import { G1_UNITS, G1_SKILLS, G1_QUESTIONS } from '@/data/curriculum-g1';
import { G2_UNITS, G2_SKILLS, G2_QUESTIONS } from '@/data/curriculum-g2';
import { G3_UNITS, G3_SKILLS, G3_QUESTIONS } from '@/data/curriculum-g3';
import { G4_UNITS, G4_SKILLS, G4_QUESTIONS } from '@/data/curriculum-g4';
import { G5_UNITS, G5_SKILLS, G5_QUESTIONS } from '@/data/curriculum-g5';
import type { SeedUnit, SeedSkill, SeedQuestion } from '@/data/curriculum-types';

const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS];
const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const grade = searchParams.get('grade');
  const semester = searchParams.get('semester');

  let units = allUnits;
  if (grade) units = units.filter((u) => u.grade === Number(grade));
  if (semester) units = units.filter((u) => u.semester === Number(semester));

  const unitIds = new Set(units.map((u) => u.id));
  const skills = allSkills.filter((s) => unitIds.has(s.unitId));

  return NextResponse.json({
    domains: [
      { code: 'NUM_OPS', name: '수와 연산', icon: 'calculator', color: '#FF6B6B' },
      { code: 'CHANGE_REL', name: '변화와 관계', icon: 'trending-up', color: '#4ECDC4' },
      { code: 'SHAPE_MEAS', name: '도형과 측정', icon: 'pentagon', color: '#45B7D1' },
      { code: 'DATA_PROB', name: '자료와 가능성', icon: 'bar-chart-3', color: '#96CEB4' },
    ],
    units,
    skills,
  });
}
