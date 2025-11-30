import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  avatarUrl?: string;
}

export function Header({ children, avatarUrl }: HeaderProps) {
  return (
    <header>
      {avatarUrl && (
        <img
          src={avatarUrl}
          className="avatar"
          height="135px"
          width="135px"
          alt="A photo of Kieran"
          loading="lazy"
          decoding="async"
        />
      )}
      {children}
    </header>
  );
}
