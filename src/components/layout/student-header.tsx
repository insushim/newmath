'use client';

import { Flame, Heart, Gem } from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';

export function StudentHeader() {
  const profile = useAuthStore((s) => s.profile);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur md:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <span className="text-lg font-bold tracking-tight">매쓰버스</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="font-semibold text-orange-500">{profile?.current_streak ?? 0}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="font-semibold text-red-500">5</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Gem className="h-4 w-4 text-blue-500" />
            <span className="font-semibold text-blue-500">{profile?.coins ?? 0}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
