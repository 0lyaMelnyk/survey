import { Question } from "./Question";

export default interface IQuestionFormProps {
    questions: Question[],
    onSubmit: Function
}