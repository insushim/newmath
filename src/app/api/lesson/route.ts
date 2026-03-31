import { NextRequest, NextResponse } from 'next/server';
import { G1_SKILLS, G1_QUESTIONS, G1_UNITS } from '@/data/curriculum-g1';
import { G2_SKILLS, G2_QUESTIONS, G2_UNITS } from '@/data/curriculum-g2';
import { G3_SKILLS, G3_QUESTIONS, G3_UNITS } from '@/data/curriculum-g3';
import { G4_SKILLS, G4_QUESTIONS, G4_UNITS } from '@/data/curriculum-g4';
import { G5_SKILLS, G5_QUESTIONS, G5_UNITS } from '@/data/curriculum-g5';
import { G6_SKILLS, G6_QUESTIONS, G6_UNITS } from '@/data/curriculum-g6';
import type { SeedSkill, SeedQuestion, SeedUnit } from '@/data/curriculum-types';

const allSkills: SeedSkill[] = [...G1_SKILLS, ...G2_SKILLS, ...G3_SKILLS, ...G4_SKILLS, ...G5_SKILLS, ...G6_SKILLS];
const allQuestions: SeedQuestion[] = [...G1_QUESTIONS, ...G2_QUESTIONS, ...G3_QUESTIONS, ...G4_QUESTIONS, ...G5_QUESTIONS, ...G6_QUESTIONS];
const allUnits: SeedUnit[] = [...G1_UNITS, ...G2_UNITS, ...G3_UNITS, ...G4_UNITS, ...G5_UNITS, ...G6_UNITS];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { unitId, grade, sessionType = 'lesson', count = 10 } = body;

  let selected: SeedQuestion[] = [];

  if (sessionType === 'daily_quest' && grade) {
    // Auto-select questions from the student's grade across all units
    const gradeUnits = allUnits.filter((u) => u.grade === grade);
    const gradeUnitIds = new Set(gradeUnits.map((u) => u.id));
    const gradeSkills = allSkills.filter((s) => gradeUnitIds.has(s.unitId));
    const gradeSkillIds = new Set(gradeSkills.map((s) => s.id));
    const gradeQuestions = allQuestions.filter((q) => gradeSkillIds.has(q.skillId));

    // Mix: pick from different units for variety
    const byUnit = new Map<string, SeedQuestion[]>();
    for (const q of gradeQuestions) {
      const skill = gradeSkills.find((s) => s.id === q.skillId);
      if (!skill) continue;
      const uid = skill.unitId;
      if (!byUnit.has(uid)) byUnit.set(uid, []);
      byUnit.get(uid)!.push(q);
    }

    // Round-robin from shuffled units
    const unitKeys = shuffle([...byUnit.keys()]);
    let idx = 0;
    const used = new Set<string>();
    while (selected.length < count && idx < unitKeys.length * 3) {
      const uid = unitKeys[idx % unitKeys.length];
      const pool = byUnit.get(uid) ?? [];
      const available = pool.filter((q) => !used.has(q.id));
      if (available.length > 0) {
        const pick = available[Math.floor(Math.random() * available.length)];
        selected.push(pick);
        used.add(pick.id);
      }
      idx++;
    }

    // If not enough, fill from remaining
    if (selected.length < count) {
      const remaining = shuffle(gradeQuestions.filter((q) => !used.has(q.id)));
      selected.push(...remaining.slice(0, count - selected.length));
    }

    selected = selected.slice(0, count);
  } else {
    // Unit-specific lesson (existing behavior)
    const unitSkills = allSkills.filter((s) => s.unitId === unitId);
    const unitSkillIds = new Set(unitSkills.map((s) => s.id));
    const unitQuestions = allQuestions.filter((q) => unitSkillIds.has(q.skillId));
    selected = shuffle(unitQuestions).slice(0, Math.min(count, unitQuestions.length));
  }

  return NextResponse.json({
    sessionId: crypto.randomUUID(),
    sessionType,
    questions: selected,
    totalQuestions: selected.length,
    estimatedMinutes: Math.ceil(selected.length * 0.5),
  });
}
