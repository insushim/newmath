import { NextRequest, NextResponse } from 'next/server';
import { G1_SKILLS, G1_QUESTIONS, G1_UNITS } from '@/data/curriculum-g1';
import { G2_SKILLS, G2_QUESTIONS, G2_UNITS } from '@/data/curriculum-g2';
import { G3_SKILLS, G3_QUESTIONS, G3_UNITS } from '@/data/curriculum-g3';
import { G4_SKILLS, G4_QUESTIONS, G4_UNITS } from '@/data/curriculum-g4';
import { G5_SKILLS, G5_QUESTIONS, G5_UNITS } from '@/data/curriculum-g5';
import { G6_SKILLS, G6_QUESTIONS, G6_UNITS } from '@/data/curriculum-g6';
import type { SeedSkill, SeedQuestion, SeedUnit } from '@/data/curriculum-types';
import { selectOptimalDifficulty } from '@/lib/adaptive/irt-engine';
import { ensureMinimumPool } from '@/lib/question-generator';

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

/**
 * Select questions matching target difficulty range using IRT.
 */
function selectByDifficulty(
  pool: SeedQuestion[],
  count: number,
  targetDiff: number,
  range: number = 1.5,
): SeedQuestion[] {
  // Sort by distance to target difficulty
  const scored = pool.map(q => ({
    q,
    dist: Math.abs(q.difficulty - targetDiff),
  }));
  scored.sort((a, b) => a.dist - b.dist);

  // Take closest, with some randomization
  const candidates = scored.filter(s => s.dist <= range);
  const selected = shuffle(candidates.length >= count ? candidates : scored)
    .slice(0, count)
    .map(s => s.q);
  return selected;
}

/**
 * Build a balanced lesson with warmup → new → challenge → review structure.
 */
function buildAdaptiveLesson(
  questions: SeedQuestion[],
  theta: number,
  count: number,
): SeedQuestion[] {
  const { targetDifficulty, minDifficulty, maxDifficulty } = selectOptimalDifficulty(theta, 1.0, {
    targetSuccessRate: 0.7,
  });

  // Categorize
  const warmup: SeedQuestion[] = [];
  const onLevel: SeedQuestion[] = [];
  const challenge: SeedQuestion[] = [];

  for (const q of questions) {
    const diff = q.difficulty - theta;
    if (diff < -1.0) warmup.push(q);
    else if (diff > 1.0) challenge.push(q);
    else onLevel.push(q);
  }

  // Build lesson: 1 warmup + 6 on-level + 2 challenge + 1 review
  const lesson: SeedQuestion[] = [];

  // Warmup (easy confidence builder)
  const warmupPick = selectByDifficulty(warmup, 1, theta - 1.5);
  lesson.push(...warmupPick);

  // On-level (adaptive core)
  const onLevelPick = selectByDifficulty(onLevel, Math.min(6, count - 3), targetDifficulty);
  lesson.push(...onLevelPick);

  // Challenge (stretch)
  const challengePick = selectByDifficulty(challenge, 2, theta + 1.0);
  lesson.push(...challengePick);

  // Fill remaining from on-level
  const remaining = count - lesson.length;
  if (remaining > 0) {
    const used = new Set(lesson.map(q => q.id));
    const extra = selectByDifficulty(
      onLevel.filter(q => !used.has(q.id)),
      remaining,
      targetDifficulty,
    );
    lesson.push(...extra);
  }

  // Final shuffle with structure: warmup first, then mixed
  if (lesson.length > 1) {
    const first = lesson[0]; // keep warmup first
    const rest = shuffle(lesson.slice(1));
    return [first, ...rest].slice(0, count);
  }

  return lesson.slice(0, count);
}

/** Get current semester: 3-7월 = 1학기, 8-2월 = 2학기 */
function getCurrentSemester(): number {
  const month = new Date().getMonth() + 1; // 1-12
  return (month >= 3 && month <= 7) ? 1 : 2;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    unitId,
    grade,
    sessionType = 'lesson',
    count = 10,
    theta = 0,
    skillId,
    semester, // optional: override semester
  } = body;

  // Determine current semester (선행학습 금지법 준수)
  const currentSemester = semester ?? getCurrentSemester();

  let selected: SeedQuestion[] = [];

  if (sessionType === 'daily_quest' && grade) {
    // Daily quest: ONLY from current semester (선행학습 금지)
    const gradeUnits = allUnits.filter((u) => u.grade === grade && u.semester <= currentSemester);
    const gradeUnitIds = new Set(gradeUnits.map((u) => u.id));
    const gradeSkills = allSkills.filter((s) => gradeUnitIds.has(s.unitId));
    const gradeSkillIds = new Set(gradeSkills.map((s) => s.id));

    // Get seed questions + generate more if needed
    let pool = allQuestions.filter((q) => gradeSkillIds.has(q.skillId));

    // Ensure each skill has enough questions via procedural generation
    for (const skill of gradeSkills) {
      const skillPool = pool.filter(q => q.skillId === skill.id);
      if (skillPool.length < 5) {
        const extra = ensureMinimumPool(
          skillPool, skill.id, skill.code, grade,
          theta, 8,
        );
        pool = [...pool.filter(q => q.skillId !== skill.id), ...extra];
      }
    }

    // Build adaptive lesson using IRT
    selected = buildAdaptiveLesson(pool, theta, count);

    // If adaptive selection didn't produce enough, fallback to round-robin
    if (selected.length < count) {
      const byUnit = new Map<string, SeedQuestion[]>();
      for (const q of pool) {
        const skill = gradeSkills.find((s) => s.id === q.skillId);
        if (!skill) continue;
        const uid = skill.unitId;
        if (!byUnit.has(uid)) byUnit.set(uid, []);
        byUnit.get(uid)!.push(q);
      }

      const unitKeys = shuffle([...byUnit.keys()]);
      let idx = 0;
      const used = new Set(selected.map(q => q.id));
      while (selected.length < count && idx < unitKeys.length * 3) {
        const uid = unitKeys[idx % unitKeys.length];
        const unitPool = byUnit.get(uid) ?? [];
        const available = unitPool.filter((q) => !used.has(q.id));
        if (available.length > 0) {
          const pick = available[Math.floor(Math.random() * available.length)];
          selected.push(pick);
          used.add(pick.id);
        }
        idx++;
      }
    }

    selected = selected.slice(0, count);
  } else if (sessionType === 'skill_practice' && skillId) {
    // Focused practice on a single skill
    const skill = allSkills.find(s => s.id === skillId);
    const skillGrade = skill ? allUnits.find(u => u.id === skill.unitId)?.grade ?? 3 : 3;
    let pool = allQuestions.filter((q) => q.skillId === skillId);

    // Ensure minimum pool via procedural generation
    pool = ensureMinimumPool(
      pool, skillId, skill?.code ?? '', skillGrade, theta, 15,
    );

    selected = buildAdaptiveLesson(pool, theta, count);
  } else if (sessionType === 'review') {
    // Review session: only current semester (선행학습 금지)
    const gradeUnits = allUnits.filter((u) => u.grade === (grade ?? 3) && u.semester <= currentSemester);
    const gradeUnitIds = new Set(gradeUnits.map((u) => u.id));
    const gradeSkills = allSkills.filter((s) => gradeUnitIds.has(s.unitId));

    let pool = allQuestions.filter((q) => gradeSkills.some(s => s.id === q.skillId));

    // For review, target slightly easier questions (70% success rate)
    const { targetDifficulty } = selectOptimalDifficulty(theta, 1.0, { targetSuccessRate: 0.75 });
    selected = selectByDifficulty(pool, count, targetDifficulty, 2.0);
  } else {
    // Unit-specific lesson
    const unitSkills = allSkills.filter((s) => s.unitId === unitId);
    const unitSkillIds = new Set(unitSkills.map((s) => s.id));
    const unit = allUnits.find(u => u.id === unitId);
    let pool = allQuestions.filter((q) => unitSkillIds.has(q.skillId));

    // Ensure minimum pool for each skill
    for (const skill of unitSkills) {
      const skillPool = pool.filter(q => q.skillId === skill.id);
      if (skillPool.length < 5) {
        const extra = ensureMinimumPool(
          skillPool, skill.id, skill.code, unit?.grade ?? 3, theta, 8,
        );
        pool = [...pool.filter(q => q.skillId !== skill.id), ...extra];
      }
    }

    selected = buildAdaptiveLesson(pool, theta, count);
  }

  // Tag each question with its purpose for the UI
  const taggedQuestions = selected.map((q, i) => {
    let purpose: string;
    if (i === 0 && q.difficulty < theta - 0.5) purpose = 'warmup';
    else if (q.difficulty > theta + 0.8) purpose = 'challenge';
    else purpose = 'practice';

    return {
      ...q,
      _purpose: purpose,
      _index: i,
    };
  });

  return NextResponse.json({
    sessionId: crypto.randomUUID(),
    sessionType,
    questions: taggedQuestions,
    totalQuestions: taggedQuestions.length,
    estimatedMinutes: Math.ceil(taggedQuestions.length * 0.5),
    targetDifficulty: selectOptimalDifficulty(theta, 1.0).targetDifficulty,
    studentTheta: theta,
  });
}
