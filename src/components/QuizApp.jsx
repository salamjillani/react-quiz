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
      <div className="app">
        <div className="question-card">
          <div className="question-content">
            <h2>Quiz Complete!</h2>
            <p>Your final score: {calculateScorePercentage()}%</p>
            <p>
              You got {score.correct} out of {score.total} questions correct.
            </p>
            <button
              className="next-button"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setScore({ correct: 0, total: 0 });
              }}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
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
