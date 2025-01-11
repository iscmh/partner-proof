import React from 'react';
import { Heart } from 'lucide-react';

interface QuizButtonProps {
  onClick: () => void;
  className?: string;
}

export const QuizButton = ({ onClick, className = '' }: QuizButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#8A2BE2] rounded-full hover:bg-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 ${className}`}
    >
      <Heart className="mr-2 animate-heartbeat" size={24} />
      Start the Quiz Now!
    </button>
  );
};