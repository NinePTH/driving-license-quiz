import React from "react";
import MIC_Quiz_M3_Past from "./MIC-Quize-M3";
import MIC_Quiz_M3_MIX from "./MIC-Quiz-M3-Mix";
import MIC_Quiz_M3_ChatGPT from "./MIC-Quize-M3-ChatGPT";

function QuizSelection() {
  const [quiz, setQuiz] = React.useState<string>("");
  return (
    <>
      {quiz == "" ? (
        <div className="quiz">
          <h1>QuizSelection</h1>
          <button className="select-quiz-button" onClick={() => setQuiz("M3Past")}>M3 Past Exam</button>
          <button className="select-quiz-button" onClick={() => setQuiz("M3ChatGPT")}>M3 ChatGPT</button>
          <button className="select-quiz-button" onClick={() => setQuiz("M3MIX")}>M3 Past Exam + ChatGPT</button>
        </div>
      ) : quiz == "M3Past" ? (
        <MIC_Quiz_M3_Past />
      ) : quiz == "M3ChatGPT" ? (
        <MIC_Quiz_M3_ChatGPT />
      ) : quiz == "M3MIX" ? (
        <MIC_Quiz_M3_MIX />
      ) : null}
    </>
  );
}

export default QuizSelection;
