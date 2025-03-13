import React from "react";

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="h-1.5 bg-gray-200 dark:bg-gray-700">
      <div
        className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
        data-testid="progress-bar-fill"
      ></div>
    </div>
  );
};

export default ProgressBar;