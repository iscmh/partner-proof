import React from 'react';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export const PageLayout = ({ children, onNavigate }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};