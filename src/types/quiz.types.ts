export interface Question {
  question: string;
  options: string[];
  answer: string;
  image?: string;
}

export interface QuizData {
  questions: Question[];
}

export interface ShuffledQuestion extends Question {
  shuffledOptionsList: string[];
  correctOptionIndex: number;
}

export interface QuizConfig {
  id: string;
  title: string;
  dataImport: () => Promise<{ questionData: Question[] }>;
}
