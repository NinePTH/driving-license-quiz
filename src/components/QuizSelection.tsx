import React from "react";
import BigData_M2_JJ from "./BigData-M2-JJ";
import BigData_M2_JTM from "./BigData-M2-Jtm";
import OS_Exam_M1 from "./OS-Exam-M1";
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
          <button className="select-quiz-button" onClick={() => setQuiz("BigDataM2JJ")}>Big Data M2 JJ</button>
          <button className="select-quiz-button" onClick={() => setQuiz("BigDataM2JTM")}>Big Data M2 JTM</button>
          <button className="select-quiz-button" onClick={() => setQuiz("OS1")}>OS Exam 1</button>
          <button className="select-quiz-button" onClick={() => setQuiz("M3Past")}>M3 Past Exam</button>
          <button className="select-quiz-button" onClick={() => setQuiz("M3ChatGPT")}>M3 ChatGPT</button>
          <button className="select-quiz-button" onClick={() => setQuiz("M3MIX")}>M3 Past Exam + ChatGPT</button>
        </div>
      ) : quiz == "BigDataM2JJ" ? (
        <BigData_M2_JJ />
      ) : quiz == "BigDataM2JTM" ? (
        <BigData_M2_JTM />
      ) : quiz == "OS1" ? (
        <OS_Exam_M1 />
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
