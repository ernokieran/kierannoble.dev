'use client';

import { useState } from 'react';
import { InlineSlideshow } from '@/components/media/InlineSlideshow';
import type { Slideshow } from '@/types/slideshow';

const cvSlideshow: Slideshow = {
  images: [
    {
      url: '/cv/cv.webp',
      ratio: 0.7069555302166476624857468643,
    },
  ],
  downloadUrl: '/cv/cv.pdf',
  downloadFilename: 'KieranNoble-CV.pdf',
};

export function CVButton() {
  const [isOpen, setIsOpen] = useState(false);

  const slideshowDataAttr = JSON.stringify({
    Images: cvSlideshow.images.map(img => ({
      URL: img.url,
      Ratio: img.ratio
    })),
    DownloadURL: cvSlideshow.downloadUrl
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="action"
        data-slideshow={slideshowDataAttr}
        tabIndex={0}
      >
        CV
      </div>

      <InlineSlideshow
        slideshow={cvSlideshow}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
