import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer>
      <Logo />
      <a
        href="mailto:hi@kierannoble.dev"
        className="contact"
      >
        hi@kierannoble.dev
      </a>
      <p className="contact-note">
        Feel free to drop me an email, I'd love to hear from you!
      </p>
    </footer>
  );
}
