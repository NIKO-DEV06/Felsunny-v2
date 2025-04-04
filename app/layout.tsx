import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SmoothScroll from '@/components/shared/SmoothScroll';
// import AnimatedCursor from "react-animated-cursor";

const poppins = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Felsunny Technology',
  description:
    'A multipurpose business organization that deals with sales and distribution, government supplies, construction, consultancy services, gadgets & devices and property sales',
  keywords: [
    'felsunny',
    'felsunny technology',
    'felix sunday ayeniko',
    'ayeniko',
    'felsunny tech',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black overflow-x-hidden`}>
        <main>
          <Header />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </main>
      </body>
    </html>
  );
}
