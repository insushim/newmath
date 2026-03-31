'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuestionDisplay } from '@/components/learning/question-display';
import { X, Heart, ArrowRight, Trophy, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';
import type { SeedQuestion } from '@/data/curriculum-types';

export default function DailyLessonPage() {
  const router = useRouter();
  const sound = useSound();

  const [questions, setQuestions] = useState<SeedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('mv_lesson');
      if (stored) {
        const data = JSON.parse(stored);
        setQuestions(data.questions ?? []);
        sessionStorage.removeItem('mv_lesson');
      }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const progressPercent = totalQuestions > 0 ? ((currentIndex + (showResult ? 1 : 0)) / totalQuestions) * 100 : 0;

  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    setShowResult(true);
    setLastCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setStreak((s) => s + 1);
      const baseXp = 10;
      const streakBonus = streak >= 4 ? 15 : streak >= 2 ? 5 : 0;
      const hintPenalty = hintsUsed > 0 ? -3 : 5;
      setXpEarned((x) => x + baseXp + streakBonus + hintPenalty);
      sound.playCorrect();
    } else {
      setWrongCount((c) => c + 1);
      setStreak(0);
      setHearts((h) => Math.max(0, h - 1));
      sound.playWrong();
    }
  }, [streak, hintsUsed, sound]);

  const handleNext = useCallback(() => {
    if (hearts <= 0 || currentIndex + 1 >= totalQuestions) {
      setIsComplete(true);
      sound.playSessionComplete();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setShowResult(false);
    setLastCorrect(null);
    setHintsUsed(0);
  }, [currentIndex, totalQuestions, hearts, sound]);

  const handleUseHint = useCallback(() => {
    setHintsUsed((h) => h + 1);
    sound.playHintReveal();
  }, [sound]);

  if (loading) return <div className="flex min-h-[60vh] items-center justify-center"><p className="text-muted-foreground">로딩 중...</p></div>;

  if (totalQuestions === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold mb-2">문제를 불러올 수 없어요</p>
        <Link href="/home"><Button variant="outline">돌아가기</Button></Link>
      </div>
    );
  }

  if (isComplete) {
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
    const isPerfect = wrongCount === 0;
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center space-y-6 py-10">
        <div className="text-6xl mb-2">{isPerfect ? '🎉' : accuracy >= 70 ? '👏' : '💪'}</div>
        <h1 className="text-3xl font-bold">
          {isPerfect ? '완벽해요!' : accuracy >= 70 ? '잘했어요!' : '다음엔 더 잘할 수 있어요!'}
        </h1>
        <p className="text-muted-foreground">오늘의 학습 완료</p>
        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30">
              <Trophy className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-muted-foreground">정답률</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold">+{xpEarned}</p>
            <p className="text-xs text-muted-foreground">XP 획득</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">{correctCount}/{correctCount + wrongCount}</p>
            <p className="text-xs text-muted-foreground">맞은 문제</p>
          </div>
        </div>
        <Link href="/home"><Button className="w-full max-w-xs h-12 text-base">홈으로</Button></Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/home"><Button variant="ghost" size="icon"><X className="h-5 w-5" /></Button></Link>
        <Progress value={progressPercent} className="flex-1 h-3" />
        <span className="text-sm font-medium text-muted-foreground">{currentIndex + 1}/{totalQuestions}</span>
      </div>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Heart key={i} className={cn('h-5 w-5 transition-all', i < hearts ? 'text-red-500 fill-red-500' : 'text-muted-foreground/20')} />
        ))}
      </div>
      {streak >= 2 && <div className="text-center text-sm font-medium text-orange-500">🔥 {streak}연속 정답!</div>}
      {currentQuestion && (
        <QuestionDisplay question={currentQuestion} onAnswer={handleAnswer} hintsUsed={hintsUsed} onUseHint={handleUseHint} showResult={showResult} isCorrect={lastCorrect} />
      )}
      {showResult && (
        <Button onClick={handleNext} className="w-full h-12 text-base gap-2">
          {currentIndex + 1 >= totalQuestions ? '결과 보기' : '다음 문제'} <ArrowRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
