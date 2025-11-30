'use client';

import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { Slideshow } from './Slideshow';
import type { Slideshow as SlideshowType } from '@/types/slideshow';

interface MediaProps {
  children: ReactNode;
  slideshow?: SlideshowType;
  full?: boolean;
  className?: string;
}

export function Media({ children, slideshow, full = false, className }: MediaProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          'section__media',
          full && 'section__media--full',
          className
        )}
        onClick={slideshow ? () => setIsOpen(true) : undefined}
        onKeyDown={slideshow ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        } : undefined}
        role={slideshow ? 'button' : undefined}
        tabIndex={slideshow ? 0 : undefined}
      >
        {children}
        {slideshow && (
          <div className="section__media-action">
            <p className="section__media-action-tooltip">View Media</p>
            <div className="section__media-action-button">
              <i className="fa fa-arrow-right" />
            </div>
          </div>
        )}
      </div>

      {slideshow && (
        <Slideshow
          slideshow={slideshow}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
