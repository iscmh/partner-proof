import React from 'react';
import { Heart } from 'lucide-react';

export const Hero = ({ onStartQuiz }: { onStartQuiz: () => void }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
            size={32}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Find Out If Your Love Will Stand the Test of Time!
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
          Take this 2-minute quiz to get personalized insights about your relationship.
        </p>
        <button
          onClick={onStartQuiz}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 animate-bounce-subtle"
        >
          <Heart className="mr-2" size={24} />
          Start the Quiz Now!
        </button>
      </div>
    </div>
  );
}