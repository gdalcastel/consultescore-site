import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

import { Header } from '@/components/basics/Header';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Consultescore',
  description: 'Transforme a gestão de suas consultas de crédito com eficiência e precisão.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`flex min-h-svh w-full flex-col ${poppins.variable} antialiased`}>
        <Header />
        <div
          style={{ height: 'calc(100svh - 4rem)' }}
          className="scrollLight flex h-full w-full flex-col items-center overflow-y-auto"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
