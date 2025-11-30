'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Slideshow } from '@/components/media/Slideshow';
import type { SlideshowImage } from '@/types/slideshow';

interface SlideshowState {
  images: SlideshowImage[];
  currentIndex: number;
  isOpen: boolean;
  downloadUrl?: string;
}

interface SlideshowContextValue {
  state: SlideshowState;
  openSlideshow: (images: SlideshowImage[], index?: number, downloadUrl?: string) => void;
  closeSlideshow: () => void;
  nextImage: () => void;
  previousImage: () => void;
  setCurrentIndex: (index: number) => void;
}

const SlideshowContext = createContext<SlideshowContextValue | null>(null);

export function useSlideshowContext() {
  const context = useContext(SlideshowContext);
  if (!context) {
    throw new Error('useSlideshowContext must be used within SlideshowProvider');
  }
  return context;
}

export function SlideshowProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SlideshowState>({
    images: [],
    currentIndex: 0,
    isOpen: false,
  });

  const openSlideshow = (images: SlideshowImage[], index = 0, downloadUrl?: string) => {
    setState({ images, currentIndex: index, isOpen: true, downloadUrl });
    document.body.style.overflow = 'hidden';
  };

  const closeSlideshow = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const previousImage = () => {
    setState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const setCurrentIndex = (index: number) => {
    setState((prev) => ({ ...prev, currentIndex: index }));
  };

  return (
    <SlideshowContext.Provider
      value={{ state, openSlideshow, closeSlideshow, nextImage, previousImage, setCurrentIndex }}
    >
      {children}
      <Slideshow />
    </SlideshowContext.Provider>
  );
}
