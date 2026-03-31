// ============================================================
// Lesson Set Generator
// ============================================================
//
// Generates a balanced set of questions for a learning session
// by mixing new, review, and challenge questions based on
// the student's ability and spaced repetition schedule.
// ============================================================

import type { Question, StudentAbility, DifficultyLabel } from '@/types/database';
import { selectOptimalDifficulty, type IRTItem } from './irt-engine';
import { calculateRecallProbability } from './spaced-repetition';

export interface LessonConfig {
  totalQuestions: number;
  newRatio: number;
  reviewRatio: number;
  challengeRatio: number;
  targetSuccessRate: number;
}

export interface GeneratedLesson {
  questions: LessonQuestion[];
  estimatedDuration: number;
  difficultyProfile: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export interface LessonQuestion {
  question: Question;
  purpose: 'new' | 'review' | 'challenge' | 'warmup';
  expectedDifficulty: DifficultyLabel;
}

const DEFAULT_CONFIG: LessonConfig = {
  totalQuestions: 10,
  newRatio: 0.5,
  reviewRatio: 0.3,
  challengeRatio: 0.2,
  targetSuccessRate: 0.7,
};

/**
 * Generate a balanced lesson set from available questions and student abilities.
 *
 * Instead of querying the DB directly, this function accepts pre-fetched data
 * so it can be used with dependency injection.
 */
export function generateLessonSet(
  availableQuestions: Question[],
  abilities: StudentAbility[],
  skillIds: string[],
  config: Partial<LessonConfig> = {},
): GeneratedLesson {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const { totalQuestions, newRatio, reviewRatio, challengeRatio, targetSuccessRate } = cfg;

  // Build ability map for quick lookup
  const abilityMap = new Map<string, StudentAbility>();
  for (const ability of abilities) {
    abilityMap.set(ability.skill_id, ability);
  }

  // Calculate average theta across target skills
  const relevantAbilities = skillIds
    .map((id) => abilityMap.get(id))
    .filter((a): a is StudentAbility => a !== undefined);

  const avgTheta =
    relevantAbilities.length > 0
      ? relevantAbilities.reduce((sum, a) => sum + a.theta, 0) / relevantAbilities.length
      : 0;

  const avgSE =
    relevantAbilities.length > 0
      ? relevantAbilities.reduce((sum, a) => sum + a.theta_se, 0) / relevantAbilities.length
      : 1.0;

  // Separate questions by purpose
  const reviewQuestions: Question[] = [];
  const newQuestions: Question[] = [];
  const challengeQuestions: Question[] = [];

  const now = new Date();

  for (const q of availableQuestions) {
    if (!skillIds.includes(q.skill_id)) continue;
    if (!q.is_active) continue;

    const ability = abilityMap.get(q.skill_id);

    if (ability && ability.last_practiced_at) {
      const elapsedMs = now.getTime() - new Date(ability.last_practiced_at).getTime();
      const elapsedDays = elapsedMs / (24 * 60 * 60 * 1000);
      const recall = calculateRecallProbability(elapsedDays, ability.half_life_days);

      if (recall < 0.6) {
        reviewQuestions.push(q);
        continue;
      }
    }

    // Classify by difficulty relative to student ability
    const diffFromTheta = q.difficulty_irt_b - avgTheta;

    if (diffFromTheta > 1.0) {
      challengeQuestions.push(q);
    } else {
      newQuestions.push(q);
    }
  }

  // Calculate counts for each category
  const reviewCount = Math.min(
    Math.round(totalQuestions * reviewRatio),
    reviewQuestions.length,
  );
  const challengeCount = Math.min(
    Math.round(totalQuestions * challengeRatio),
    challengeQuestions.length,
  );
  const newCount = Math.min(
    totalQuestions - reviewCount - challengeCount,
    newQuestions.length,
  );
  const remaining = totalQuestions - newCount - reviewCount - challengeCount;

  // Select optimal difficulty range
  const { targetDifficulty, minDifficulty, maxDifficulty } = selectOptimalDifficulty(
    avgTheta,
    avgSE,
    { targetSuccessRate },
  );

  // Select questions with optimal difficulty matching
  const selectedNew = selectByDifficulty(newQuestions, newCount + remaining, targetDifficulty, minDifficulty, maxDifficulty);
  const selectedReview = selectByDifficulty(reviewQuestions, reviewCount, targetDifficulty - 0.5, minDifficulty - 0.5, maxDifficulty);
  const selectedChallenge = selectByDifficulty(challengeQuestions, challengeCount, targetDifficulty + 1.0, targetDifficulty, maxDifficulty + 1.0);

  // Build lesson questions
  const lessonQuestions: LessonQuestion[] = [
    ...selectedNew.map((q) => ({
      question: q,
      purpose: 'new' as const,
      expectedDifficulty: q.difficulty_label,
    })),
    ...selectedReview.map((q) => ({
      question: q,
      purpose: 'review' as const,
      expectedDifficulty: q.difficulty_label,
    })),
    ...selectedChallenge.map((q) => ({
      question: q,
      purpose: 'challenge' as const,
      expectedDifficulty: q.difficulty_label,
    })),
  ];

  // Interleave the questions
  const interleaved = interleaveQuestions(lessonQuestions);

  // Add warmup question at the start if possible
  const warmup = selectWarmup(availableQuestions, skillIds, avgTheta);
  if (warmup && interleaved.length < totalQuestions) {
    interleaved.unshift({
      question: warmup,
      purpose: 'warmup',
      expectedDifficulty: warmup.difficulty_label,
    });
  }

  // Trim to exact count
  const finalQuestions = interleaved.slice(0, totalQuestions);

  // Calculate difficulty profile
  let easy = 0;
  let medium = 0;
  let hard = 0;
  for (const lq of finalQuestions) {
    const b = lq.question.difficulty_irt_b;
    if (b < -0.5) easy++;
    else if (b <= 0.5) medium++;
    else hard++;
  }

  // Estimate duration: ~30s per question average, adjusted by difficulty
  const estimatedDuration = finalQuestions.reduce((sum, lq) => {
    const baseSec = 30;
    const diffMultiplier = 1 + (lq.question.difficulty_irt_b - avgTheta) * 0.3;
    return sum + baseSec * Math.max(0.5, diffMultiplier);
  }, 0);

  return {
    questions: finalQuestions,
    estimatedDuration: Math.round(estimatedDuration),
    difficultyProfile: { easy, medium, hard },
  };
}

/**
 * Select questions closest to the target difficulty within the given range.
 */
function selectByDifficulty(
  questions: Question[],
  count: number,
  targetDifficulty: number,
  minDifficulty: number,
  maxDifficulty: number,
): Question[] {
  if (count <= 0) return [];

  // Filter to difficulty range
  let filtered = questions.filter(
    (q) => q.difficulty_irt_b >= minDifficulty && q.difficulty_irt_b <= maxDifficulty,
  );

  // If not enough in range, use all questions
  if (filtered.length < count) {
    filtered = [...questions];
  }

  // Sort by distance from target difficulty
  filtered.sort(
    (a, b) =>
      Math.abs(a.difficulty_irt_b - targetDifficulty) -
      Math.abs(b.difficulty_irt_b - targetDifficulty),
  );

  // Add slight randomness: shuffle items with similar difficulty
  const selected = filtered.slice(0, Math.min(count * 2, filtered.length));
  shuffleArray(selected);

  return selected.slice(0, count);
}

/**
 * Select an easy warmup question for the start of the session.
 */
function selectWarmup(
  questions: Question[],
  skillIds: string[],
  theta: number,
): Question | null {
  const easyQuestions = questions.filter(
    (q) =>
      skillIds.includes(q.skill_id) &&
      q.is_active &&
      q.difficulty_irt_b < theta - 0.5,
  );

  if (easyQuestions.length === 0) return null;

  return easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
}

/**
 * Interleave questions from different categories to create
 * a varied and engaging sequence.
 *
 * Pattern: new, new, review, new, challenge, review, new, ...
 * Avoids clustering same-type questions together.
 */
export function interleaveQuestions(questions: LessonQuestion[]): LessonQuestion[] {
  const buckets: Record<string, LessonQuestion[]> = {
    warmup: [],
    new: [],
    review: [],
    challenge: [],
  };

  for (const q of questions) {
    buckets[q.purpose].push(q);
  }

  // Shuffle within each bucket for variety
  for (const key of Object.keys(buckets)) {
    shuffleArray(buckets[key]);
  }

  const result: LessonQuestion[] = [];
  const maxLen = Math.max(
    buckets.new.length,
    buckets.review.length,
    buckets.challenge.length,
  );

  // Round-robin interleave: 2 new, 1 review, 1 new, 1 challenge, 1 review, ...
  let newIdx = 0;
  let reviewIdx = 0;
  let challengeIdx = 0;

  for (let round = 0; round < maxLen; round++) {
    // Add 2 new questions per round
    if (newIdx < buckets.new.length) {
      result.push(buckets.new[newIdx++]);
    }
    if (newIdx < buckets.new.length) {
      result.push(buckets.new[newIdx++]);
    }

    // Add 1 review
    if (reviewIdx < buckets.review.length) {
      result.push(buckets.review[reviewIdx++]);
    }

    // Add 1 new
    if (newIdx < buckets.new.length) {
      result.push(buckets.new[newIdx++]);
    }

    // Add 1 challenge
    if (challengeIdx < buckets.challenge.length) {
      result.push(buckets.challenge[challengeIdx++]);
    }

    // Add 1 review
    if (reviewIdx < buckets.review.length) {
      result.push(buckets.review[reviewIdx++]);
    }
  }

  return result;
}

/**
 * Fisher-Yates shuffle (in-place).
 */
function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
