import React from 'react';
import { decodeHTML } from '../utils/decodeHTML';

const Question = ({ question, difficulty }) => {
  const difficultyToStars = {
    'easy': 1,
    'medium': 2,
    'hard': 3
  };
  
  const stars = difficultyToStars[difficulty] || 0;
  
  return (
    <div className="question-text">
      <div className="difficulty-indicator">
        {Array(stars)}
      </div>
      {decodeHTML(question)}
    </div>
  );
};

export default Question;