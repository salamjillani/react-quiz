import React from "react";

const NextButton = ({ onClick, isRevealed }) => {
  if (!isRevealed) return null;

  return (
    <button
      onClick={onClick}
      data-testid="next-button"
      className="w-full mt-4 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      Next Question
    </button>
  );
};

export default NextButton;
