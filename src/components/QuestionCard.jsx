import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import NextButton from "./NextButton";
import ProgressTracker from "./ProgressTracker";
import ProgressBar from "./ProgressBar";
import { decodeHTML } from "../utils/decodeHTML";

const QuestionCard = ({ question, index, total, score, onAnswerQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const handleSelectAnswer = (answer) => {
    if (isRevealed) return;

    setSelectedAnswer(answer);
    const correct = answer === question.correct_answer;
    setIsCorrect(correct);
    setIsRevealed(true);
  };

  const handleNextQuestion = () => {
    onAnswerQuestion(isCorrect);
    setSelectedAnswer(null);
    setIsRevealed(false);
    setIsCorrect(false);
  };

  const difficultyToStars = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const stars = difficultyToStars[question.difficulty] || 0;

  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all">
      <ProgressBar current={index} total={total} />

      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Question {index} of {total}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {decodeHTML(question.category)}
        </p>
        <div className="flex mt-2">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < stars
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <Question
          question={question.question}
          difficulty={question.difficulty}
        />

        <AnswerList
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          selectedAnswer={selectedAnswer}
          isRevealed={isRevealed}
          onSelectAnswer={handleSelectAnswer}
        />

        {isRevealed && (
          <div
            className={`text-center py-3 my-4 rounded-lg font-medium ${
              isCorrect
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            }`}
          >
            {isCorrect ? "Correct!" : "Sorry!"}
          </div>
        )}

        <NextButton onClick={handleNextQuestion} isRevealed={isRevealed} />
      </div>

      <ProgressTracker current={index} total={total} score={score} />
    </div>
  );
};

export default QuestionCard;
