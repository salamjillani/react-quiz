import React from "react";
import Answer from "./Answer";

const AnswerList = ({
  correctAnswer,
  incorrectAnswers,
  selectedAnswer,
  isRevealed,
  onSelectAnswer,
}) => {
  const allAnswers = React.useMemo(() => {
    const answers = [...incorrectAnswers, correctAnswer];
    return answers.sort(() => Math.random() - 0.5);
  }, [correctAnswer, incorrectAnswers]);

  return (
    <div className="space-y-3">
      {allAnswers.map((answer, index) => (
        <Answer
          key={index}
          answer={answer}
          isSelected={selectedAnswer === answer}
          isCorrect={answer === correctAnswer}
          isRevealed={isRevealed}
          onClick={() => onSelectAnswer(answer)}
        />
      ))}
    </div>
  );
};

export default AnswerList;
