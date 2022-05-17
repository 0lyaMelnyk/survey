import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
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
    const onClick=():void=>{
        console.log(answers);
        if(answers.length == props.form.questions.length){
            props.onSubmit();
        }
        else{
            alert("Будь ласка дайте відповідь на всі питання");
        }
    }
console.log(props.form);
    return (
        <div style={{border:"solid"}}>
            <div style={{display: "flex", padding:"2%", justifyContent:"center"}}>{props.form.title}</div>
            {
                props.form.questions.map(item => <QuestionItem 
                    key={item.questionId.toString()}
                    questionAnswerId={answers.find((x:Question) => x.questionId == item.questionId)?.answerId}
                    question={item}
                    answers={item.answers}
                    onAnswerChange={setAnswer}
                />)
            }
        <Button onClick={onClick}>Далі</Button>
        </div>
    );
};

export default QuestionsForm;

const QuestionItem = (props: IQuestionProps): JSX.Element => {
    return (
        <div className='question-item' style={{border:"solid", margin:"2px", padding:"5px"}}>
            <div style={{fontSize:"larger", padding:"5px"}}>
            {props.question.questionTitle}
            </div>
            <div className='answerOptions' style={{display: "flex", border:"solid"}}>
            {props.answers.map(item => 
                <div key={item.answerId}>
                    <Radio 
                        checked={props.questionAnswerId == item.answerId}
                        onChange={()=>props.onAnswerChange(props.question.questionId, item.answerId)}
                        />
                        {item.answerTitle}
                </div>
            )}
            </div>
        </div>
    )
}