import React from 'react';
import { Heart, Star } from 'lucide-react';
import { QuizButton } from '../quiz/QuizButton';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-[#b98aec] fill-[#b98aec] mx-auto animate-heartbeat" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
          Is Your Partner Cheating On You?
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
          Find out in 2 minutes if your partner is cheating on you.
        </p>
        
        <div className="mb-8">
          <QuizButton onClick={onStartQuiz} />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-500 text-sm">
            Join 50,000+ people who found their path
          </p>
          
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < 4 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : i === 4 
                      ? 'text-yellow-400' 
                      : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};