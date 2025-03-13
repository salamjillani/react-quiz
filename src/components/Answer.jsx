import React from "react";
import { decodeHTML } from "../utils/decodeHTML";

const Answer = ({ answer, isSelected, isCorrect, isRevealed, onClick }) => {
  let className = "answer-button";

  if (isRevealed) {
    if (isCorrect) {
      className += " answer-correct";
    } else if (isSelected) {
      className += " answer-incorrect";
    }
  } else if (isSelected) {
    className += " answer-selected";
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={isRevealed}
      data-testid={`answer-${answer.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {decodeHTML(answer)}
    </button>
  );
};

export default Answer;
