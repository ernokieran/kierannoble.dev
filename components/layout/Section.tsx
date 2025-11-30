import { ReactNode } from 'react';
import { clsx } from 'clsx';
import type { SectionType, SectionAlignment } from '@/types/project';

interface SectionProps {
  children?: ReactNode;
  type?: SectionType;
  alignment?: SectionAlignment;
  title?: string;
  subtitle?: string;
  logoUrl?: string;
  className?: string;
}

export function Section({
  children,
  type = 'none',
  alignment = 'left',
  title,
  subtitle,
  logoUrl,
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        'section',
        type === 'primary' && 'section--primary',
        type === 'secondary' && 'section--secondary',
        type === 'tertiary' && 'section--tertiary',
        alignment === 'centered' && 'section--centered',
        alignment === 'right' && 'section--right',
        className
      )}
    >
      <div className="section__content layout layout__column layout--small">
        {logoUrl && (
          <img
            className="section__logo"
            src={logoUrl}
            alt=""
            width="300"
            height="50"
            loading="lazy"
            decoding="async"
          />
        )}
        {title && <h1 className="section__title">{title}</h1>}
        {subtitle && <h2 className="section__subtitle">{subtitle}</h2>}
        {children}
      </div>
    </section>
  );
}
