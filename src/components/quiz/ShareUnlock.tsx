import React, { useState, useEffect } from 'react';
import { Share2, Lock, Timer, CreditCard, Sparkles } from 'lucide-react';

interface ShareUnlockProps {
  shareUrl: string;
  sharesNeeded: number;
  currentShares: number;
}

export const ShareUnlock = ({ shareUrl, sharesNeeded, currentShares }: ShareUnlockProps) => {
  const progress = (currentShares / sharesNeeded) * 100;
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-6 md:mt-8">
      <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-yellow-400 shadow-xl relative mx-4 md:mx-0">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
          50% OFF
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-3">
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mr-2 md:mr-3 flex-shrink-0" />
            <h3 className="text-lg md:text-2xl font-bold text-gray-900">Unlock Your Full Analysis</h3>
          </div>
          <div className="flex items-center text-red-600 bg-white/80 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-sm">
            <Timer className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
            <span className="font-mono font-bold text-sm md:text-base">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="relative mb-6">
          <div className="bg-white/80 rounded-lg p-4 md:p-6 filter blur-[4px]">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Your Personalized Solution Includes:</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                <span>Detailed relationship pattern analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                <span>Personalized improvement strategies</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                <span>Expert relationship advice</span>
              </li>
            </ul>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 animate-pulse" />
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <button className="w-full inline-flex items-center justify-center px-4 py-3 md:px-6 md:py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg font-bold text-base md:text-lg">
            <CreditCard className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span>Unlock Now - $7.97</span>
          </button>
          
          <div className="text-center">
            <span className="text-gray-500 text-sm md:text-base">or</span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2 text-sm md:text-base">
              <span className="font-medium text-gray-600">Share Progress</span>
              <span className="font-medium text-gray-600">
                {currentShares}/{sharesNeeded} shares
              </span>
            </div>
            <div className="bg-gray-200 rounded-full h-1.5 mb-3 md:mb-4">
              <div 
                className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(shareUrl)}
              className="w-full inline-flex items-center justify-center px-4 py-3 md:px-6 md:py-4 border-2 border-yellow-400 text-yellow-600 rounded-xl hover:bg-yellow-50 transition-colors font-semibold text-sm md:text-base"
            >
              <Share2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Share to Unlock Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};