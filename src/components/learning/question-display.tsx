'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Lightbulb, Check, X, ArrowUp, ArrowDown, GripVertical } from 'lucide-react';
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
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  const [matchSelections, setMatchSelections] = useState<Record<string, string>>({});
  const [matchActiveLeft, setMatchActiveLeft] = useState<string | null>(null);
  const { content } = question;
  const hints = content.hints ?? [];

  // Initialize ordering items (shuffled)
  const initOrdering = useCallback(() => {
    if (question.questionType === 'ORDERING' && content.correctOrder && orderedItems.length === 0) {
      const shuffled = [...content.correctOrder].sort(() => Math.random() - 0.5);
      setOrderedItems(shuffled);
    }
  }, [question.questionType, content.correctOrder, orderedItems.length]);

  // Call init on first render for ordering
  if (question.questionType === 'ORDERING' && orderedItems.length === 0 && content.correctOrder) {
    initOrdering();
  }

  function moveItem(index: number, direction: 'up' | 'down') {
    if (showResult) return;
    const newItems = [...orderedItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setOrderedItems(newItems);
  }

  function handleMatchSelect(left: string) {
    if (showResult) return;
    setMatchActiveLeft(left);
  }

  function handleMatchRight(right: string) {
    if (showResult || !matchActiveLeft) return;
    setMatchSelections(prev => ({ ...prev, [matchActiveLeft]: right }));
    setMatchActiveLeft(null);
  }

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
        const correctStr = String(content.correctAnswer).trim();
        // Normalize for comparison: remove spaces, handle number formats
        const normalize = (s: string) => s.replace(/\s/g, '').replace(/,/g, '').toLowerCase();
        correct = normalize(answer) === normalize(correctStr);
        break;
      }
      case 'TRUE_FALSE': {
        if (!selectedOption) return;
        answer = selectedOption;
        correct = (selectedOption === 'true') === content.correctAnswer;
        break;
      }
      case 'ORDERING': {
        if (orderedItems.length === 0) return;
        answer = orderedItems.join(',');
        correct = content.correctOrder
          ? orderedItems.every((item, i) => item === content.correctOrder![i])
          : false;
        break;
      }
      case 'MATCHING': {
        const pairs = content.pairs ?? [];
        if (Object.keys(matchSelections).length < pairs.length) return;
        answer = JSON.stringify(matchSelections);
        correct = pairs.every(p => matchSelections[p.left] === p.right);
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

  const canSubmit = (() => {
    switch (question.questionType) {
      case 'MULTIPLE_CHOICE':
      case 'TRUE_FALSE':
        return selectedOption !== null;
      case 'SHORT_ANSWER':
      case 'FILL_IN_BLANK':
        return textInput.trim() !== '';
      case 'ORDERING':
        return orderedItems.length > 0;
      case 'MATCHING':
        return Object.keys(matchSelections).length === (content.pairs?.length ?? 0);
      default:
        return textInput.trim() !== '';
    }
  })();

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
        {/* ─── Multiple Choice ──────────────────────── */}
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

        {/* ─── True/False ───────────────────────────── */}
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

        {/* ─── Short Answer / Fill in Blank ─────────── */}
        {(question.questionType === 'SHORT_ANSWER' || question.questionType === 'FILL_IN_BLANK') && (
          <div className="mx-auto max-w-xs">
            <Input
              type="text"
              placeholder="답을 입력하세요"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={showResult}
              className={cn(
                'text-center text-lg h-12',
                showResult && isCorrect && 'border-green-500 bg-green-50',
                showResult && !isCorrect && 'border-red-500 bg-red-50',
              )}
              onKeyDown={(e) => e.key === 'Enter' && canSubmit && handleSubmit()}
            />
            {showResult && !isCorrect && (
              <p className="text-center text-sm text-green-700 mt-2 font-medium">
                정답: {String(content.correctAnswer)}
              </p>
            )}
          </div>
        )}

        {/* ─── Ordering ─────────────────────────────── */}
        {question.questionType === 'ORDERING' && (
          <div className="mx-auto max-w-sm space-y-2">
            {orderedItems.map((item, i) => {
              const isCorrectPos = showResult && content.correctOrder && item === content.correctOrder[i];
              const isWrongPos = showResult && content.correctOrder && item !== content.correctOrder[i];

              return (
                <div
                  key={`${item}-${i}`}
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 p-3 transition-all',
                    isCorrectPos && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                    isWrongPos && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                    !showResult && 'border-border',
                  )}
                >
                  <GripVertical className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                  <span className="flex-1 font-medium text-center">{item}</span>
                  {!showResult && (
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => moveItem(i, 'up')}
                        disabled={i === 0}
                        className="p-1 rounded hover:bg-muted disabled:opacity-30"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => moveItem(i, 'down')}
                        disabled={i === orderedItems.length - 1}
                        className="p-1 rounded hover:bg-muted disabled:opacity-30"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                  {showResult && (
                    isCorrectPos
                      ? <Check className="h-4 w-4 text-green-600 shrink-0" />
                      : <X className="h-4 w-4 text-red-600 shrink-0" />
                  )}
                </div>
              );
            })}
            {showResult && !isCorrect && content.correctOrder && (
              <p className="text-center text-sm text-green-700 mt-2 font-medium">
                정답 순서: {content.correctOrder.join(' → ')}
              </p>
            )}
          </div>
        )}

        {/* ─── Matching ─────────────────────────────── */}
        {question.questionType === 'MATCHING' && content.pairs && (
          <div className="mx-auto max-w-sm space-y-4">
            <p className="text-sm text-center text-muted-foreground">왼쪽을 선택한 후 오른쪽과 연결하세요</p>

            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="space-y-2">
                {content.pairs.map((pair) => {
                  const isActive = matchActiveLeft === pair.left;
                  const isMatched = matchSelections[pair.left] !== undefined;
                  const isCorrectMatch = showResult && matchSelections[pair.left] === pair.right;
                  const isWrongMatch = showResult && isMatched && matchSelections[pair.left] !== pair.right;

                  return (
                    <button
                      key={pair.left}
                      onClick={() => handleMatchSelect(pair.left)}
                      disabled={showResult}
                      className={cn(
                        'w-full rounded-lg border-2 p-3 text-sm font-medium transition-all text-center',
                        isCorrectMatch && 'border-green-500 bg-green-50',
                        isWrongMatch && 'border-red-500 bg-red-50',
                        !showResult && isActive && 'border-primary bg-primary/10 ring-2 ring-primary/30',
                        !showResult && isMatched && !isActive && 'border-blue-300 bg-blue-50 dark:bg-blue-900/20',
                        !showResult && !isActive && !isMatched && 'border-border hover:border-primary/40',
                      )}
                    >
                      {pair.left}
                    </button>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-2">
                {(() => {
                  // Shuffle right side but keep stable
                  const rights = content.pairs!.map(p => p.right);
                  return rights.map((right) => {
                    const matchedBy = Object.entries(matchSelections).find(([, v]) => v === right)?.[0];
                    const isLinked = matchedBy !== undefined;
                    const isCorrectTarget = showResult && content.pairs!.some(p => matchSelections[p.left] === right && p.right === right);
                    const isWrongTarget = showResult && isLinked && !isCorrectTarget;

                    return (
                      <button
                        key={right}
                        onClick={() => handleMatchRight(right)}
                        disabled={showResult || !matchActiveLeft}
                        className={cn(
                          'w-full rounded-lg border-2 p-3 text-sm font-medium transition-all text-center',
                          isCorrectTarget && 'border-green-500 bg-green-50',
                          isWrongTarget && 'border-red-500 bg-red-50',
                          !showResult && matchActiveLeft && 'hover:border-primary/60 hover:bg-primary/5 cursor-pointer',
                          !showResult && isLinked && 'border-blue-300 bg-blue-50 dark:bg-blue-900/20',
                          !showResult && !isLinked && !matchActiveLeft && 'border-border opacity-60',
                        )}
                      >
                        {right}
                      </button>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Connection lines (text representation) */}
            {Object.keys(matchSelections).length > 0 && !showResult && (
              <div className="space-y-1 px-2">
                {Object.entries(matchSelections).map(([left, right]) => (
                  <div key={left} className="flex items-center gap-2 text-xs text-blue-600">
                    <span className="font-medium">{left}</span>
                    <span>→</span>
                    <span className="font-medium">{right}</span>
                    <button
                      onClick={() => {
                        setMatchSelections(prev => {
                          const next = { ...prev };
                          delete next[left];
                          return next;
                        });
                      }}
                      className="text-red-400 hover:text-red-600 ml-auto"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
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

      {/* Submit button */}
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
