import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, BarChart3, Layers, Cpu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const features = [
  {
    icon: Cpu,
    title: 'IRT 적응형 엔진',
    description: '아이 실력을 실시간으로 측정해 딱 맞는 난이도의 문제를 제공합니다.',
  },
  {
    icon: Zap,
    title: '게이미피케이션',
    description: 'XP, 레벨, 리더보드로 자연스럽게 동기부여. 매일 꾸준히 하고 싶어져요.',
  },
  {
    icon: Layers,
    title: '2022 개정 교육과정',
    description: '1~6학년 전 단원을 체계적으로 구성. 학교 진도와 완벽하게 연계됩니다.',
  },
  {
    icon: BarChart3,
    title: '학습 분석 대시보드',
    description: '학생, 교사, 학부모 모두 학습 현황을 한눈에 파악할 수 있습니다.',
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground">로그인</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">시작하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 md:pt-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary uppercase">
              Adaptive Math Learning
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              수학이 쉬워지는
              <br />
              <span className="text-primary">가장 똑똑한 방법</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              AI가 아이의 실력에 맞춰 문제를 조절합니다.
              게임하듯 재미있게, 초등 수학 전 과정을 마스터하세요.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/register">
                <Button size="lg" className="gap-2 px-6">
                  무료로 시작하기 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-sm grid-cols-3 divide-x divide-border">
            {[
              { value: '2,000+', label: '문제' },
              { value: '1-6', label: '학년' },
              { value: '4', label: '영역' },
            ].map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">왜 매쓰버스인가요</h2>
            <p className="mt-2 text-muted-foreground">학습 효과를 극대화하는 핵심 기능</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/30">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-md px-4 text-center">
          <h2 className="text-2xl font-bold">지금 바로 시작하세요</h2>
          <p className="mt-2 text-muted-foreground">무료로 시작할 수 있습니다.</p>
          <Link href="/register" className="mt-6 inline-block">
            <Button size="lg" className="gap-2 px-8">
              회원가입 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-muted-foreground">
          &copy; 2025 매쓰버스 MathVerse
        </div>
      </footer>
    </div>
  );
}
