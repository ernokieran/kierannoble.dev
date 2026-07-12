'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

export function Blackout() {
  const [isShown, setIsShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isShown) return;

    const timeoutId = window.setTimeout(() => setIsShown(false), 0);
    return () => window.clearTimeout(timeoutId);
  }, [isShown, pathname]);

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
    <div className={clsx('blackout', isShown && 'blackout--shown')}>
      <div className="loader" />
    </div>
  );
}
