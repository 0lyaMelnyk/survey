import React, {useState} from 'react';
import { Form } from '../models/Form';
import QuestionContainer from './QuestionContainer';

interface IFormContainerProps{
    forms: Form[],
    onSubmit: Function
}

export const FormsContainer = (props: IFormContainerProps): JSX.Element => {
    console.log(props.forms);
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [filledForms, setFilledForms] = useState([]);

    const onSubmitForm = (filledForm:Form) => {
        setFilledForms([...filledForms, filledForm]);

        if(currentFormIndex < props.forms.length-1) {
            setCurrentFormIndex(currentFormIndex+1);
        }
        else {
            props.onSubmit(filledForms);
        }
    }
    

    return <QuestionContainer form={props.forms[currentFormIndex]} onSubmit={onSubmitForm}/>
}