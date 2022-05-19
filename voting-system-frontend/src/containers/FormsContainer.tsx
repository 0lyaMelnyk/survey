import React, {useState} from 'react';
import { useEffect } from 'react';
import Answer from '../models/Answer';
import { Form } from '../models/Form';
import QuestionContainer from './QuestionContainer';

interface IFormContainerProps{
    forms: Form[],
    onSubmit: Function
}

export const FormsContainer = (props: IFormContainerProps): JSX.Element => {
    console.log(props.forms.length);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [filledForms, setFilledForms] = useState([]);

    const onSubmitForm = (answers:Answer[]) => {
        let filledForm:Form =props.forms[currentFormIndex];
        filledForm.answers = answers;
        console.log("filledforms");
        console.log(filledForm);

        setFilledForms([...filledForms, filledForm]);  
    }
    useEffect(()=>{
        console.log(filledForms.length);
        if(filledForms.length>0){
        if(currentFormIndex < props.forms.length-1) {
            setCurrentFormIndex(currentFormIndex+1);
        }
        else {
            console.log(filledForms);

            props.onSubmit(filledForms);
        }}
        },[filledForms.length]);
    
    
    return <QuestionContainer form={props.forms[currentFormIndex]} onSubmit={onSubmitForm}/>
}