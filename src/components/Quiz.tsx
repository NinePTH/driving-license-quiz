import React, { useEffect, useState } from "react";
import questionData from "../data/questionData";

const Quiz: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [question, setQuestion] = useState<string>("");
  const [isStart, setIsStart] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (questionNumber >= questionData.length) {
      setComplete(true);
    }
  }, [questionNumber]);

  function start() {
    setQuestion(questionData[questionNumber].question);
    setIsStart(true);
  }

  function handleOnChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInputValue(event.target.value);
  }

  function incrementQuestionNumber() {
    let nextQuestionNumber = questionNumber;
    if (questionNumber < questionData.length) {
        nextQuestionNumber = questionNumber + 1;
    }
    const answer = questionData[questionNumber].answer.split(" ").join("");
    const userAnswer = inputValue.split(" ").join("");

    if (userAnswer == answer && nextQuestionNumber < questionData.length) {
      setQuestion(questionData[nextQuestionNumber].question);
      setQuestionNumber(questionNumber + 1);
      setInputValue("");
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
            Question {questionNumber + 1}: <span>{question}</span>
          </h2>
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="Answer"
            value={inputValue}
          />
          <button onClick={incrementQuestionNumber}>Check Answer</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
