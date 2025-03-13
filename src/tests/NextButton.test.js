import React from "react";
import { describe, test, expect, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import NextButton from "../components/NextButton";

describe("NextButton", () => {
  test("does not render when isRevealed is false", () => {
    render(<NextButton onClick={() => {}} isRevealed={false} />);
    expect(screen.queryByText("Next Question")).not.toBeInTheDocument();
  });

  test("renders when isRevealed is true", () => {
    render(<NextButton onClick={() => {}} isRevealed={true} />);
    expect(screen.getByText("Next Question")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<NextButton onClick={handleClick} isRevealed={true} />);
    fireEvent.click(screen.getByText("Next Question"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
