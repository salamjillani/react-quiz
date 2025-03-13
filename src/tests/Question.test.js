import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import Question from "../components/Question";

describe("Question", () => {
  test("renders question text correctly", () => {
    const questionText = "What is the capital of France?";
    render(<Question question={questionText} difficulty="medium" />);
    expect(screen.getByText(questionText)).toBeInTheDocument();
  });

  test("decodes HTML entities in question text", () => {
    const questionText = "What is 2 &gt; 1?";
    render(<Question question={questionText} difficulty="easy" />);
    expect(screen.getByText("What is 2 > 1?")).toBeInTheDocument();
  });
});
