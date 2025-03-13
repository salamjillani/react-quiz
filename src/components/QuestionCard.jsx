import React from 'react';
import Question from './Question';
import AnswerList from './AnswerList';
import NextButton from './NextButton';
import ProgressTracker from './ProgressTracker';
import ProgressBar from './ProgressBar';
import { decodeHTML } from '../utils/decodeHTML';

const QuestionCard = ({ 
  question, 
  index, 
  total, 
  score,
  onAnswerQuestion
}) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  
  const handleSelectAnswer = (answer) => {
    if (isRevealed) return;
    
    setSelectedAnswer(answer);
    const correct = answer === question.correct_answer;
    setIsCorrect(correct);
    setIsRevealed(true);
  };
  
  const handleNextQuestion = () => {
    onAnswerQuestion(isCorrect);
    setSelectedAnswer(null);
    setIsRevealed(false);
    setIsCorrect(false);
  };

  const difficultyToStars = {
    'easy': 1,
    'medium': 2,
    'hard': 3
  };
  
  const stars = difficultyToStars[question.difficulty] || 0;
  
  return (
    <div className="question-card">
      <ProgressBar current={index} total={total} />
      
      <div className="question-header">
        <h2 className="question-title">Question {index} of {total}</h2>
        <p className="question-category">{decodeHTML(question.category)}</p>
        <div className="difficulty">
          {[...Array(3)].map((_, i) => (
            <span 
              key={i} 
              className={i < stars ? "star" : "star-empty"}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      <div className="question-content">
        <Question 
          question={question.question}
          difficulty={question.difficulty}
        />
        
        <AnswerList
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          selectedAnswer={selectedAnswer}
          isRevealed={isRevealed}
          onSelectAnswer={handleSelectAnswer}
        />
        
        {isRevealed && (
          <div className={`feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Sorry!'}
          </div>
        )}
        
        <NextButton 
          onClick={handleNextQuestion}
          isRevealed={isRevealed}
        />
      </div>
      
      <ProgressTracker 
        current={index}
        total={total}
        score={score}
      />
    </div>
  );
};

export default QuestionCard;