import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import questions from "../questions";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const handleAnswerQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => ({
        correct: prev.correct + 1,
        total: prev.total + 1,
      }));
    } else {
      setScore((prev) => ({
        ...prev,
        total: prev.total + 1,
      }));
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const calculateScorePercentage = () => {
    if (score.total === 0) return 0;
    return Math.round((score.correct / score.total) * 100);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quiz Complete!</h2>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{calculateScorePercentage()}%</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  You got {score.correct} out of {score.total} questions correct.
                </p>
              </div>
              
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setScore({ correct: 0, total: 0 });
                }}
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <QuestionCard
        question={questions[currentQuestionIndex]}
        index={currentQuestionIndex + 1}
        total={questions.length}
        score={calculateScorePercentage()}
        onAnswerQuestion={handleAnswerQuestion}
      />
    </div>
  );
};

export default QuizApp;