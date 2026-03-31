import { create } from 'zustand';
import type {
  Question,
  QuestionResponse,
  SessionType,
  SessionStatus,
  DifficultyLabel,
  FeedbackType,
} from '@/types/database';
import type { SessionState } from '@/lib/adaptive/difficulty-adjuster';
import { createSessionState } from '@/lib/adaptive/difficulty-adjuster';

export interface ActiveQuestion {
  question: Question;
  purpose: 'new' | 'review' | 'challenge' | 'warmup';
  startedAt: number;
}

interface LearningState {
  /** Current session ID */
  sessionId: string | null;
  /** Session type */
  sessionType: SessionType | null;
  /** Session status */
  status: SessionStatus | null;
  /** Target skill IDs for this session */
  skillIds: string[];

  /** All questions in the session */
  questions: ActiveQuestion[];
  /** Index of the current question */
  currentIndex: number;
  /** The question currently being displayed */
  currentQuestion: ActiveQuestion | null;

  /** Total correct answers */
  correctCount: number;
  /** Total wrong answers */
  wrongCount: number;
  /** Total skipped questions */
  skippedCount: number;
  /** XP earned in this session */
  xpEarned: number;
  /** Coins earned in this session */
  coinsEarned: number;

  /** Responses recorded in this session */
  responses: QuestionResponse[];

  /** Difficulty adjuster state */
  difficultyState: SessionState;

  /** Whether a hint is currently shown */
  isHintShown: boolean;
  /** Current feedback message */
  feedbackMessage: string | null;
  /** Current feedback type */
  feedbackType: FeedbackType | null;
  /** Whether the session is paused */
  isPaused: boolean;
  /** Whether we're showing the result overlay */
  isShowingResult: boolean;
  /** Timer for the current question (ms) */
  questionTimer: number;

  /** Session started timestamp */
  startedAt: number | null;
  /** Session total elapsed time (ms) */
  elapsedMs: number;

  // ─── Actions ──────────────────────────────────────────────

  /** Start a new learning session */
  startSession: (params: {
    sessionId: string;
    sessionType: SessionType;
    skillIds: string[];
    questions: ActiveQuestion[];
    initialDifficulty?: number;
  }) => void;

  /** Submit an answer for the current question */
  submitAnswer: (params: {
    givenAnswer: string;
    isCorrect: boolean;
    timeSpentMs: number;
    response: QuestionResponse;
  }) => void;

  /** Skip the current question */
  skipQuestion: () => void;

  /** Move to the next question */
  nextQuestion: () => void;

  /** Show hint for current question */
  showHint: () => void;

  /** Set feedback message */
  setFeedback: (message: string | null, type: FeedbackType | null) => void;

  /** Toggle pause */
  togglePause: () => void;

  /** Update elapsed time */
  updateElapsed: (ms: number) => void;

  /** Add XP and coins */
  addRewards: (xp: number, coins: number) => void;

  /** Complete the session */
  completeSession: () => void;

  /** Abandon the session */
  abandonSession: () => void;

  /** Reset the store */
  reset: () => void;
}

const initialState = {
  sessionId: null,
  sessionType: null,
  status: null,
  skillIds: [],
  questions: [],
  currentIndex: 0,
  currentQuestion: null,
  correctCount: 0,
  wrongCount: 0,
  skippedCount: 0,
  xpEarned: 0,
  coinsEarned: 0,
  responses: [],
  difficultyState: createSessionState(0),
  isHintShown: false,
  feedbackMessage: null,
  feedbackType: null,
  isPaused: false,
  isShowingResult: false,
  questionTimer: 0,
  startedAt: null,
  elapsedMs: 0,
};

export const useLearningStore = create<LearningState>((set, get) => ({
  ...initialState,

  startSession: ({ sessionId, sessionType, skillIds, questions, initialDifficulty }) =>
    set({
      sessionId,
      sessionType,
      status: 'in_progress',
      skillIds,
      questions,
      currentIndex: 0,
      currentQuestion: questions.length > 0 ? questions[0] : null,
      correctCount: 0,
      wrongCount: 0,
      skippedCount: 0,
      xpEarned: 0,
      coinsEarned: 0,
      responses: [],
      difficultyState: createSessionState(initialDifficulty ?? 0),
      isHintShown: false,
      feedbackMessage: null,
      feedbackType: null,
      isPaused: false,
      isShowingResult: false,
      questionTimer: 0,
      startedAt: Date.now(),
      elapsedMs: 0,
    }),

  submitAnswer: ({ givenAnswer, isCorrect, timeSpentMs, response }) =>
    set((state) => {
      const newResponses = [...state.responses, response];
      const newCorrect = state.correctCount + (isCorrect ? 1 : 0);
      const newWrong = state.wrongCount + (isCorrect ? 0 : 1);

      return {
        responses: newResponses,
        correctCount: newCorrect,
        wrongCount: newWrong,
        isShowingResult: true,
        questionTimer: 0,
      };
    }),

  skipQuestion: () =>
    set((state) => ({
      skippedCount: state.skippedCount + 1,
      isShowingResult: false,
      isHintShown: false,
    })),

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentIndex + 1;
      const nextQuestion =
        nextIndex < state.questions.length ? state.questions[nextIndex] : null;

      return {
        currentIndex: nextIndex,
        currentQuestion: nextQuestion,
        isShowingResult: false,
        isHintShown: false,
        feedbackMessage: null,
        feedbackType: null,
        questionTimer: 0,
      };
    }),

  showHint: () => set({ isHintShown: true }),

  setFeedback: (message, type) =>
    set({ feedbackMessage: message, feedbackType: type }),

  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),

  updateElapsed: (ms) => set({ elapsedMs: ms }),

  addRewards: (xp, coins) =>
    set((state) => ({
      xpEarned: state.xpEarned + xp,
      coinsEarned: state.coinsEarned + coins,
    })),

  completeSession: () => set({ status: 'completed' }),

  abandonSession: () => set({ status: 'abandoned' }),

  reset: () => set(initialState),
}));
