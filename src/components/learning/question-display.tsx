'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Lightbulb, Check, X } from 'lucide-react';
import type { SeedQuestion } from '@/data/curriculum-types';

interface QuestionDisplayProps {
  question: SeedQuestion;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  hintsUsed: number;
  onUseHint: () => void;
  showResult: boolean;
  isCorrect: boolean | null;
}

export function QuestionDisplay({
  question,
  onAnswer,
  hintsUsed,
  onUseHint,
  showResult,
  isCorrect,
}: QuestionDisplayProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const { content } = question;
  const hints = content.hints ?? [];

  function handleSubmit() {
    if (showResult) return;

    let answer = '';
    let correct = false;

    switch (question.questionType) {
      case 'MULTIPLE_CHOICE': {
        if (!selectedOption) return;
        answer = selectedOption;
        const correctOpt = content.options?.find((o) => o.isCorrect);
        correct = selectedOption === correctOpt?.id;
        break;
      }
      case 'SHORT_ANSWER':
      case 'FILL_IN_BLANK': {
        if (!textInput.trim()) return;
        answer = textInput.trim();
        correct = String(content.correctAnswer).trim() === answer;
        break;
      }
      case 'TRUE_FALSE': {
        if (!selectedOption) return;
        answer = selectedOption;
        correct = (selectedOption === 'true') === content.correctAnswer;
        break;
      }
      default: {
        if (!textInput.trim()) return;
        answer = textInput.trim();
        correct = String(content.correctAnswer).trim() === answer;
      }
    }

    onAnswer(answer, correct);
  }

  const canSubmit =
    question.questionType === 'MULTIPLE_CHOICE' || question.questionType === 'TRUE_FALSE'
      ? selectedOption !== null
      : textInput.trim() !== '';

  return (
    <div className="space-y-6">
      {/* Question text */}
      <div className="text-center">
        <p className="text-xl font-semibold leading-relaxed whitespace-pre-line">
          {content.questionText}
        </p>
        {content.questionLatex && (
          <div
            className="mt-2 text-2xl text-primary"
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  const katex = require('katex');
                  const tex = content.questionLatex!
                    .replace(/\\square/g, '\\Box')
                    .replace(/\\boxed\{\\}/g, '\\Box');
                  return katex.renderToString(tex, { throwOnError: false, displayMode: true });
                } catch {
                  return content.questionLatex!.replace(/\\square/g, '□');
                }
              })(),
            }}
          />
        )}
      </div>

      {/* Answer area */}
      <div className="space-y-3">
        {question.questionType === 'MULTIPLE_CHOICE' && content.options && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {content.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const showCorrect = showResult && opt.isCorrect;
              const showWrong = showResult && isSelected && !opt.isCorrect;

              return (
                <button
                  key={opt.id}
                  onClick={() => !showResult && setSelectedOption(opt.id)}
                  disabled={showResult}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all',
                    showCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                    showWrong && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    !showResult && isSelected && 'border-primary bg-primary/5',
                    !showResult && !isSelected && 'border-border hover:border-primary/40',
                    showResult && !showCorrect && !showWrong && 'opacity-50'
                  )}
                >
                  <div
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold',
                      showCorrect && 'border-green-500 bg-green-500 text-white',
                      showWrong && 'border-red-500 bg-red-500 text-white',
                      !showResult && isSelected && 'border-primary bg-primary text-primary-foreground',
                      !showResult && !isSelected && 'border-muted-foreground/30'
                    )}
                  >
                    {showCorrect ? <Check className="h-4 w-4" /> :
                     showWrong ? <X className="h-4 w-4" /> :
                     opt.id.toUpperCase()}
                  </div>
                  <span className="font-medium">{opt.text}</span>
                </button>
              );
            })}
          </div>
        )}

        {question.questionType === 'TRUE_FALSE' && (
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'true', label: '⭕ 맞아요' },
              { id: 'false', label: '❌ 아니에요' },
            ].map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isCorrectAnswer = String(content.correctAnswer) === opt.id;
              const showCorrectOpt = showResult && isCorrectAnswer;
              const showWrongOpt = showResult && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={opt.id}
                  onClick={() => !showResult && setSelectedOption(opt.id)}
                  disabled={showResult}
                  className={cn(
                    'rounded-xl border-2 p-4 text-center text-lg font-semibold transition-all',
                    showCorrectOpt && 'border-green-500 bg-green-50',
                    showWrongOpt && 'border-red-500 bg-red-50',
                    !showResult && isSelected && 'border-primary bg-primary/5',
                    !showResult && !isSelected && 'border-border hover:border-primary/40'
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {(question.questionType === 'SHORT_ANSWER' || question.questionType === 'FILL_IN_BLANK') && (
          <div className="mx-auto max-w-xs">
            <Input
              type="text"
              placeholder="답을 입력하세요"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={showResult}
              className="text-center text-lg h-12"
              onKeyDown={(e) => e.key === 'Enter' && canSubmit && handleSubmit()}
            />
          </div>
        )}
      </div>

      {/* Hints */}
      {!showResult && hints.length > 0 && (
        <div className="space-y-2">
          {hintsUsed > 0 && (
            <div className="space-y-1.5">
              {hints.slice(0, hintsUsed).map((hint, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 p-3 text-sm">
                  <Lightbulb className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                  <span className="text-amber-800 dark:text-amber-300">{hint}</span>
                </div>
              ))}
            </div>
          )}
          {hintsUsed < hints.length && (
            <Button variant="ghost" size="sm" onClick={onUseHint} className="text-amber-600 gap-1">
              <Lightbulb className="h-4 w-4" />
              힌트 보기 ({hintsUsed}/{hints.length})
            </Button>
          )}
        </div>
      )}

      {/* Result feedback */}
      {showResult && (
        <Card className={cn(
          'border-2',
          isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'
        )}>
          <CardContent className="p-4">
            <p className={cn('text-lg font-bold mb-2', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400')}>
              {isCorrect ? '정답이에요! 🎉' : '아쉬워요 😢'}
            </p>
            <p className="text-sm whitespace-pre-line text-foreground/80">
              {content.explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Submit / Next button */}
      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full h-12 text-base"
        >
          확인하기
        </Button>
      ) : null}
    </div>
  );
}
