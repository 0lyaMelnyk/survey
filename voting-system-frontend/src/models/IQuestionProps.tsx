import { Question } from "./Question";
import { QuestionAnswer } from "./QuestionAnswer";

export default interface IQuestionProps {
  questionAnswerId: Number | null | undefined;
  question: Question;
  answers: QuestionAnswer[];
  onAnswerChange: Function;
}
