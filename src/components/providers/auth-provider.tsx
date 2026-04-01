'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth-store';

const STUDENT_PATHS = ['/home', '/learn', '/review', '/profile', '/achievements', '/leaderboard', '/diagnostic'];
const TEACHER_PATHS = ['/teacher-dashboard', '/teacher-classrooms'];
const PARENT_PATHS = ['/parent-dashboard'];

function getRoleHome(role: string | undefined) {
  if (role === 'teacher') return '/teacher-dashboard';
  if (role === 'parent') return '/parent-dashboard';
  return '/home';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const setProfile = useAuthStore((s) => s.setProfile);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        if (cancelled) return;
        if (res.ok) {
          const data = await res.json();
          setProfile(data.profile);

          // Role-based redirect (use current pathname at call time)
          const currentPath = window.location.pathname;
          const role = data.profile?.role as string | undefined;
          if (role) {
            const isStudentPath = STUDENT_PATHS.some((p) => currentPath.startsWith(p));
            const isTeacherPath = TEACHER_PATHS.some((p) => currentPath.startsWith(p));
            const isParentPath = PARENT_PATHS.some((p) => currentPath.startsWith(p));

            if (role === 'teacher' && isStudentPath) {
              router.replace('/teacher-dashboard');
            } else if (role === 'parent' && isStudentPath) {
              router.replace('/parent-dashboard');
            } else if (role === 'student' && (isTeacherPath || isParentPath)) {
              router.replace('/home');
            }

            if (role === 'student' && !data.profile?.grade && !currentPath.startsWith('/diagnostic')) {
              router.replace('/diagnostic');
            }
          }
        } else {
          setProfile(null);
        }
      } catch {
        if (!cancelled) setProfile(null);
      } finally {
        if (!cancelled) setReady(true);
      }
    }
    checkAuth();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
            <svg viewBox="0 0 512 512" className="h-6 w-6">
              <path d="M 100 380 L 100 160 L 190 290 L 256 190 L 322 290 L 412 160 L 412 380" fill="none" stroke="white" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">로딩 중...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
