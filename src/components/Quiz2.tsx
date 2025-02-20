import React, { useState } from "react";
import questionData from "../data/questionData2";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Quiz2: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questionData>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [isStart, setIsStart] = useState(false);
  const [complete, setComplete] = useState(false);

  function start() {
    setShuffledQuestions(shuffleArray(questionData)); // Shuffle questions at the start
    setQuestionNumber(0);
    setComplete(false);
    setIsStart(true);
  }

  function handleAnswerSelection(answer: string) {
    if (answer === shuffledQuestions[questionNumber].answer) {
      if (questionNumber + 1 < shuffledQuestions.length) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setComplete(true);
      }
    }
  }

  return (
    <div className="quiz">
      <h1>Driving-License Quiz</h1>
      {!isStart ? (
        <button onClick={start}>Start</button>
      ) : complete ? (
        <h2 style={{ fontWeight: 500 }}>You have completed the quiz</h2>
      ) : (
        <>
          <h2>
            Question {questionNumber + 1}: <span>{shuffledQuestions[questionNumber].question}</span>
          </h2>
          <div className="options">
            {shuffledQuestions[questionNumber].options.map((option: string, index: number) => (
              <button className="answer-button" key={index} onClick={() => handleAnswerSelection(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz2;
