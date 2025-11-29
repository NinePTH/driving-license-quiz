import React, { useState, useMemo } from "react";
import { Question, ShuffledQuestion } from "../types/quiz.types";
import { shuffleArray, normalizeString } from "../utils/helpers";

interface QuizProps {
  title: string;
  questions: Question[];
  onBack?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ title, questions, onBack }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [isStart, setIsStart] = useState(false);
  const [complete, setComplete] = useState(false);

  const shuffledOptions = useMemo<ShuffledQuestion[]>(() => {
    return shuffledQuestions.map((question) => ({
      ...question,
      shuffledOptionsList: shuffleArray(question.options),
      correctOptionIndex: question.options.indexOf(question.answer),
    }));
  }, [shuffledQuestions]);

  const handleStart = () => {
    setShuffledQuestions(shuffleArray(questions));
    setQuestionNumber(0);
    setComplete(false);
    setIsStart(true);
  };

  const handleAnswerSelection = (selectedOption: string) => {
    const currentQuestion = shuffledOptions[questionNumber];

    if (
      normalizeString(selectedOption) === normalizeString(currentQuestion.answer)
    ) {
      if (questionNumber + 1 < shuffledOptions.length) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setComplete(true);
      }
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      location.reload();
    }
  };

  if (!isStart) {
    return (
      <div className="quiz">
        <h1>{title}</h1>
        <button onClick={handleStart}>Start</button>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="quiz">
        <h1>{title}</h1>
        <div>
          <h2 style={{ fontWeight: 500 }}>You have completed the quiz</h2>
          <button onClick={handleBack}>Back to quiz selection</button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledOptions[questionNumber];

  return (
    <div className="quiz">
      <h1>{title}</h1>
      <h2>
        Question {questionNumber + 1}/{shuffledQuestions.length}:{" "}
        <span>{currentQuestion.question}</span>
      </h2>
      {currentQuestion.image && (
        <img
          src={currentQuestion.image}
          alt="Question illustration"
          className="questionImage"
        />
      )}
      <div className="options">
        {currentQuestion.shuffledOptionsList.map((option: string, index: number) => (
          <button
            className="answer-button"
            key={index}
            onClick={() => handleAnswerSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
