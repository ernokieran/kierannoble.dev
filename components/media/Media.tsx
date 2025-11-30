'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { InlineSlideshow } from './InlineSlideshow';
import type { Slideshow } from '@/types/slideshow';

interface MediaProps {
  children: ReactNode;
  slideshow?: Slideshow;
  full?: boolean;
  className?: string;
}

export function Media({ children, slideshow, full = false, className }: MediaProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (slideshow) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          'section__media',
          full && 'section__media--full',
          className
        )}
        onClick={slideshow ? handleClick : undefined}
        onKeyDown={(e) => {
          if (slideshow && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick();
          }
        }}
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

      {/* Hidden images for web crawlers (archive.org, search engines) */}
      {slideshow && (
        <div style={{ display: 'none' }} aria-hidden="true">
          {slideshow.images.map((image, idx) => (
            <img
              key={idx}
              src={image.url}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      )}

      {slideshow && (
        <InlineSlideshow
          slideshow={slideshow}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
