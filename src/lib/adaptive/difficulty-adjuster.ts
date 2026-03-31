// ============================================================
// Real-time Difficulty Adjuster
// ============================================================
//
// Adjusts difficulty within a learning session based on
// the student's ongoing performance patterns.
// ============================================================

import type { DifficultyLabel } from '@/types/database';

export interface SessionState {
  currentDifficulty: number;
  consecutiveCorrect: number;
  consecutiveWrong: number;
  totalCorrect: number;
  totalAttempts: number;
  recentResults: boolean[];
  streakMultiplier: number;
  difficultyLabel: DifficultyLabel;
  isInFlowState: boolean;
  flowStreakThreshold: number;
  frustrationThreshold: number;
}

export interface AdjustmentResult {
  newDifficulty: number;
  newLabel: DifficultyLabel;
  feedbackType: 'praise' | 'encourage' | 'hint_more' | 'review_suggest';
  shouldInsertReview: boolean;
  shouldOfferHint: boolean;
  message: string;
}

/** How many recent results to track for trend analysis */
const RECENT_WINDOW = 8;

/** Difficulty step sizes */
const STEP_UP = 0.3;
const STEP_DOWN = 0.4;
const SMALL_STEP_UP = 0.15;
const SMALL_STEP_DOWN = 0.2;

/** Thresholds */
const FLOW_STREAK = 4;
const FRUSTRATION_STREAK = 3;
const MIN_DIFFICULTY = -3.5;
const MAX_DIFFICULTY = 3.5;

/**
 * Map a numeric difficulty to a label.
 */
export function difficultyToLabel(difficulty: number): DifficultyLabel {
  if (difficulty <= -1.5) return 'very_easy';
  if (difficulty <= -0.5) return 'easy';
  if (difficulty <= 0.5) return 'medium';
  if (difficulty <= 1.5) return 'hard';
  return 'very_hard';
}

/**
 * Map a label to an approximate numeric difficulty.
 */
export function labelToDifficulty(label: DifficultyLabel): number {
  switch (label) {
    case 'very_easy':
      return -2.0;
    case 'easy':
      return -1.0;
    case 'medium':
      return 0.0;
    case 'hard':
      return 1.0;
    case 'very_hard':
      return 2.0;
  }
}

/**
 * Create initial session state.
 */
export function createSessionState(initialDifficulty: number = 0): SessionState {
  return {
    currentDifficulty: initialDifficulty,
    consecutiveCorrect: 0,
    consecutiveWrong: 0,
    totalCorrect: 0,
    totalAttempts: 0,
    recentResults: [],
    streakMultiplier: 1.0,
    difficultyLabel: difficultyToLabel(initialDifficulty),
    isInFlowState: false,
    flowStreakThreshold: FLOW_STREAK,
    frustrationThreshold: FRUSTRATION_STREAK,
  };
}

/**
 * Calculate the recent accuracy from the sliding window.
 */
function getRecentAccuracy(results: boolean[]): number {
  if (results.length === 0) return 0.5;
  const correct = results.filter(Boolean).length;
  return correct / results.length;
}

/**
 * Detect if the student is oscillating (correct/wrong alternating).
 * This suggests the difficulty is right at their boundary.
 */
function isOscillating(results: boolean[]): boolean {
  if (results.length < 4) return false;
  const last4 = results.slice(-4);
  let changes = 0;
  for (let i = 1; i < last4.length; i++) {
    if (last4[i] !== last4[i - 1]) changes++;
  }
  return changes >= 3;
}

/**
 * Adjust difficulty based on a new response.
 *
 * The algorithm:
 * 1. Track consecutive correct/wrong and recent results
 * 2. If in a flow state (consecutive correct ≥ threshold), step up
 * 3. If frustrated (consecutive wrong ≥ threshold), step down and suggest review
 * 4. If oscillating, make small adjustments
 * 5. Otherwise, make gradual adjustments based on recent accuracy
 */
export function adjustDifficulty(
  state: SessionState,
  isCorrect: boolean,
  timeSpentMs: number,
): { state: SessionState; result: AdjustmentResult } {
  // Update tracking
  const newTotalAttempts = state.totalAttempts + 1;
  const newTotalCorrect = state.totalCorrect + (isCorrect ? 1 : 0);
  const newConsecutiveCorrect = isCorrect ? state.consecutiveCorrect + 1 : 0;
  const newConsecutiveWrong = isCorrect ? 0 : state.consecutiveWrong + 1;
  const newRecentResults = [...state.recentResults, isCorrect].slice(-RECENT_WINDOW);

  const recentAccuracy = getRecentAccuracy(newRecentResults);
  const oscillating = isOscillating(newRecentResults);

  let newDifficulty = state.currentDifficulty;
  let feedbackType: AdjustmentResult['feedbackType'] = 'praise';
  let shouldInsertReview = false;
  let shouldOfferHint = false;
  let message = '';
  let isInFlowState = false;

  // Very fast correct answer → might be too easy
  const isTooFast = isCorrect && timeSpentMs < 3000;
  // Very slow answer → might be struggling
  const isTooSlow = timeSpentMs > 60_000;

  if (newConsecutiveCorrect >= state.flowStreakThreshold) {
    // Flow state: student is doing well, increase difficulty
    isInFlowState = true;
    const step = isTooFast ? STEP_UP : SMALL_STEP_UP;
    newDifficulty = state.currentDifficulty + step;
    feedbackType = 'praise';
    message = getFlowMessage(newConsecutiveCorrect);
  } else if (newConsecutiveWrong >= state.frustrationThreshold) {
    // Frustration: step down difficulty and potentially insert a review question
    newDifficulty = state.currentDifficulty - STEP_DOWN;
    shouldInsertReview = newConsecutiveWrong >= state.frustrationThreshold + 1;
    shouldOfferHint = true;
    feedbackType = newConsecutiveWrong >= 4 ? 'review_suggest' : 'encourage';
    message = getFrustrationMessage(newConsecutiveWrong);
  } else if (oscillating) {
    // At the boundary — hold steady or make tiny adjustments
    if (recentAccuracy >= 0.5) {
      newDifficulty = state.currentDifficulty + SMALL_STEP_UP * 0.5;
    } else {
      newDifficulty = state.currentDifficulty - SMALL_STEP_DOWN * 0.5;
    }
    feedbackType = isCorrect ? 'praise' : 'encourage';
    message = isCorrect ? '잘하고 있어요!' : '거의 다 왔어요! 다시 한번 해볼까요?';
  } else if (isCorrect) {
    // Single correct — small step up
    newDifficulty = state.currentDifficulty + SMALL_STEP_UP;
    feedbackType = 'praise';
    message = getCorrectMessage();
  } else {
    // Single wrong — small step down
    newDifficulty = state.currentDifficulty - SMALL_STEP_DOWN;
    shouldOfferHint = true;
    feedbackType = 'hint_more';
    message = getWrongMessage();
  }

  // Apply speed adjustments
  if (isTooFast && isCorrect) {
    newDifficulty += SMALL_STEP_UP;
  } else if (isTooSlow) {
    newDifficulty -= SMALL_STEP_DOWN * 0.5;
    shouldOfferHint = true;
  }

  // Clamp
  newDifficulty = Math.max(MIN_DIFFICULTY, Math.min(MAX_DIFFICULTY, newDifficulty));

  const newLabel = difficultyToLabel(newDifficulty);

  const newState: SessionState = {
    currentDifficulty: newDifficulty,
    consecutiveCorrect: newConsecutiveCorrect,
    consecutiveWrong: newConsecutiveWrong,
    totalCorrect: newTotalCorrect,
    totalAttempts: newTotalAttempts,
    recentResults: newRecentResults,
    streakMultiplier: isInFlowState ? Math.min(state.streakMultiplier + 0.1, 2.0) : 1.0,
    difficultyLabel: newLabel,
    isInFlowState,
    flowStreakThreshold: state.flowStreakThreshold,
    frustrationThreshold: state.frustrationThreshold,
  };

  return {
    state: newState,
    result: {
      newDifficulty,
      newLabel,
      feedbackType,
      shouldInsertReview,
      shouldOfferHint,
      message,
    },
  };
}

// ─── Feedback Messages (Korean) ──────────────────────────────

const CORRECT_MESSAGES = [
  '정답이에요! 👏',
  '맞았어요! 잘했어요!',
  '훌륭해요! 정답!',
  '대단해요! 맞았어요!',
  '정확해요! 멋져요!',
];

const WRONG_MESSAGES = [
  '아쉬워요! 다시 생각해 볼까요?',
  '괜찮아요, 틀려도 배울 수 있어요!',
  '힌트를 볼까요?',
  '다시 한번 도전해 봐요!',
];

const FLOW_MESSAGES: Record<number, string> = {
  4: '연속 4문제 정답! 대단해요! 🔥',
  5: '5연속 정답! 불꽃이 타오르고 있어요! 🔥🔥',
  6: '6연속! 멈출 수가 없네요!',
  7: '7연속 정답! 수학 천재인가요? ⭐',
  8: '8연속! 놀라운 실력이에요!',
  9: '9연속! 거의 전설이에요!',
  10: '10연속 정답! 전설 달성! 🏆',
};

const FRUSTRATION_MESSAGES: Record<number, string> = {
  3: '어려운 문제였어요. 조금 쉬운 문제로 가볼까요?',
  4: '괜찮아요! 복습 문제를 풀어보는 건 어떨까요?',
  5: '함께 천천히 풀어봐요. 기초부터 다시 시작해볼까요?',
};

function getCorrectMessage(): string {
  return CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)];
}

function getWrongMessage(): string {
  return WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)];
}

function getFlowMessage(streak: number): string {
  if (streak >= 10) return FLOW_MESSAGES[10];
  return FLOW_MESSAGES[streak] ?? `${streak}연속 정답! 대단해요!`;
}

function getFrustrationMessage(streak: number): string {
  if (streak >= 5) return FRUSTRATION_MESSAGES[5];
  return FRUSTRATION_MESSAGES[streak] ?? '괜찮아요! 함께 풀어봐요!';
}
