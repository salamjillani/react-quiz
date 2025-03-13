import React from "react";
import { decodeHTML } from "../utils/decodeHTML";

const Question = ({ question }) => {
  return (
    <div className="my-6 text-lg font-medium text-gray-800 dark:text-white">
      {decodeHTML(question)}
    </div>
  );
};

export default Question;