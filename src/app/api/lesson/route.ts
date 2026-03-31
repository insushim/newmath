import { NextRequest, NextResponse } from 'next/server';
import { G1_SKILLS, G1_QUESTIONS } from '@/data/curriculum-g1';
import { G2_SKILLS, G2_QUESTIONS } from '@/data/curriculum-g2';
import { G3_SKILLS, G3_QUESTIONS } from '@/data/curriculum-g3';
import { G4_SKILLS, G4_QUESTIONS } from '@/data/curriculum-g4';
import { G5_SKILLS, G5_QUESTIONS } from '@/data/curriculum-g5';
import type { SeedSkill, SeedQuestion } from '@/data/curriculum-types';

const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS];
const allQuestions: SeedQuestion[] = [...G1_QUESTIONS, ...G2_QUESTIONS, ...G3_QUESTIONS, ...G4_QUESTIONS, ...G5_QUESTIONS];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { unitId, sessionType = 'lesson', count = 10 } = body;

  const unitSkills = allSkills.filter((s) => s.unitId === unitId);
  const unitSkillIds = new Set(unitSkills.map((s) => s.id));
  const unitQuestions = allQuestions.filter((q) => unitSkillIds.has(q.skillId));

  // Shuffle and pick
  const shuffled = [...unitQuestions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return NextResponse.json({
    sessionId: crypto.randomUUID(),
    sessionType,
    questions: selected,
    totalQuestions: selected.length,
    estimatedMinutes: Math.ceil(selected.length * 0.5),
  });
}
