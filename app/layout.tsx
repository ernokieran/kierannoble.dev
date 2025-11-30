import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Blackout } from "@/components/layout/Blackout";
import "./../styles/ui/site.scss";

export const metadata: Metadata = {
  title: "Kieran Noble - Full Stack Developer",
  description: "Portfolio of Kieran Noble, a Full Stack Developer showcasing projects in AI, eCommerce, and creative photography.",
  icons: {
    icon: '/favicon.png',
  },
  other: {
    viewport: 'width=device-width, initial-scale=0.75',
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
