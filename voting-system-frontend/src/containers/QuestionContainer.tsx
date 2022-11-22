import { Button, Radio } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import IQuestionFormProps from "../models/IQuestionFormProps";
import IQuestionProps from "../models/IQuestionProps";
import { Question } from "../models/Question";
import "../styles/containers.css";

export const QuestionsForm = (props: IQuestionFormProps): JSX.Element => {
  const [answers, setAnswers] = useState([]);

  const setAnswer = (questionId: Number, answerId: Number): void => {
    if (questionId && answerId) {
      const index = answers.findIndex((x: any) => x.questionId === questionId);
      if (index > -1) {
        let data = [...answers];
        data[index].answerId = answerId;
        setAnswers(data);
      } else {
        setAnswers([...answers, { questionId, answerId }]);
      }
    }
  };
  const onClick = (): void => {
    props.onSubmit(answers);

    if (answers.length == props.form.questions.length) {
      //props.onSubmit(answers);
    } else {
      //alert("Будь ласка дайте відповідь на всі питання");
    }
  };
  console.log(answers);

  useEffect(() => {
    setAnswers([]);
  }, [props.form]);
  return (
    <div className="wrapper">
      <div>
        {props.form.title}
      </div>
      {props.form.questions.map((item) => (
        <QuestionItem
          key={item.questionId.toString()}
          questionAnswerId={
            answers.find((x: Question) => x.questionId == item.questionId)
              ?.answerId
          }
          question={item}
          answers={item.answers}
          onAnswerChange={setAnswer}
        />
      ))}
      <Button onClick={onClick}>Далі</Button>
    </div>
  );
};

export default QuestionsForm;

const QuestionItem = (props: IQuestionProps): JSX.Element => {
  return (
    <div
      className="question-item"
    >
      <div style={{ fontSize: "larger", padding: "5px" }}>
        {props.question.questionTitle}
      </div>
      <div
        className="answerOptions"
      >
        {props.answers.map((item) => (
          <div key={item.answerId}>
            <Radio
              checked={props.questionAnswerId == item.answerId}
              onChange={() =>
                props.onAnswerChange(props.question.questionId, item.answerId)
              }
            />
            {item.answerTitle}
          </div>
        ))}
      </div>
    </div>
  );
};
