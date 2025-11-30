import type { Metadata } from "next";
import { Blackout } from "@/components/layout/Blackout";
import "./../styles/ui/site.scss";

export const metadata: Metadata = {
  title: "Kieran Noble - Full Stack Developer",
  description: "Portfolio of Kieran Noble, a Full Stack Developer showcasing projects in AI, eCommerce, and creative photography.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Blackout />
        {children}
      </body>
    </html>
  );
}
