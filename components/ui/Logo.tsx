import Link from 'next/link';
import { clsx } from 'clsx';

interface LogoProps {
  variant?: 'default' | 'themed';
  className?: string;
}

export function Logo({ variant = 'themed', className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx(
        'logo',
        variant === 'default' && 'logo--default',
        className
      )}
    >
      <div className="sr-only">Kieran Noble</div>
    </Link>
  );
}
