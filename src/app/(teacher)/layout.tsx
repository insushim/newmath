'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, BarChart3, ClipboardList, ArrowLeft } from 'lucide-react';

const navItems = [
  { href: '/teacher-dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/teacher-classrooms', label: '학급 관리', icon: Users },
];

export default function TeacherLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-border bg-card">
        <div className="flex h-16 items-center gap-2 px-6 border-b border-border">
          <span className="text-xl font-bold text-primary">🧮</span>
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">매쓰버스</span>
          <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">교사</span>
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
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64">
        <div className="mx-auto max-w-6xl px-4 py-6">
          {/* Mobile header */}
          <div className="flex items-center gap-3 mb-6 md:hidden">
            <Link href="/" className="text-muted-foreground"><ArrowLeft className="h-5 w-5" /></Link>
            <span className="text-lg font-bold text-primary">🧮 매쓰버스 교사</span>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
