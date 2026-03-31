import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Gamepad2, BookCheck, Bot, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IRT 적응형 학습',
    description: '아이의 실력에 맞춰 문제 난이도가 자동으로 조절돼요. 너무 쉽지도, 어렵지도 않은 딱 맞는 문제!',
    color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
  },
  {
    icon: Gamepad2,
    title: '게이미피케이션',
    description: 'XP, 레벨업, 배지, 리더보드로 학습이 게임처럼 재미있어요. 매일 스트릭을 쌓아보세요!',
    color: 'text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30',
  },
  {
    icon: BookCheck,
    title: '2022 개정 교육과정',
    description: '교육부 고시 교육과정에 맞춘 1~6학년 전체 단원. 학교 수업과 완벽하게 연계됩니다.',
    color: 'text-green-500 bg-green-100 dark:bg-green-900/30',
  },
  {
    icon: Bot,
    title: 'AI 소크라틱 튜터',
    description: '답을 알려주지 않고 질문으로 유도하는 AI 선생님. 스스로 생각하는 힘을 길러줘요.',
    color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
  },
];

const steps = [
  { num: '1', title: '진단 테스트', description: '짧은 테스트로 현재 실력을 파악해요', icon: Target },
  { num: '2', title: '맞춤 학습', description: '나에게 딱 맞는 문제로 학습해요', icon: Sparkles },
  { num: '3', title: '실력 성장', description: '매일 조금씩 실력이 올라가는 걸 느껴보세요', icon: TrendingUp },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧮</span>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">매쓰버스</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">로그인</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">무료로 시작하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            2022 개정 교육과정 기반
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            모든 아이의{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">수학 우주</span>를<br />
            열어주는 적응형 학습
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
            듀오링고처럼 재미있고, AI가 실력에 맞춰 난이도를 조절하는 초등 수학 학습 플랫폼.
            1~6학년 전 과정을 게임하듯 마스터하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register">
              <Button size="lg" className="h-12 px-8 text-base gap-2">
                무료로 시작하기 <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                이미 계정이 있어요
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <p className="text-3xl font-bold text-primary">2,000+</p>
              <p className="text-sm text-muted-foreground">수학 문제</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1~6</p>
              <p className="text-sm text-muted-foreground">학년 지원</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4개</p>
              <p className="text-sm text-muted-foreground">교과 영역</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">왜 매쓰버스인가요?</h2>
            <p className="text-muted-foreground text-lg">100+ 수학 코스웨어 분석 결과, 최고의 장점만 모았습니다</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.color} mb-4`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">이렇게 학습해요</h2>
            <p className="text-muted-foreground text-lg">3단계로 쉽게 시작할 수 있어요</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground mb-3">{s.num}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-muted-foreground text-lg mb-8">회원가입만 하면 바로 학습을 시작할 수 있어요. 무료예요!</p>
          <Link href="/register">
            <Button size="lg" className="h-12 px-10 text-base gap-2">
              무료로 시작하기 <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 매쓰버스 (MathVerse). 모든 아이의 수학 우주를 열어줍니다.</p>
        </div>
      </footer>
    </div>
  );
}
