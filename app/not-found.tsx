import { ErrorTemplate } from '@/components/templates/ErrorTemplate';

export default function NotFound() {
  return <ErrorTemplate errorCode="404" errorMessage="Page not found" />;
}
