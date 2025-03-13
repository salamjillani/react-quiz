import React from 'react';

const NextButton = ({ onClick, isRevealed }) => {
  if (!isRevealed) return null;
  
  return (
    <button 
      className="next-button"
      onClick={onClick}
      data-testid="next-button"
    >
      Next Question
    </button>
  );
};

export default NextButton;