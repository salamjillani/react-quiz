import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
  
  return (
    <div className="progress-bar">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${progressPercentage}%` }}
        data-testid="progress-bar-fill"
      ></div>
    </div>
  );
};

export default ProgressBar;