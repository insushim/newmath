import { ReactNode } from 'react';
import Link from 'next/link';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-background px-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="text-3xl">🧮</span>
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">매쓰버스</span>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
