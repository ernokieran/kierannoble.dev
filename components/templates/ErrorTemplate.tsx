import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

interface ErrorTemplateProps {
  errorCode?: string;
  errorMessage?: string;
}

export function ErrorTemplate({ errorCode = '404', errorMessage = 'Page not found' }: ErrorTemplateProps) {
  return (
    <>
      <Navigation />
      <main className="error">
        <h1 className="error__title">{errorCode}</h1>
        <h2 className="error__subtitle">Error</h2>
        <p className="error__description">{errorMessage}</p>
        <Link href="/" className="error__action">
          Go Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
