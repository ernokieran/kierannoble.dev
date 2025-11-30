'use client';

import { useEffect } from 'react';
import { ErrorTemplate } from '@/components/templates/ErrorTemplate';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorTemplate errorCode="500" errorMessage="Something went wrong" />;
}
