'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Slideshow as SlideshowType } from '@/types/slideshow';

interface InlineSlideshowProps {
  slideshow: SlideshowType;
  isOpen: boolean;
  onClose: () => void;
}

export function InlineSlideshow({ slideshow, isOpen, onClose }: InlineSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setIsImageLoading(true);
    setCurrentIndex((prev) => (prev + 1) % slideshow.images.length);
  };

  const previousImage = () => {
    setIsImageLoading(true);
    setCurrentIndex((prev) => (prev - 1 + slideshow.images.length) % slideshow.images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') previousImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Touch gestures
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!isOpen || !thumbnailsRef.current) return;

    const activeThumbnail = thumbnailsRef.current.children[currentIndex] as HTMLElement;
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex, isOpen]);

  // Reset index when closed
  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setIsImageLoading(true);
    }
  }, [isOpen]);

  // Reset loading state when current index changes
  useEffect(() => {
    setIsImageLoading(true);
  }, [currentIndex]);

  if (!isOpen) return null;

  const currentImage = slideshow.images[currentIndex];
  const isSingle = slideshow.images.length === 1;

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
              onClose();
            }
          }}
        >
          {isImageLoading && (
            <div className="loader" />
          )}
          <img
            src={currentImage.url}
            alt={`Slide ${currentIndex + 1}`}
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
              {slideshow.images.map((img, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'slideshow__thumbnail',
                    idx === currentIndex && 'slideshow__thumbnail--selected'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  role="button"
                  tabIndex={0}
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
          onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close slideshow"
      >
        <i className="fa fa-xmark" />
        <span className="sr-only">Close</span>
      </div>

      {slideshow.downloadUrl && (
        <a
          href={slideshow.downloadUrl}
          download={slideshow.downloadFilename || true}
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
