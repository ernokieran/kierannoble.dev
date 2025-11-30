import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ColumnProps {
  children: ReactNode;
  small?: boolean;
  className?: string;
}

export function Column({ children, small = false, className }: ColumnProps) {
  return (
    <div className={clsx(
      'layout__column',
      small && 'layout__column--small',
      className
    )}>
      {children}
    </div>
  );
}
