import localFont from 'next/font/local';
import './globals.css';

import { Providers } from '@/providers';
import { CartProvider } from '../context/CartContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Future Site to Purchase Shirts',
  description: 'An online store for shirts for level 4 capstone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="my-18 text-center">
          Future Purchasing Coming Soon
        </header>
        <main className="min-h-screen">
          <Providers>
            <CartProvider>{children}</CartProvider>
          </Providers>
        </main>
        <footer className="my-18 text-center">
          &copy; Louis Perkins Capstone Level 4
        </footer>
      </body>
    </html>
  );
}
