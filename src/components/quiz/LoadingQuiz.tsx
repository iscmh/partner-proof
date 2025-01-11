import React from 'react';
import { Heart } from 'lucide-react';

interface LoadingQuizProps {
  message: string;
}

export const LoadingQuiz = ({ message }: LoadingQuizProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="relative animate-smooth-spin">
            <Heart className="w-full h-full text-[#8A2BE2] stroke-[1.5]" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
          {message}
        </h2>
        <div className="w-64 h-1.5 bg-purple-100 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-[#8A2BE2] rounded-full animate-progress-smooth"></div>
        </div>
      </div>
    </div>
  );
};