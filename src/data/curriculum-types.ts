// ============================================================
// MathVerse (매쓰버스) - Curriculum Seed Data Types
// 2022 개정 교육과정 기반 초등 수학 커리큘럼
// ============================================================

export type QuestionType =
  | 'MULTIPLE_CHOICE'
  | 'SHORT_ANSWER'
  | 'TRUE_FALSE'
  | 'ORDERING'
  | 'MATCHING'
  | 'FILL_IN_BLANK';

export type DifficultyLabel =
  | '매우 쉬움'
  | '쉬움'
  | '보통'
  | '어려움'
  | '매우 어려움';

export type DomainCode =
  | 'NUM_OPS'
  | 'CHANGE_REL'
  | 'SHAPE_MEAS'
  | 'DATA_PROB';

export interface SeedQuestion {
  id: string;
  skillId: string;
  questionType: QuestionType;
  difficulty: number;
  difficultyLabel: DifficultyLabel;
  content: {
    questionText: string;
    questionLatex?: string;
    imageUrl?: string | null;
    options?: Array<{ id: string; text: string; isCorrect: boolean }>;
    correctAnswer?: string | number | boolean;
    correctOrder?: string[];
    pairs?: Array<{ left: string; right: string }>;
    explanation: string;
    hints: string[];
    commonMistakes?: Array<{ answer: string; misconception: string }>;
  };
  estimatedTimeSeconds: number;
  tags: string[];
}

export interface SeedSkill {
  id: string;
  unitId: string;
  code: string;
  nameKo: string;
  descriptionKo: string;
  defaultDifficulty: number;
  sortOrder: number;
  conceptExplanation: string;
}

export interface SeedUnit {
  id: string;
  domainCode: DomainCode;
  grade: number;
  semester: number;
  code: string;
  nameKo: string;
  descriptionKo: string;
  sortOrder: number;
}

export interface DomainDefinition {
  code: DomainCode;
  nameKo: string;
  icon: string;
  color: string;
  descriptionKo: string;
}

export interface BadgeSeed {
  id: string;
  nameKo: string;
  descriptionKo: string;
  icon: string;
  condition: string;
  category: 'achievement' | 'streak' | 'mastery' | 'exploration';
}
