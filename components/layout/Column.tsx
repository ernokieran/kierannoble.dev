import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ColumnProps {
  children: ReactNode;
  small?: boolean;
  className?: string;
}

export function Column({ children, small = false, className }: ColumnProps) {
  return (
    <div className={cn(
      'layout__column',
      small && 'layout__column--small',
      className
    )}>
      {children}
    </div>
  );
}
