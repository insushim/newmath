'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, ArrowLeft, LogOut, GraduationCap } from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';

const navItems = [
  { href: '/teacher-dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/teacher-classrooms', label: '학급 관리', icon: Users },
];

export default function TeacherLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const profile = useAuthStore((s) => s.profile);
  const displayName = profile?.display_name ?? '선생님';
  const initial = displayName.charAt(0);

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-border bg-card">
        {/* Brand */}
        <div className="flex h-16 items-center gap-2.5 px-5 border-b border-border">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 512 512" className="h-4.5 w-4.5">
              <path d="M 100 380 L 100 160 L 190 290 L 256 190 L 322 290 L 412 160 L 412 380" fill="none" stroke="white" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-base font-bold tracking-tight leading-none">매쓰버스</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Teacher Portal</p>
          </div>
        </div>

        {/* Teacher profile */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {initial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{displayName}</p>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                <GraduationCap className="h-3 w-3" /> 교사
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', isActive && 'text-primary')} />
                {item.label}
                {isActive && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-border">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            로그아웃
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 512 512" className="h-4 w-4">
                  <path d="M 100 380 L 100 160 L 190 290 L 256 190 L 322 290 L 412 160 L 412 380" fill="none" stroke="white" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">매쓰버스</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              {initial}
            </div>
          </div>
          {children}
        </div>

        {/* Mobile bottom nav */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden border-t border-border bg-card/95 backdrop-blur-sm z-50">
          <div className="flex">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  <item.icon className={cn('h-5 w-5', isActive && 'text-primary')} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
