import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AnswerList from '../components/AnswerList';
import { describe, test, expect, jest } from '@jest/globals';

describe('AnswerList', () => {
  const props = {
    correctAnswer: 'Paris',
    incorrectAnswers: ['London', 'Berlin', 'Madrid'],
    selectedAnswer: null,
    isRevealed: false,
    onSelectAnswer: jest.fn()
  };
  
  test('renders all answers', () => {
    render(<AnswerList {...props} />);
    expect(screen.getAllByRole('button')).toHaveLength(4);
  });
  
  test('calls onSelectAnswer with the correct answer when clicked', () => {
    render(<AnswerList {...props} />);
    const parisButton = screen.getByTestId('answer-paris');
    fireEvent.click(parisButton);
    expect(props.onSelectAnswer).toHaveBeenCalledWith('Paris');
  });
  
  test('disables all answers when revealed', () => {
    render(<AnswerList {...props} isRevealed={true} />);
    screen.getAllByRole('button').forEach(button => {
      expect(button).toBeDisabled();
    });
  });
});