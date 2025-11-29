import React, { useState, useEffect } from "react";
import { Question } from "../types/quiz.types";
import { QUIZ_CONFIGS } from "../config/quizzes.config";
import Quiz from "./QuizContainer";

const QuizSelection: React.FC = () => {
  const [selectedQuizId, setSelectedQuizId] = useState<string>("");
  const [quizData, setQuizData] = useState<Question[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedQuizId) {
      loadQuizData(selectedQuizId);
    }
  }, [selectedQuizId]);

  const loadQuizData = async (quizId: string) => {
    setIsLoading(true);
    const config = QUIZ_CONFIGS.find((q) => q.id === quizId);
    
    if (config) {
      try {
        const data = await config.dataImport();
        setQuizData(data.questionData);
      } catch (error) {
        console.error("Error loading quiz data:", error);
        setSelectedQuizId("");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    setSelectedQuizId("");
    setQuizData(null);
  };

  if (isLoading) {
    return (
      <div className="quiz">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (selectedQuizId && quizData) {
    const config = QUIZ_CONFIGS.find((q) => q.id === selectedQuizId);
    return (
      <Quiz
        title={config?.title || "Quiz"}
        questions={quizData}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="quiz">
      <h1>Quiz Selection</h1>
      {QUIZ_CONFIGS.map((config) => (
        <button
          key={config.id}
          className="select-quiz-button"
          onClick={() => setSelectedQuizId(config.id)}
        >
          {config.title}
        </button>
      ))}
    </div>
  );
};

export default QuizSelection;
