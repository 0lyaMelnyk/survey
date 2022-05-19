import Answer from "./Answer";
import { Question } from "./Question";

export interface Form{
    formId: Number,
    title: string,
    type: Number,
    teacherId: Number,
    subjectId: Number,
    questions: Question[],
    answers: Answer[]
}