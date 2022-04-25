import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import IQuestionFormProps from '../models/IQuestionFormProps';
import IQuestionProps from '../models/IQuestionProps';
import { Question } from '../models/Question';

export const QuestionsForm = (props: IQuestionFormProps): JSX.Element => {
    
    const [answers, setAnswers] = useState([]);

    const setAnswer = (questionId:Number, answerId:Number): void => {
        if (questionId && answerId) {
            const index = answers.findIndex((x:any) => x.questionId === questionId);
            if (index > -1){
                let data = [...answers];
                data[index].answerId = answerId;
                setAnswers(data); 
            }
            else{
                setAnswers([...answers, {questionId, answerId}])
            }
        }
    }
console.log(answers);
    return (
        <div>
            {
                props.questions.map(item => <QuestionItem 
                    key={item.questionId.toString()}
                    questionAnswerId={answers.find((x:Question) => x.questionId == item.questionId)?.answerId}
                    question={item}
                    answers={item.answers}
                    onAnswerChange={setAnswer}
                />)
            }
        </div>
    );
};

export default QuestionsForm;

const QuestionItem = (props: IQuestionProps): JSX.Element => {
    return (
        <div className='question-item'>
            <div>
            {props.question.questionTitle}
            </div>
            {props.answers.map(item => 
                <div key={item.answerId}>
                    <input type="radio"
                        checked={props.questionAnswerId == item.answerId}
                        onChange={()=>props.onAnswerChange(props.question.questionId, item.answerId)}
                    />
                        {item.answerTitle}
                </div>
            )}
        </div>
    )
}