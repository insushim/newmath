'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, RotateCcw, Trophy, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/stores/auth-store';

const navItems = [
  { href: '/home', label: '홈', icon: Home },
  { href: '/learn', label: '학습', icon: BookOpen },
  { href: '/review', label: '복습', icon: RotateCcw },
  { href: '/leaderboard', label: '랭킹', icon: Trophy },
  { href: '/profile', label: '프로필', icon: User },
];

export function StudentLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const profile = useAuthStore((s) => s.profile);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-border bg-card">
        <div className="flex h-16 items-center gap-2 px-6 border-b border-border">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
            <svg viewBox="0 0 512 512" className="h-4 w-4">
              <path d="M 100 380 L 100 160 L 190 290 L 256 190 L 322 290 L 412 160 L 412 380" fill="none" stroke="white" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">매쓰버스</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User info */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {profile?.display_name?.[0] ?? '?'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{profile?.display_name ?? '학생'}</p>
              <p className="text-xs text-muted-foreground">Lv.{profile?.level ?? 1} · {profile?.total_xp ?? 0} XP</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64">
        <div className="mx-auto max-w-4xl px-4 py-6 pb-20 md:pb-6">
          {children}
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className={cn('h-5 w-5', isActive && 'text-primary')} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
