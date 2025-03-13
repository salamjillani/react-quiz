import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, jest } from "@jest/globals";
import QuestionCard from "../components/QuestionCard";

describe("QuestionCard", () => {
  const mockQuestion = {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of France?",
    correct_answer: "Paris",
    incorrect_answers: ["London", "Berlin", "Madrid"],
  };

  const props = {
    question: mockQuestion,
    index: 5,
    total: 20,
    score: 75,
    onAnswerQuestion: jest.fn(),
  };

  test("renders question header with correct info", () => {
    render(<QuestionCard {...props} />);
    expect(screen.getByText("Question 5 of 20")).toBeInTheDocument();
    expect(screen.getByText("Geography")).toBeInTheDocument();
  });

  test("shows feedback when answer is selected", () => {
    render(<QuestionCard {...props} />);
    const buttons = screen.getAllByRole("button");
    const parisButton = Array.from(buttons).find(
      (button) => button.textContent === "Paris"
    );
    fireEvent.click(parisButton);

    expect(screen.getByText("Correct!")).toBeInTheDocument();
  });

  test("calls onAnswerQuestion with correct value when next button is clicked", () => {
    render(<QuestionCard {...props} />);
    const buttons = screen.getAllByRole("button");
    const parisButton = Array.from(buttons).find(
      (button) => button.textContent === "Paris"
    );
    fireEvent.click(parisButton);

    fireEvent.click(screen.getByText("Next Question"));

    expect(props.onAnswerQuestion).toHaveBeenCalledWith(true);
  });
});
