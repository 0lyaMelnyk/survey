import { QuestionAnswer } from "./QuestionAnswer";

export interface Question {
  questionId: Number;
  questionTitle: string;
  answers: QuestionAnswer[];
}
