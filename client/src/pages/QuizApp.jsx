import React from "react";
import { QuizProvider } from "../hooks/useQuiz";
import "./index.css";
import { QuizUi } from '../components/QuizUi';


function QuizApp() {
  return (
    <>
      <React.StrictMode>
        <QuizProvider>
          <QuizUi/>
        </QuizProvider>
      </React.StrictMode>
    </>
  );
}

export default QuizApp;
