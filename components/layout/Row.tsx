import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface RowProps {
  children: ReactNode;
  equal?: boolean;
  className?: string;
}

export function Row({ children, equal = false, className }: RowProps) {
  return (
    <div className={clsx(
      'layout__row',
      equal && 'layout__row--equal',
      className
    )}>
      {children}
    </div>
  );
}
