import React from "react";

const ProgressTracker = ({ current, total, score }) => {
  const maxPossibleScore = Math.round((score / current) * total);

  const getScoreColor = (score) => {
    if (score >= 70) return "text-green-600 dark:text-green-400";
    if (score >= 40) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getBarColor = (score) => {
    if (score >= 70) return "bg-green-500 dark:bg-green-600";
    if (score >= 40) return "bg-yellow-500 dark:bg-yellow-600";
    return "bg-red-500 dark:bg-red-600";
  };

  const scoreColorClass = getScoreColor(score);
  const maxScoreColorClass = getScoreColor(maxPossibleScore);
  const scoreBarColorClass = getBarColor(score);
  const maxScoreBarColorClass = getBarColor(maxPossibleScore);

  return (
    <div className="px-5 py-4">
      <div className="flex justify-between text-sm font-medium mb-2">
        <div className={`${scoreColorClass} transition-colors duration-300`}>
          Score: {score}%
        </div>
        <div className={`${maxScoreColorClass} transition-colors duration-300`}>
          Max Score: {maxPossibleScore}%
        </div>
      </div>

      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="flex h-full">
          <div
            className={`h-full transition-all duration-300 ${scoreBarColorClass}`}
            style={{ width: `${(current / total) * score}%` }}
            data-testid="current-score-segment"
          ></div>

          <div
            className={`h-full transition-all duration-300 ${maxScoreBarColorClass} opacity-60`}
            style={{
              width: `${(current / total) * (maxPossibleScore - score)}%`,
            }}
            data-testid="potential-score-segment"
          ></div>

          <div
            className="h-full transition-all duration-300 bg-gray-300 dark:bg-gray-600"
            style={{ width: `${100 - (current / total) * maxPossibleScore}%` }}
            data-testid="remaining-questions-segment"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
