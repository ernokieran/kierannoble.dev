import { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Introduction } from '@/components/ui/Introduction';
import { Separator } from '@/components/ui/Separator';

interface IntroductionTemplateProps {
  children: ReactNode;
}

export function IntroductionTemplate({ children }: IntroductionTemplateProps) {
  return (
    <>
      <Navigation />
      <Header avatarUrl="/img/avatar.webp">
        <Introduction />
      </Header>
      <Separator />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
