import React, { useState, useMemo } from "react";
import questionData from "../data/MIC-M3";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const MIC_Quiz_M3_Past: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<
    typeof questionData
  >([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [isStart, setIsStart] = useState(false);
  const [complete, setComplete] = useState(false);

  // Use useMemo to create a memoized version of shuffled options for each question
  const shuffledOptions = useMemo(() => {
    return shuffledQuestions.map((question) => ({
      ...question,
      shuffledOptionsList: shuffleArray(question.options),
      correctOptionIndex: question.options.indexOf(question.answer),
    }));
  }, [shuffledQuestions]);

  function start() {
    setShuffledQuestions(shuffleArray(questionData)); // Shuffle questions at the start
    setQuestionNumber(0);
    setComplete(false);
    setIsStart(true);
  }

  function handleAnswerSelection(selectedOption: string) {
    const currentQuestion = shuffledOptions[questionNumber];

    if (
      selectedOption.split(" ").join("") ===
      currentQuestion.answer.split(" ").join("")
    ) {
      if (questionNumber + 1 < shuffledOptions.length) {
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
        <div style={{ width: "100%" }}>
          <h2 style={{ fontWeight: 500, marginBottom: "1rem" }}>You have completed the quiz</h2>
          <button
            onClick={() => {
              location.reload();
            }}
          >
            Back to quiz selection
          </button>
        </div>
      ) : (
        <>
          <h2>
            Question {questionNumber + 1}/{shuffledQuestions.length}:{" "}
            <span>{shuffledOptions[questionNumber].question}</span>
          </h2>
          {shuffledOptions[questionNumber].image && (
            <img
              src={shuffledOptions[questionNumber].image}
              alt="Question illustration"
              className="questionImage"
            />
          )}
          <div className="options">
            {shuffledOptions[questionNumber].shuffledOptionsList.map(
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

export default MIC_Quiz_M3_Past;
