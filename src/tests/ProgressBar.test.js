import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "../components/ProgressBar";
import { describe, test, expect } from "@jest/globals";

describe("ProgressBar", () => {
  test("renders progress bar with correct width", () => {
    render(<ProgressBar current={5} total={20} />);
    const progressBarFill = screen.getByTestId("progress-bar-fill");
    expect(progressBarFill).toHaveStyle("width: 25%");
  });

  test("renders progress bar at 100% when current equals total", () => {
    render(<ProgressBar current={10} total={10} />);
    const progressBarFill = screen.getByTestId("progress-bar-fill");
    expect(progressBarFill).toHaveStyle("width: 100%");
  });
});
