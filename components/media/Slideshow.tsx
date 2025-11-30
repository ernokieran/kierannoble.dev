'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useSlideshowContext } from '@/components/providers/SlideshowProvider';

export function Slideshow() {
  const { state, closeSlideshow, nextImage, previousImage, setCurrentIndex } = useSlideshowContext();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSlideshow();
      if (e.key === 'ArrowLeft') previousImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, closeSlideshow, nextImage, previousImage]);

  // Touch gestures
  useEffect(() => {
    if (!state.isOpen) return;

    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      const threshold = window.innerWidth * 0.1;

      if (Math.abs(diff) > threshold) {
        diff > 0 ? nextImage() : previousImage();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [state.isOpen, nextImage, previousImage]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!state.isOpen || !thumbnailsRef.current) return;

    const activeThumbnail = thumbnailsRef.current.children[state.currentIndex] as HTMLElement;
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [state.currentIndex, state.isOpen]);

  // Reset loading state when current index changes
  useEffect(() => {
    setIsImageLoading(true);
  }, [state.currentIndex]);

  // Reset loading state when slideshow opens
  useEffect(() => {
    if (state.isOpen) {
      setIsImageLoading(true);
    }
  }, [state.isOpen]);

  if (!state.isOpen) return null;

  const currentImage = state.images[state.currentIndex];
  const isSingle = state.images.length === 1;

  return (
    <div
      className={cn(
        'slideshow',
        'slideshow--shown',
        isSingle && 'slideshow--single'
      )}
    >
      <div className="slideshow__image">
        <div
          className="slideshow__image-holder"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeSlideshow();
            }
          }}
        >
          {isImageLoading && (
            <div className="loader" />
          )}
          <img
            src={currentImage.url}
            alt={`Slide ${state.currentIndex + 1}`}
            onLoad={() => setIsImageLoading(false)}
            style={{ display: isImageLoading ? 'none' : 'block' }}
          />
        </div>
      </div>

      {!isSingle && (
        <>
          <div
            className={cn('slideshow__button', 'slideshow__button--previous')}
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            role="button"
            tabIndex={0}
            aria-label="Previous image"
          >
            <i className="fa fa-chevron-left" />
            <span className="sr-only">Previous</span>
          </div>

          <div
            className={cn('slideshow__button', 'slideshow__button--next')}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            role="button"
            tabIndex={0}
            aria-label="Next image"
          >
            <i className="fa fa-chevron-right" />
            <span className="sr-only">Next</span>
          </div>

          <div className="slideshow__thumbnails">
            <div className="slideshow__thumbnails-holder" ref={thumbnailsRef}>
              {state.images.map((img, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'slideshow__thumbnail',
                    idx === state.currentIndex && 'slideshow__thumbnail--selected'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image
                    src={img.url}
                    alt=""
                    width={Math.round(90 * img.ratio)}
                    height={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div
        className={cn('slideshow__button', 'slideshow__button--close')}
        onClick={(e) => {
          e.stopPropagation();
          closeSlideshow();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close slideshow"
      >
        <i className="fa fa-xmark" />
        <span className="sr-only">Close</span>
      </div>

      {state.downloadUrl && (
        <a
          href={state.downloadUrl}
          download
          className={cn('slideshow__button', 'slideshow__button--download')}
          onClick={(e) => e.stopPropagation()}
          aria-label="Download"
        >
          <i className="fa fa-download" />
          <span className="sr-only">Download</span>
        </a>
      )}
    </div>
  );
}
