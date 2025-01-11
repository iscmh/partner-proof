import React, { useState, useEffect } from 'react';
import { QuizProvider } from './QuizContext';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { LoadingQuiz } from './LoadingQuiz';
import { EmailCapture } from './EmailCapture';
import { UserProfile, UserProfileData } from './UserProfile';
import { quizQuestions } from '../../constants/quizQuestions';
import { useQuiz } from './QuizContext';
import { sendToWebhook } from '../../utils/api';

const calculateRiskLevel = (answers: Record<string, { score: number; pattern?: string }>) => {
  const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
  const maxScore = Object.keys(answers).length * 10;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 70) return 'high';
  if (percentage >= 40) return 'moderate';
  return 'low';
};

const QuizContent = () => {
  const { currentQuestion, answers } = useQuiz();
  const [showLoading, setShowLoading] = useState(false);
  const [showPersonalityLoading, setShowPersonalityLoading] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [shareId, setShareId] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (currentQuestion === 6) {
      setShowPersonalityLoading(true);
      setTimeout(() => {
        setShowPersonalityLoading(false);
      }, 2000);
    }
  }, [currentQuestion]);

  const handleUserProfileSubmit = (data: UserProfileData) => {
    setUserProfile(data);
    setShowUserProfile(false);
    setShowEmail(true);
  };

  const handleEmailSubmit = async (submittedEmail: string) => {
    setError('');
    setEmail(submittedEmail);
    setShowEmail(false);
    setShowLoading(true);
    
    try {
      if (!userProfile) {
        throw new Error('User profile data is missing');
      }

      const newShareId = Math.random().toString(36).substring(2, 15);
      setShareId(newShareId);
      
      const quizAnswers = Object.entries(answers).map(([id, answer]) => ({
        questionId: id,
        ...answer,
      }));

      const success = await sendToWebhook({
        email: submittedEmail,
        userProfile,
        answers: quizAnswers,
        shareId: newShareId,
      });

      if (!success) {
        throw new Error('Failed to submit results');
      }
      
      setTimeout(() => {
        setShowLoading(false);
        setShowResults(true);
      }, 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unable to process results';
      console.error('Error submitting data:', errorMessage);
      setError('Unable to process results. Please try again.');
      setShowEmail(true);
      setShowLoading(false);
    }
  };

  if (showLoading) {
    return <LoadingQuiz message="Analyzing your answers..." />;
  }

  if (showPersonalityLoading) {
    return <LoadingQuiz message="Personalizing next questions..." />;
  }

  if (showUserProfile) {
    return <UserProfile onSubmit={handleUserProfileSubmit} />;
  }

  if (showEmail) {
    return <EmailCapture onSubmit={handleEmailSubmit} error={error} />;
  }

  if (showResults) {
    return <QuizResults shareId={shareId} />;
  }

  if (currentQuestion >= quizQuestions.length && !showUserProfile) {
    setShowUserProfile(true);
    return <LoadingQuiz message="Personalizing next questions..." />;
  }

  return (
    <QuizQuestion 
      question={quizQuestions[currentQuestion]} 
      totalQuestions={quizQuestions.length}
    />
  );
};

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};