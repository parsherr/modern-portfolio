import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parsher',
  description: ' Hi, I’m @parsher I\'m currently learning I am currently living in Turkey.',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless',
  openGraph: {
    images: 'https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}