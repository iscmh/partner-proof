import React, { useState } from 'react';
import { Hero } from './components/home/Hero';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { PageLayout } from './components/layout/PageLayout';
import { Quiz } from './components/quiz/Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleStartQuiz = () => {
    setQuizStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return !quizStarted ? (
          <Hero onStartQuiz={handleStartQuiz} />
        ) : (
          <Quiz />
        );
    }
  };

  return (
    <PageLayout onNavigate={setCurrentPage}>
      {renderContent()}
    </PageLayout>
  );
}

export default App;