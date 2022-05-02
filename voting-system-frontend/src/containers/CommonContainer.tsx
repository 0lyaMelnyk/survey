import { Button, ListItemText } from '@mui/material';
import * as React from 'react';
import LectureDropdown from '../common/LectureDropdown';
import {SubjectSelect} from '../common/SubjectDropdown';
import ISelectedItemsProps from '../models/SelectedItems';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';

const subjects: Subject[] = [
  {subjectId: 1, subjectName: 'Функціональне програмування'},
  {subjectId:2, subjectName:'Цифрова обробка сигналів'},
  {subjectId:3,subjectName:'Системи автоматизації підприємств'},
  {subjectId:4,subjectName:'Периферійні пристрої'},
];

const lectures: Teacher[] = [
    {teacherId: 1, teacherName: 'Загороднюк С.П.'},
    {teacherId:2, teacherName:'Слюсар Є.А.'},
    {teacherId:3,teacherName:'Самощенко О.В'},
    {teacherId:4,teacherName:'Баужа О.С'},
  ];
  interface ICommonProps{
    onSubmit: Function
  }
export default function CommonContainer(props: ICommonProps): JSX.Element {
    const [selectedSubjectId, setSelectedSubjectId] = React.useState();
    const [selectedLectureId, setSelectedLectureId] = React.useState([]);
    const [selectedPracticalIds, setSelectedPracticalIds] = React.useState([]);

    const onClick = () => {
       props.onSubmit("generateItems");
      };
      console.log(selectedSubjectId);
    return (
        <><div>
            <ListItemText primary="Назва освітньої програми: Комп'ютерна інженерія " />
            <ListItemText primary="Освітній рівень (бакалавр, магістр, доктор філософії): бакалавр" />
            <ListItemText primary="Рік навчання: 4" />
            <ListItemText primary="Навчальна дисципліна: " />
            <SubjectSelect selectedSubjectId={selectedSubjectId} subjectOptions={subjects} onSelect={setSelectedSubjectId}/>
            <ListItemText primary="ПІБ лектора" />
            <LectureDropdown selectedTeacherIds={selectedLectureId} teacherOptions={lectures} onSelect={setSelectedLectureId}/>
            <ListItemText primary="ПІБ семінариста" />
            <LectureDropdown selectedTeacherIds={selectedPracticalIds} teacherOptions={lectures} onSelect={setSelectedPracticalIds}/>
        </div>
        <div>
            <Button onClick={onClick}>Apply</Button>
            </div>
            </>
    )
}
