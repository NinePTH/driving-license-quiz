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
  {
    id: "ooad-w1",
    title: "OOAD Mock Exam Week 1",
    dataImport: () => import("../data/OOAD-W1"),
  },
  {
    id: "ooad-w2",
    title: "OOAD Mock Exam Week 2",
    dataImport: () => import("../data/OOAD-W2"),
  },
  {
    id: "ooad-w3",
    title: "OOAD Mock Exam Week 3",
    dataImport: () => import("../data/OOAD-W3"),
  },
  {
    id: "ooad-w4",
    title: "OOAD Mock Exam Week 4",
    dataImport: () => import("../data/OOAD-W4"),
  },
];
