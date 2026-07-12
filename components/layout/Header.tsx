import Image from 'next/image';
import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  avatarUrl?: string;
}

export function Header({ children, avatarUrl }: HeaderProps) {
  return (
    <header>
      {avatarUrl && (
        <Image
          src={avatarUrl}
          className="avatar"
          width={135}
          height={135}
          alt="A photo of Kieran"
          loading="lazy"
          decoding="async"
          unoptimized
        />
      )}
      {children}
    </header>
  );
}
