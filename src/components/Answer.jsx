import React from "react";
import { decodeHTML } from "../utils/decodeHTML";

const Answer = ({ answer, isSelected, isCorrect, isRevealed, onClick }) => {
  let baseClasses =
    "w-full py-3 px-4 rounded-lg border transition-all duration-200 text-left font-medium focus:outline-none focus:ring-2";

  let stateClasses = "";

  if (isRevealed) {
    if (isCorrect) {
      stateClasses =
        "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-400";
    } else if (isSelected) {
      stateClasses =
        "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:border-red-600 dark:text-red-400";
    } else {
      stateClasses =
        "bg-gray-100 border-gray-300 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400";
    }
  } else if (isSelected) {
    stateClasses =
      "bg-indigo-600 border-indigo-600 text-white dark:bg-indigo-700 dark:border-indigo-700";
  } else {
    stateClasses =
      "bg-white border-gray-300 text-gray-800 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700";
  }

  return (
    <button
      className={`${baseClasses} ${stateClasses}`}
      onClick={onClick}
      disabled={isRevealed}
      data-testid={`answer-${answer.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {decodeHTML(answer)}
    </button>
  );
};

export default Answer;
