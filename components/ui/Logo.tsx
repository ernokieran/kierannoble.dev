import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'themed';
  className?: string;
}

export function Logo({ variant = 'themed', className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'logo',
        variant === 'default' && 'logo--default',
        className
      )}
    >
      <div className="sr-only">Kieran Noble</div>
    </Link>
  );
}
