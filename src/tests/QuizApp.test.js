import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuizApp from "../components/QuizApp";
import { describe, test, expect, jest, beforeEach } from "jest";
import { questions } from "../questions";

console.log(`Original questions count: ${questions.length}`);

jest.mock("../questions", () => ({
  questions: [
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
    },
    {
      category: "Science",
      type: "multiple",
      difficulty: "medium",
      question: "What is H2O?",
      correct_answer: "Water",
      incorrect_answers: ["Air", "Fire", "Earth"],
    },
  ],
}));

describe("QuizApp", () => {
  let mockProgressTracker;

  beforeEach(() => {
    mockProgressTracker = jest.fn();
    jest.spyOn(console, "log").mockImplementation(mockProgressTracker);
  });

  test("renders the first question on initial load", () => {
    render(<QuizApp />);
    expect(screen.getByText("Question 1 of 2")).toBeInTheDocument();
    expect(
      screen.getByText("What is the capital of France?")
    ).toBeInTheDocument();

    expect(questions.length).toBe(2);
  });

  test("moves to the next question after answering", () => {
    render(<QuizApp />);

    const buttons = screen.getAllByRole("button");
    const parisButton = Array.from(buttons).find(
      (button) => button.textContent === "Paris"
    );
    fireEvent.click(parisButton);

    fireEvent.click(screen.getByText("Next Question"));

    expect(screen.getByText("Question 2 of 2")).toBeInTheDocument();
    expect(screen.getByText("What is H2O?")).toBeInTheDocument();
  });

  test("shows completion screen after all questions", () => {
    render(<QuizApp />);

    const firstButtons = screen.getAllByRole("button");
    const parisButton = Array.from(firstButtons).find(
      (button) => button.textContent === "Paris"
    );
    fireEvent.click(parisButton);
    fireEvent.click(screen.getByText("Next Question"));

    const secondButtons = screen.getAllByRole("button");
    const waterButton = Array.from(secondButtons).find(
      (button) => button.textContent === "Water"
    );
    fireEvent.click(waterButton);
    fireEvent.click(screen.getByText("Next Question"));

    expect(screen.getByText("Quiz Complete!")).toBeInTheDocument();
    expect(screen.getByText("Your final score: 100%")).toBeInTheDocument();

    expect(questions.length).toBe(2);
  });

  test("resets quiz when restart button is clicked", () => {
    render(<QuizApp />);

    const firstButtons = screen.getAllByRole("button");
    const parisButton = Array.from(firstButtons).find(
      (button) => button.textContent === "Paris"
    );
    fireEvent.click(parisButton);
    fireEvent.click(screen.getByText("Next Question"));

    const secondButtons = screen.getAllByRole("button");
    const waterButton = Array.from(secondButtons).find(
      (button) => button.textContent === "Water"
    );
    fireEvent.click(waterButton);
    fireEvent.click(screen.getByText("Next Question"));

    fireEvent.click(screen.getByText("Restart Quiz"));

    expect(screen.getByText("Question 1 of 2")).toBeInTheDocument();

    jest.resetAllMocks();
  });
});
