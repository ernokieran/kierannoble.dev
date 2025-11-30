import { Logo } from '@/components/ui/Logo';
import { CVButton } from './CVButton';

export function Navigation() {
  return (
    <nav>
      <Logo />
      <div className="actions">
        <CVButton />
      </div>
    </nav>
  );
}
