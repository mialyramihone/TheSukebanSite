import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalLoading from '@/components/GlobalLoading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THE SUKEBAN',
  description: 'La team féminine qui domine le gaming',
  icons: {
    icon: 'https://thesukebanofficielle.netlify.app/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        
        <GlobalLoading />
        
        
        <div style={{ display: 'contents' }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}