import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* 
        The header is fixed. 
        Tier 1 is 36px, Tier 2 is ~88px. Total ~ 124px.
        We add padding top to main to avoid content hiding behind header. 
      */}
      <main className="flex-grow pt-[100px] md:pt-[124px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
