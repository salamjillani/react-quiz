import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Answer from "../components/Answer";
import { describe, test, expect, jest } from "@jest/globals";

describe("Answer", () => {
  test("renders answer button with correct text", () => {
    render(
      <Answer
        answer="Paris"
        isSelected={false}
        isCorrect={true}
        isRevealed={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toHaveTextContent("Paris");
  });

  test("adds selected class when answer is selected", () => {
    render(
      <Answer
        answer="Paris"
        isSelected={true}
        isCorrect={true}
        isRevealed={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toHaveClass("answer-selected");
  });

  test("adds correct class when answer is revealed and correct", () => {
    render(
      <Answer
        answer="Paris"
        isSelected={true}
        isCorrect={true}
        isRevealed={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toHaveClass("answer-correct");
  });

  test("adds incorrect class when answer is revealed, selected but incorrect", () => {
    render(
      <Answer
        answer="London"
        isSelected={true}
        isCorrect={false}
        isRevealed={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toHaveClass("answer-incorrect");
  });

  test("calls onClick when answer is clicked", () => {
    const handleClick = jest.fn();
    render(
      <Answer
        answer="Paris"
        isSelected={false}
        isCorrect={true}
        isRevealed={false}
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button is disabled when answer is revealed", () => {
    render(
      <Answer
        answer="Paris"
        isSelected={false}
        isCorrect={true}
        isRevealed={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
