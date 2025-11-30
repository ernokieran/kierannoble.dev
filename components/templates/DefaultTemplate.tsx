import { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import type { ProjectName } from '@/types/project';

interface DefaultTemplateProps {
  children: ReactNode;
  project: ProjectName;
}

export function DefaultTemplate({ children, project }: DefaultTemplateProps) {
  return (
    <ThemeProvider project={project}>
      <Navigation />
      <main className="layout">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
