import React, { useState, useEffect } from 'react';
import { AlertTriangle, Heart, RefreshCw, AlertCircle, ShieldAlert, Sparkles, CheckCircle2, ArrowRight, Timer } from 'lucide-react';
import { useQuiz } from './QuizContext';
import { BRAND } from '../../constants/branding';

interface QuizResultsProps {
  shareId: string;
}

const calculateRiskLevel = (answers: Record<string, { score: number; pattern?: string }>) => {
  const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
  const maxScore = Object.keys(answers).length * 10;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 70) return 'high';
  if (percentage >= 40) return 'moderate';
  return 'low';
};

const getRiskInfo = (riskLevel: string) => {
  switch (riskLevel) {
    case 'high':
      return {
        title: 'High Risk of Infidelity',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: AlertTriangle,
        description: 'Multiple concerning patterns detected',
        signs: [
          'Significant changes in behavior and routine',
          'Increased secrecy with devices and schedule',
          'Emotional distance and reduced intimacy',
          'Unexplained absences and inconsistent stories'
        ],
        nextSteps: [
          'Gather concrete evidence discreetly',
          'Prepare for a serious conversation',
          'Focus on self-protection and well-being',
          'Document all suspicious activities systematically'
        ]
      };
    case 'moderate':
      return {
        title: 'Moderate Risk - Warning Signs Present',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        icon: AlertCircle,
        description: 'Some concerning patterns detected',
        signs: [
          'Changes in communication patterns',
          'Occasional unexplained behavior',
          'Slight emotional withdrawal',
          'Some privacy concerns'
        ],
        nextSteps: [
          'Gather concrete evidence discreetly',
          'Prepare for a serious conversation',
          'Focus on self-protection and well-being',
          'Monitor changes in behavior patterns carefully'
        ]
      };
    default:
      return {
        title: 'Low Risk - But Stay Vigilant',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: ShieldAlert,
        description: 'Minor concerns detected',
        signs: [
          'Slight changes in routine',
          'Some communication issues',
          'Minor trust concerns',
          'Occasional doubts'
        ],
        nextSteps: [
          'Gather concrete evidence discreetly',
          'Prepare for a serious conversation',
          'Focus on self-protection and well-being',
          'Keep a detailed record of any concerning incidents'
        ]
      };
  }
};

export const QuizResults = ({ shareId }: QuizResultsProps) => {
  const { answers, resetQuiz } = useQuiz();
  const riskLevel = calculateRiskLevel(answers);
  const info = getRiskInfo(riskLevel);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleStartTrial = () => {
    window.open('https://whop.com/checkout/plan_KX8rpEefdqcAm/', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 ${info.bgColor} rounded-full`}>
          <info.icon className={`w-10 h-10 ${info.color}`} />
        </div>
        
        <h2 className={`text-3xl font-bold ${info.color} mb-4`}>
          {info.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {info.description}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className={`${info.bgColor} p-6 rounded-lg border ${info.borderColor}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Warning Signs Detected</h3>
          <ul className="space-y-2">
            {info.signs.map((sign, index) => (
              <li key={index} className="flex items-start">
                <AlertTriangle className={`w-5 h-5 ${info.color} mr-2 flex-shrink-0 mt-1`} />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${info.bgColor} p-6 rounded-lg border ${info.borderColor}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Recommended Next Steps</h3>
          <ul className="space-y-2">
            {info.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className={`w-5 h-5 ${info.color} mr-2 flex-shrink-0 mt-1`} />
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-4 md:p-6 border-2 border-yellow-400">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-4">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900">What You'll Get</h3>
            </div>
            <div className="flex items-center text-red-600 bg-white/80 px-2 py-1 md:px-3 md:py-1 rounded-full self-start md:self-auto">
              <Timer className="w-4 h-4 mr-1" />
              <span className="font-mono font-bold text-sm">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold text-sm md:text-base">Advanced Detection Methods</h4>
                <p className="text-xs md:text-sm text-gray-600">Step-by-step guides to uncover hidden apps, secret messages, and suspicious activities</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold text-sm md:text-base">Evidence Collection Method</h4>
                <p className="text-xs md:text-sm text-gray-600">Learn exactly how to gather and document proof of infidelity that can't be denied</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold text-sm md:text-base">Psychology of Respect</h4>
                <p className="text-xs md:text-sm text-gray-600">Master proven techniques to regain your partner's respect and admiration</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div>
                <h4 className="font-semibold text-sm md:text-base">Confrontation Strategy</h4>
                <p className="text-xs md:text-sm text-gray-600">Learn exactly when and how to confront your partner for maximum impact</p>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
            <button 
              onClick={handleStartTrial}
              className="w-full inline-flex items-center justify-center px-4 py-3 md:px-6 md:py-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg font-bold text-sm md:text-lg group"
            >
              Start 7-Day Trial for $1
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs md:text-sm text-gray-600">
              Your 7-day trial will cost only $1. Afterwards, it'll be $9.99/week. Subscription renews automatically
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={resetQuiz}
        className="mt-6 md:mt-8 w-full inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 text-[#8A2BE2] border-2 border-[#8A2BE2] rounded-full hover:bg-purple-50 transition-colors text-sm md:text-base"
      >
        <RefreshCw className="w-4 h-4 md:w-5 md:h-5 mr-2" />
        Take Assessment Again
      </button>

      <p className="text-xs md:text-sm text-gray-500 mt-6 md:mt-8 text-center">
        {BRAND.name} - Helping identify potential relationship issues
      </p>
    </div>
  );
};
