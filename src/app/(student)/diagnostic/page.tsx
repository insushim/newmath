'use client';

import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/stores/auth-store';
import { toast } from 'sonner';
import { G1_QUESTIONS } from '@/data/curriculum-g1';
import { G2_QUESTIONS } from '@/data/curriculum-g2';
import { G3_QUESTIONS } from '@/data/curriculum-g3';
import { G4_QUESTIONS } from '@/data/curriculum-g4';
import { G5_QUESTIONS } from '@/data/curriculum-g5';
import { G6_QUESTIONS } from '@/data/curriculum-g6';
import type { SeedQuestion } from '@/data/curriculum-types';

const ALL_QUESTIONS: Record<number, SeedQuestion[]> = {
  1: G1_QUESTIONS,
  2: G2_QUESTIONS,
  3: G3_QUESTIONS,
  4: G4_QUESTIONS,
  5: G5_QUESTIONS,
  6: G6_QUESTIONS,
};

function pickQuestion(grade: number): SeedQuestion | null {
  const pool = ALL_QUESTIONS[grade]?.filter((q) => q.questionType === 'MULTIPLE_CHOICE') ?? [];
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

const TOTAL_QUESTIONS = 8;

interface DiagResult {
  grade: number;
  correct: boolean;
}

function determineBestGrade(results: DiagResult[]): number {
  const gradeScores: Record<number, { correct: number; total: number }> = {};
  for (const r of results) {
    if (!gradeScores[r.grade]) gradeScores[r.grade] = { correct: 0, total: 0 };
    gradeScores[r.grade].total++;
    if (r.correct) gradeScores[r.grade].correct++;
  }
  // Find highest grade with >=50% accuracy
  let bestGrade = 1;
  for (let g = 1; g <= 6; g++) {
    const s = gradeScores[g];
    if (s && s.correct / s.total >= 0.5) bestGrade = g;
  }
  return bestGrade;
}

export default function DiagnosticPage() {
  const router = useRouter();
  const setProfile = useAuthStore((s) => s.setProfile);
  const profile = useAuthStore((s) => s.profile);

  const [currentGrade, setCurrentGrade] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState<DiagResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  const [finalGrade, setFinalGrade] = useState(0);

  const question = useMemo(() => pickQuestion(currentGrade), [currentGrade, questionIndex]);

  const handleAnswer = useCallback((optionId: string) => {
    if (showResult || !question) return;
    setSelectedAnswer(optionId);
    const correct = question.content.options?.find((o) => o.id === optionId)?.isCorrect ?? false;
    setIsCorrect(correct);
    setShowResult(true);
  }, [showResult, question]);

  const handleNext = useCallback(async () => {
    const newResults = [...results, { grade: currentGrade, correct: isCorrect }];
    setResults(newResults);

    if (newResults.length >= TOTAL_QUESTIONS) {
      // Done
      const grade = determineBestGrade(newResults);
      setFinalGrade(grade);
      setDone(true);
      setSaving(true);
      try {
        const res = await fetch('/api/student', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ grade }),
        });
        if (res.ok && profile) {
          setProfile({ ...profile, grade });
        }
      } catch {
        toast.error('저장 중 오류가 발생했습니다.');
      } finally {
        setSaving(false);
      }
      return;
    }

    // Adaptive: adjust grade
    let nextGrade = currentGrade;
    if (isCorrect && currentGrade < 6) nextGrade = currentGrade + 1;
    else if (!isCorrect && currentGrade > 1) nextGrade = currentGrade - 1;

    setCurrentGrade(nextGrade);
    setQuestionIndex((i) => i + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [results, currentGrade, isCorrect, profile, setProfile]);

  if (done) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-sm text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <span className="text-4xl font-bold text-primary">{finalGrade}</span>
          </div>
          <h1 className="text-2xl font-bold">진단 완료!</h1>
          <p className="mt-2 text-muted-foreground">
            분석 결과, <strong>{finalGrade}학년</strong> 수준에서 시작하는 것이 좋겠어요.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            맞은 문제: {results.filter((r) => r.correct).length} / {results.length}
          </p>
          <Button
            className="mt-6 w-full"
            size="lg"
            disabled={saving}
            onClick={() => router.replace('/home')}
          >
            {saving ? '저장 중...' : '학습 시작하기'}
          </Button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="text-muted-foreground">문제를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>진단 테스트</span>
          <span>{questionIndex + 1} / {TOTAL_QUESTIONS}</span>
        </div>
        <Progress value={((questionIndex + 1) / TOTAL_QUESTIONS) * 100} className="h-2" />
        <p className="mt-2 text-xs text-muted-foreground text-center">
          {currentGrade}학년 수준
        </p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <p className="text-lg font-medium text-center leading-relaxed">
          {question.content.questionText}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.content.options?.map((opt) => {
          let cls = 'w-full rounded-xl border-2 p-4 text-left text-sm font-medium transition-all';
          if (showResult) {
            if (opt.isCorrect) cls += ' border-green-500 bg-green-50 text-green-700';
            else if (opt.id === selectedAnswer && !opt.isCorrect) cls += ' border-red-500 bg-red-50 text-red-700';
            else cls += ' border-border opacity-50';
          } else {
            cls += selectedAnswer === opt.id
              ? ' border-primary bg-primary/5'
              : ' border-border hover:border-primary/40';
          }
          return (
            <button
              key={opt.id}
              onClick={() => handleAnswer(opt.id)}
              disabled={showResult}
              className={cls}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {/* Result & Next */}
      {showResult && (
        <div className="mt-6">
          <div className={`rounded-xl p-4 text-center text-sm ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {isCorrect ? '정답이에요!' : '아쉬워요. 괜찮아요!'}
          </div>
          <Button className="mt-4 w-full" size="lg" onClick={handleNext}>
            {questionIndex + 1 >= TOTAL_QUESTIONS ? '결과 보기' : '다음 문제'}
          </Button>
        </div>
      )}
    </div>
  );
}
