# React Quiz App

A modern, responsive trivia quiz application built with React and Tailwind CSS.


## Features

- 📊 Real-time progress tracking and scoring
- 📱  Responsive design that works on mobile, tablet, and desktop
- ⭐ Question difficulty indicators
- 🔄 Randomized answer options for each question
- ✅ Immediate feedback on answers
- 📈 Score and potential maximum score visualization
- 🔄 Ability to restart the quiz

## Demo

https://react-assessquiz.vercel.app

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/salamjillani/react-quiz.git
   cd react-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:5173`


## Customization

### Adding Your Own Questions

Edit the `questions.js` file to add your own trivia questions. Each question should follow this format:

```javascript
{
  question: "What is the capital of France?",
  correct_answer: "Paris",
  incorrect_answers: ["London", "Berlin", "Madrid"],
  category: "Geography",
  difficulty: "easy" // can be "easy", "medium", or "hard"
}
```

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by modifying the Tailwind classes in the component files.


## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
