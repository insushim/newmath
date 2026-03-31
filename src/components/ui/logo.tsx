import Link from 'next/link';

export function Logo({ size = 'default' }: { size?: 'default' | 'lg' }) {
  const iconClass = size === 'lg' ? 'h-8 w-8' : 'h-6 w-6';
  const textClass = size === 'lg' ? 'text-xl' : 'text-base';
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className={`${iconClass} rounded-lg bg-primary flex items-center justify-center`}>
        <svg viewBox="0 0 512 512" className="h-[70%] w-[70%]">
          <path
            d="M 100 380 L 100 160 L 190 290 L 256 190 L 322 290 L 412 160 L 412 380"
            fill="none"
            stroke="white"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={`${textClass} font-bold tracking-tight`}>매쓰버스</span>
    </Link>
  );
}
