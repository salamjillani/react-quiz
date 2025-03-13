import React from 'react';

const ProgressTracker = ({ current, total, score }) => {
  const maxPossibleScore = Math.round((score / current) * total);
  
  return (
    <div className="score-tracker">
      <div>Score: {score}%</div>
      <div>Max Score: {maxPossibleScore}%</div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-current" 
          style={{ width: `${score}%` }}
          data-testid="score-bar"
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;