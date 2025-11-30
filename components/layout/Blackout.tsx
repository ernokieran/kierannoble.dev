'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Blackout() {
  const [isShown, setIsShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsShown(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && !link.href.startsWith('mailto:') && !link.hasAttribute('download')) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsShown(true);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={cn('blackout', isShown && 'blackout--shown')}>
      <div className="loader" />
    </div>
  );
}
