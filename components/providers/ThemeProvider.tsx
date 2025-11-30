'use client';

import { ReactNode, useEffect } from 'react';
import type { ProjectName } from '@/types/project';

interface ThemeProviderProps {
  project?: ProjectName;
  children: ReactNode;
}

export function ThemeProvider({ project, children }: ThemeProviderProps) {
  useEffect(() => {
    if (project) {
      document.documentElement.setAttribute('data-project', project);
    }

    return () => {
      if (project) {
        document.documentElement.removeAttribute('data-project');
      }
    };
  }, [project]);

  return <>{children}</>;
}
