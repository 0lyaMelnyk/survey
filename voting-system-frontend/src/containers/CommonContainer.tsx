import { Button, ListItemText } from "@mui/material";
import * as React from "react";
import LectureDropdown from "../common/LectureDropdown";
import { SubjectSelect } from "../common/SubjectDropdown";
import { Subject } from "../models/Subject";
import { Teacher } from "../models/Teacher";
import { Voter } from "../models/Voter";
import "../styles/containers.css";

const voter: Voter = {
  voterRandomId: 1,
  faculty: "ФРЕКС",
  educationalProgram: "Комп'ютерна інженерія",
  course: 4,
  educationalLevel: "бакалавр",
};
interface ICommonProps {
  teachers: Teacher[];
  subjects: Subject[];
  onSubmit: Function;
}

export default function CommonContainer(props: ICommonProps): JSX.Element {
  const [selectedSubjectId, setSelectedSubjectId] = React.useState();
  const [selectedLectureId, setSelectedLectureId] = React.useState([]);
  const [selectedPracticalIds, setSelectedPracticalIds] = React.useState([]);

  const onClick = () => {
    const selection = {
      subjectId: selectedSubjectId,
      lectureId: selectedLectureId,
      practicalIds: selectedPracticalIds,
    };
    props.onSubmit(selection);
  };

  return (
    <>
      <div>
        <ListItemText primary={`Назва освітньої програми: ${voter.educationalProgram}`} />
        <ListItemText primary={`Освітній рівень: ${voter.educationalLevel}`} />
        <ListItemText primary={`Рік навчання: ${voter.course}`}>
          {voter.course.toString()}
        </ListItemText>
        <ListItemText primary="Навчальна дисципліна: " />
        <SubjectSelect
          selectedSubjectId={selectedSubjectId}
          subjectOptions={props.subjects}
          onSelect={setSelectedSubjectId}
        />
        <ListItemText primary="Лекційні заняття" />
        <LectureDropdown
          selectedTeacherIds={selectedLectureId}
          teacherOptions={props.teachers}
          onSelect={setSelectedLectureId}
        />
        <ListItemText primary="Практичні заняття" />
        <LectureDropdown
          selectedTeacherIds={selectedPracticalIds}
          teacherOptions={props.teachers}
          onSelect={setSelectedPracticalIds}
        />
      </div>
      <div>
        <Button onClick={onClick}>Далі</Button>
      </div>
    </>
  );
}
