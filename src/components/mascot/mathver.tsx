'use client';

import { cn } from '@/lib/utils';

type MascotMood = 'default' | 'happy' | 'thinking' | 'sad' | 'surprised' | 'cheering';

interface MathverProps {
  mood?: MascotMood;
  size?: number;
  className?: string;
  message?: string;
}

export function Mathver({ mood = 'default', size = 120, className, message }: MathverProps) {
  const eyeVariants: Record<MascotMood, { left: string; right: string }> = {
    default: { left: '●', right: '●' },
    happy: { left: '◠', right: '◠' },
    thinking: { left: '●', right: '◔' },
    sad: { left: '◡', right: '◡' },
    surprised: { left: '◉', right: '◉' },
    cheering: { left: '★', right: '★' },
  };

  const mouthVariants: Record<MascotMood, string> = {
    default: 'M 35 52 Q 40 56 45 52',
    happy: 'M 32 50 Q 40 60 48 50',
    thinking: 'M 36 54 L 44 54',
    sad: 'M 32 56 Q 40 50 48 56',
    surprised: 'M 36 52 Q 40 58 44 52 Q 40 64 36 52',
    cheering: 'M 30 48 Q 40 62 50 48',
  };

  const bodyColor = '#6C5CE7';
  const visorColor = '#00D2D3';
  const accentColor = '#A29BFE';

  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <line x1="40" y1="8" x2="40" y2="15" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="6" r="3" fill="#FDCB6E">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Head / Helmet */}
        <rect x="20" y="15" width="40" height="35" rx="12" fill={bodyColor} />

        {/* Visor */}
        <rect x="25" y="20" width="30" height="22" rx="8" fill={visorColor} opacity="0.3" />
        <rect x="27" y="22" width="26" height="18" rx="6" fill="#1A1B2E" />

        {/* Eyes */}
        <text x="34" y="35" fontSize="8" fill="#00D2D3" textAnchor="middle" fontFamily="sans-serif">
          {eyeVariants[mood].left}
        </text>
        <text x="46" y="35" fontSize="8" fill="#00D2D3" textAnchor="middle" fontFamily="sans-serif">
          {eyeVariants[mood].right}
        </text>

        {/* Mouth */}
        <path d={mouthVariants[mood]} stroke="#00D2D3" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Body */}
        <rect x="25" y="50" width="30" height="20" rx="6" fill={bodyColor} />

        {/* Chest emblem - star */}
        <text x="40" y="64" fontSize="10" textAnchor="middle">✦</text>

        {/* Arms */}
        <rect x="15" y="52" width="10" height="6" rx="3" fill={accentColor} />
        <rect x="55" y="52" width="10" height="6" rx="3" fill={accentColor} />

        {/* Legs */}
        <rect x="29" y="70" width="8" height="6" rx="3" fill={accentColor} />
        <rect x="43" y="70" width="8" height="6" rx="3" fill={accentColor} />

        {/* Cheering animation arms */}
        {mood === 'cheering' && (
          <>
            <rect x="12" y="46" width="10" height="6" rx="3" fill={accentColor} transform="rotate(-30 17 49)">
              <animateTransform attributeName="transform" type="rotate" values="-30 17 49;-15 17 49;-30 17 49" dur="0.5s" repeatCount="indefinite" />
            </rect>
            <rect x="58" y="46" width="10" height="6" rx="3" fill={accentColor} transform="rotate(30 63 49)">
              <animateTransform attributeName="transform" type="rotate" values="30 63 49;15 63 49;30 63 49" dur="0.5s" repeatCount="indefinite" />
            </rect>
          </>
        )}

        {/* Happy bounce */}
        {mood === 'happy' && (
          <>
            <text x="18" y="18" fontSize="6" fill="#FDCB6E">✨</text>
            <text x="58" y="22" fontSize="5" fill="#FDCB6E">✨</text>
          </>
        )}
      </svg>

      {message && (
        <div className="relative rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary max-w-[200px] text-center">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-primary/10" />
          {message}
        </div>
      )}
    </div>
  );
}
