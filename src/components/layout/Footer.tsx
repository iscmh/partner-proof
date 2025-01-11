import React from 'react';
import { BRAND } from '../../constants/branding';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About {BRAND.name}</h3>
            <p className="text-gray-400">
              Helping you uncover the truth about potential infidelity in your relationship with our research-backed assessment tools.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['privacy', 'terms', 'home'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    {page === 'home' ? 'Home' : `${page} Policy`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{BRAND.copyright}</p>
        </div>
      </div>
    </footer>
  );
};