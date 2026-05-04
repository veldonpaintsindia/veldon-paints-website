import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PaintBrushCursor from '@/components/PaintBrushCursor';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Veldon Paints | Industrial Paint Solutions',
  description:
    'Custom industrial paint solutions for manufacturing. 35+ years of expertise in bulk paint formulations for steel fabricators, construction firms, and manufacturers across India.',
  keywords: [
    'industrial paint',
    'paint manufacturer',
    'bulk paint',
    'custom formulations',
    'protective coatings',
    'India',
  ],
  authors: [{ name: 'Veldon Paints' }],
  openGraph: {
    title: 'Veldon Paints | Industrial Paint Solutions',
    description:
      'Custom industrial paint solutions for manufacturing with 35+ years of expertise.',
    url: 'https://veldonpaints.com',
    siteName: 'Veldon Paints',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1B2A4A" />
      </head>
      <body className="font-inter bg-white">
        <PaintBrushCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
