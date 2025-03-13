import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressTracker from "../components/ProgressTracker";
import { describe, test, expect } from "@jest/globals";

describe("ProgressTracker", () => {
  test("displays current score correctly", () => {
    render(<ProgressTracker current={10} total={20} score={75} />);
    expect(screen.getByText("Score: 75%")).toBeInTheDocument();
  });

  test("calculates and displays max possible score correctly", () => {
    render(<ProgressTracker current={10} total={20} score={70} />);
    expect(screen.getByText("Max Score: 140%")).toBeInTheDocument();
  });

  test("renders score bar with correct width", () => {
    render(<ProgressTracker current={10} total={20} score={75} />);
    const scoreBar = screen.getByTestId("score-bar");
    expect(scoreBar).toHaveStyle("width: 75%");
  });
});
