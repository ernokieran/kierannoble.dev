import { cn } from '@/lib/utils';

interface SeparatorProps {
  variant?: 'default' | 'small' | 'centered';
  className?: string;
}

export function Separator({ variant = 'default', className }: SeparatorProps) {
  return (
    <div
      className={cn(
        'separator',
        variant === 'small' && 'separator--small',
        variant === 'centered' && 'separator--centered',
        className
      )}
    />
  );
}
