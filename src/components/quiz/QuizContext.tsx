import React, { createContext, useContext, useState } from 'react';
import { QuizQuestion } from '../../constants/quizQuestions';

interface QuizContextType {
  currentQuestion: number;
  answers: Record<string, { score: number; pattern?: string }>;
  setAnswer: (questionId: string, score: number, pattern?: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  showSolution: boolean;
  setShowSolution: (show: boolean) => void;
  getDominantPattern: () => string;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { score: number; pattern?: string }>>({});
  const [showSolution, setShowSolution] = useState(false);

  const setAnswer = (questionId: string, score: number, pattern?: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: { score, pattern } }));
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowSolution(false);
  };

  const getDominantPattern = () => {
    const patterns = Object.values(answers)
      .map(answer => answer.pattern)
      .filter(Boolean) as string[];

    const patternCount = patterns.reduce((acc, pattern) => {
      acc[pattern] = (acc[pattern] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(patternCount)
      .sort(([,a], [,b]) => b - a)[0][0];
  };

  return (
    <QuizContext.Provider value={{
      currentQuestion,
      answers,
      setAnswer,
      nextQuestion,
      previousQuestion,
      resetQuiz,
      showSolution,
      setShowSolution,
      getDominantPattern
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};