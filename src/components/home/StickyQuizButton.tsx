import React, { useEffect, useState } from 'react';
import { QuizButton } from '../quiz/QuizButton';

interface StickyQuizButtonProps {
  onStartQuiz: () => void;
}

export const StickyQuizButton = ({ onStartQuiz }: StickyQuizButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight / 2;
      
      // Update scroll state
      const pastThreshold = scrollPosition > threshold;
      setHasScrolledPastThreshold(pastThreshold);
      
      // Add a slight delay before showing/hiding for smoother transition
      if (pastThreshold && !isVisible) {
        setTimeout(() => setIsVisible(true), 50);
      } else if (!pastThreshold && isVisible) {
        setTimeout(() => setIsVisible(false), 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        hasScrolledPastThreshold 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <QuizButton 
        onClick={onStartQuiz} 
        className="shadow-lg bg-opacity-95 backdrop-blur-sm"
      />
    </div>
  );
};