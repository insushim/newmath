// ============================================================
// Half-Life Regression (HLR) based Spaced Repetition System
// ============================================================
//
// Based on Settles & Meeder (2016) "A Trainable Spaced Repetition Model"
// Duolingo's approach to spaced repetition.
//
// p(recall) = 2^(-Δ / h)
// where Δ = time elapsed since last review, h = half-life
//
// Half-life is updated based on features:
//   h_new = h_old * (2 ^ (θ_correct * is_correct + θ_wrong * (1-is_correct)))
// ============================================================

export interface ReviewItem {
  skillId: string;
  halfLifeDays: number;
  lastPracticedAt: Date;
  totalAttempts: number;
  correctCount: number;
  consecutiveCorrect: number;
  theta: number;
}

export interface ReviewSchedule {
  skillId: string;
  nextReviewAt: Date;
  recallProbability: number;
  priority: number;
  halfLifeDays: number;
}

/** Minimum and maximum half-life boundaries (in days) */
const MIN_HALF_LIFE = 0.5;
const MAX_HALF_LIFE = 365;

/** Initial half-life for a brand new skill (in days) */
const INITIAL_HALF_LIFE = 1.0;

/** Recall threshold below which we consider the item needs review */
const RECALL_THRESHOLD = 0.6;

/** Target recall probability for scheduling */
const TARGET_RECALL = 0.85;

/** Model weights for half-life update */
const CORRECT_WEIGHT = 1.0;
const WRONG_WEIGHT = -0.8;
const STREAK_BONUS_WEIGHT = 0.1;
const ABILITY_WEIGHT = 0.15;

/**
 * Calculate the probability of recall given elapsed time and half-life.
 *
 * p(recall) = 2^(-Δ / h)
 *
 * @param elapsedDays - days since last practice
 * @param halfLifeDays - current half-life in days
 * @returns recall probability [0, 1]
 */
export function calculateRecallProbability(
  elapsedDays: number,
  halfLifeDays: number,
): number {
  if (elapsedDays <= 0) return 1.0;
  if (halfLifeDays <= 0) return 0.0;

  const probability = Math.pow(2, -elapsedDays / halfLifeDays);
  return Math.max(0, Math.min(1, probability));
}

/**
 * Update the half-life after a review attempt.
 *
 * The half-life is adjusted based on:
 * - Whether the answer was correct
 * - Current streak of consecutive correct answers
 * - Student's overall ability (theta) for this skill
 *
 * h_new = h_old * 2^(weighted_features)
 */
export function updateHalfLife(
  currentHalfLife: number,
  isCorrect: boolean,
  consecutiveCorrect: number,
  theta: number,
): number {
  const correctFactor = isCorrect ? CORRECT_WEIGHT : WRONG_WEIGHT;
  const streakFactor = isCorrect ? STREAK_BONUS_WEIGHT * Math.min(consecutiveCorrect, 10) : 0;
  const abilityFactor = ABILITY_WEIGHT * theta;

  const exponent = correctFactor + streakFactor + abilityFactor;
  const newHalfLife = currentHalfLife * Math.pow(2, exponent);

  return Math.max(MIN_HALF_LIFE, Math.min(MAX_HALF_LIFE, newHalfLife));
}

/**
 * Calculate the next review date based on target recall probability.
 *
 * We find Δ such that p(recall at Δ) = target:
 *   target = 2^(-Δ / h)
 *   log2(target) = -Δ / h
 *   Δ = -h * log2(target)
 */
export function calculateNextReviewDate(
  halfLifeDays: number,
  fromDate: Date = new Date(),
  targetRecall: number = TARGET_RECALL,
): Date {
  if (targetRecall <= 0 || targetRecall >= 1) {
    throw new Error('targetRecall must be between 0 and 1 (exclusive)');
  }

  const deltadays = -halfLifeDays * Math.log2(targetRecall);
  const clampedDelta = Math.max(0.25, Math.min(MAX_HALF_LIFE, deltadays));

  const nextDate = new Date(fromDate.getTime());
  nextDate.setTime(nextDate.getTime() + clampedDelta * 24 * 60 * 60 * 1000);

  return nextDate;
}

/**
 * Get the initial half-life for a new skill based on diagnostic performance.
 */
export function getInitialHalfLife(
  diagnosticCorrectRate: number | null,
  theta: number,
): number {
  if (diagnosticCorrectRate === null) {
    return INITIAL_HALF_LIFE;
  }

  // Higher correct rate → longer initial half-life
  const rateFactor = 1 + diagnosticCorrectRate * 2;
  // Higher ability → longer initial half-life
  const abilityFactor = 1 + Math.max(0, theta) * 0.5;

  return Math.max(
    MIN_HALF_LIFE,
    Math.min(MAX_HALF_LIFE, INITIAL_HALF_LIFE * rateFactor * abilityFactor),
  );
}

/**
 * Build a prioritized review schedule from a list of review items.
 *
 * Priority is based on how far below the recall threshold the item has fallen.
 * Items with lower recall probability get higher priority.
 */
export function buildReviewSchedule(
  items: ReviewItem[],
  now: Date = new Date(),
): ReviewSchedule[] {
  const schedules: ReviewSchedule[] = items.map((item) => {
    const elapsedMs = now.getTime() - item.lastPracticedAt.getTime();
    const elapsedDays = elapsedMs / (24 * 60 * 60 * 1000);

    const recallProbability = calculateRecallProbability(elapsedDays, item.halfLifeDays);
    const nextReviewAt = calculateNextReviewDate(item.halfLifeDays, item.lastPracticedAt);

    // Priority: lower recall = higher priority
    // Also factor in how overdue the item is
    let priority = 0;
    if (recallProbability < RECALL_THRESHOLD) {
      priority = (RECALL_THRESHOLD - recallProbability) * 100;
    }
    // Bonus priority if the item is overdue
    if (now.getTime() > nextReviewAt.getTime()) {
      const overdueDays = (now.getTime() - nextReviewAt.getTime()) / (24 * 60 * 60 * 1000);
      priority += overdueDays * 10;
    }

    return {
      skillId: item.skillId,
      nextReviewAt,
      recallProbability,
      priority,
      halfLifeDays: item.halfLifeDays,
    };
  });

  // Sort by priority (highest first)
  schedules.sort((a, b) => b.priority - a.priority);

  return schedules;
}

/**
 * Select items that need review right now (recall probability below threshold).
 */
export function getItemsDueForReview(
  items: ReviewItem[],
  maxItems: number = 10,
  now: Date = new Date(),
): ReviewSchedule[] {
  const schedule = buildReviewSchedule(items, now);
  return schedule.filter((s) => s.recallProbability < RECALL_THRESHOLD).slice(0, maxItems);
}
