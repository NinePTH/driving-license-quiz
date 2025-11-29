import { QuizConfig } from "../types/quiz.types";

export const QUIZ_CONFIGS: QuizConfig[] = [
  {
    id: "bigdata-m2-jj",
    title: "Big Data M2 JJ",
    dataImport: () => import("../data/BigData-M2-JJ"),
  },
  {
    id: "bigdata-m2-jtm",
    title: "Big Data M2 JTM",
    dataImport: () => import("../data/BigData-M2-jtm"),
  },
  {
    id: "os-m1",
    title: "OS Exam 1",
    dataImport: () => import("../data/OS-M1"),
  },
  {
    id: "os-m3",
    title: "OS Exam M3",
    dataImport: () => import("../data/OS-M3"),
  },
  {
    id: "mic-m3-past",
    title: "MIC M3 Past Exam",
    dataImport: () => import("../data/MIC-M3"),
  },
  {
    id: "mic-m3-chatgpt",
    title: "MIC M3 ChatGPT",
    dataImport: () => import("../data/MIC-M3-ChatGPT"),
  },
  {
    id: "mic-m3-mix",
    title: "MIC M3 Past + ChatGPT",
    dataImport: () => import("../data/MIC-M3-MIX"),
  },
];
