import React, { useState } from "react";
import questionData from "../data/MIC-M2";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const MIC_Quiz: React.FC = () => {
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
    if (
      answer.split(" ").join("") ===
      shuffledQuestions[questionNumber].answer.split(" ").join("")
    ) {
      if (questionNumber + 1 < shuffledQuestions.length) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setComplete(true);
      }
    }
  }

  return (
    <div className="quiz">
      <h1>Bio Quiz</h1>
      {!isStart ? (
        <button onClick={start}>Start</button>
      ) : complete ? (
        <h2 style={{ fontWeight: 500 }}>You have completed the quiz</h2>
      ) : (
        <>
          <h2>
            Question {questionNumber + 1}:{" "}
            <span>{shuffledQuestions[questionNumber].question}</span>
          </h2>
          {shuffledQuestions[questionNumber].image && (
            <img
              src={shuffledQuestions[questionNumber].image}
              alt="Question illustration"
              className="questionImage"
            />
          )}
          <div className="options">
            {shuffledQuestions[questionNumber].options.map(
              (option: string, index: number) => (
                <button
                  className="answer-button"
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MIC_Quiz;
