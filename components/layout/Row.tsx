import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RowProps {
  children: ReactNode;
  equal?: boolean;
  className?: string;
}

export function Row({ children, equal = false, className }: RowProps) {
  return (
    <div className={cn(
      'layout__row',
      equal && 'layout__row--equal',
      className
    )}>
      {children}
    </div>
  );
}
