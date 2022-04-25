import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MarksTable from './MarksTable';
import MarksTableWithRadio from './MarksTableWithRadio';

function createData(
  firstQuest: string,
  secondQuest: string,
  thirdQuest: string,
  fourthQuest: string,
  fifthQuest: string,
  sixthQuest: string,
  seventhQuest: string,
  eighthQuest: string,
  ninthQuest: string,
  tenthQuest: string
) {
  return { firstQuest, secondQuest, thirdQuest, fourthQuest, fifthQuest, sixthQuest, seventhQuest, eighthQuest, ninthQuest, tenthQuest };
}

const rows = [
  "1.	Вміє зацікавити студентів своєю дисципліною;", "2.	Стимулює активність, творчість та самостійну роботу студентів;",
  "3.	Вільно володіє матеріалом з дисципліни;", "4.	Проводить заняття професійною, виразною та чіткою мовою;", "5.	Вміє доступно викласти матеріал дисципліни;",
  "6.	Висуває чіткі та несуперечливі вимоги до студентів;","7.	Об’єктивно оцінює рівень знань студентів;", "8.	Поважає студентів, є тактовним.",
  "9.	Зацікавлений в успіхах студента", "10.   Вміє урізноманітнити зміст лекції фактами, прикладами, порівняннями, що активізують його сприйняття"];

export default function LectureTable() {
    
}
