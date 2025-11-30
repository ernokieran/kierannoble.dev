import { clsx } from 'clsx';

interface SeparatorProps {
  variant?: 'default' | 'small' | 'centered';
  className?: string;
}

export function Separator({ variant = 'default', className }: SeparatorProps) {
  return (
    <div
      className={clsx(
        'separator',
        variant === 'small' && 'separator--small',
        variant === 'centered' && 'separator--centered',
        className
      )}
    />
  );
}
