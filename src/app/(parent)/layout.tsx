'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ParentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-3 px-4">
          <Link href="/" className="text-muted-foreground"><ArrowLeft className="h-5 w-5" /></Link>
          <span className="text-lg font-bold tracking-tight">매쓰버스</span>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">학부모</span>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-6">{children}</main>
    </div>
  );
}
