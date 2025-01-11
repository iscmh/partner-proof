import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizQuestion as QuestionType } from '../../constants/quizQuestions';
import { useQuiz } from './QuizContext';

interface QuizQuestionProps {
  question: QuestionType;
  totalQuestions: number;
}

export const QuizQuestion = ({ question, totalQuestions }: QuizQuestionProps) => {
  const { currentQuestion, answers, setAnswer, nextQuestion, previousQuestion } = useQuiz();
  const selectedScore = answers[question.id]?.score;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const handleOptionSelect = (score: number, pattern?: string) => {
    setAnswer(question.id, score, pattern);
    if (!isLastQuestion) {
      setTimeout(nextQuestion, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-3 py-4 md:px-4 md:py-6">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 w-full max-w-2xl mx-auto animate-fade-in">
        <div className="mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-4 md:mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <div className="w-full md:w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#8A2BE2] transition-all duration-700 ease-out"
                style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
            {question.question}
          </h2>
        </div>

        <div className="space-y-2 md:space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option.score, option.pattern)}
              className={`w-full p-3 md:p-6 text-left rounded-xl transition-all duration-300 transform ${
                selectedScore === option.score
                  ? 'bg-white text-gray-900 ring-2 ring-[#8A2BE2] scale-[1.02] shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:scale-[1.01] hover:shadow-md border border-gray-200'
              } hover:shadow-purple-100 text-sm md:text-base`}
            >
              <span>{option.text}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-4 md:mt-8">
          {currentQuestion > 0 ? (
            <button
              onClick={previousQuestion}
              className="flex items-center text-gray-600 hover:text-[#8A2BE2] transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              Previous
            </button>
          ) : (
            <div />
          )}
          {selectedScore !== undefined && isLastQuestion && (
            <button
              onClick={nextQuestion}
              className="flex items-center px-4 py-2 md:px-8 md:py-4 bg-[#8A2BE2] text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
            >
              See Your Results
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};