import React, { useState } from 'react';
import CommonContainer from './containers/CommonContainer';
import { Question } from './models/Question';
import {QuestionsForm} from './containers/QuestionContainer'
import { QuestionAnswer } from './models/QuestionAnswer';
import SelectedItems from './models/SelectedItems';
const answersVariants:QuestionAnswer[]=[
    {answerId:1, answerTitle:"Повністю не погоджуюсь"},
    {answerId:2, answerTitle:"Частково не погоджуюсь"},
    {answerId:3, answerTitle:"Не можу дати відповідь"},
    {answerId:4, answerTitle:"Частково погоджуюсь"},
    {answerId:5, answerTitle:"Повністю погоджуюсь"}]
const questionItemsLecture:Question[] = [
    {questionId:1, questionTitle:"Вміє зацікавити студентів своєю дисципліною;", answers: answersVariants},
    {questionId:2, questionTitle:"Стимулює активність, творчість та самостійну роботу студентів;", answers: answersVariants},
    {questionId:3,questionTitle:"Вільно володіє матеріалом з дисципліни;", answers: answersVariants}, 
    {questionId:4, questionTitle:"Проводить заняття професійною, виразною та чіткою мовою;", answers: answersVariants},
    {questionId:5,questionTitle: "Вміє доступно викласти матеріал дисципліни;", answers: answersVariants},
    {questionId:6, questionTitle:"Висуває чіткі та несуперечливі вимоги до студентів;", answers: answersVariants},
    {questionId:7, questionTitle:"Об’єктивно оцінює рівень знань студентів;", answers:answersVariants},
    {questionId:8, questionTitle:"Поважає студентів, є тактовним;", answers: answersVariants},
    {questionId:9, questionTitle:"Зацікавлений в успіхах студента",answers:answersVariants},
    {questionId: 10, questionTitle:"Вміє урізноманітнити зміст лекції фактами, прикладами, порівняннями, що активізують його сприйняття", answers:answersVariants}]
const questionItemsPractical:Question[] = [
    {questionId:1, questionTitle:"Вміє зацікавити студентів своєю дисципліною;", answers: answersVariants},
        {questionId:2, questionTitle:"Стимулює активність, творчість та самостійну роботу студентів;", answers: answersVariants},
        {questionId:3,questionTitle:"Вільно володіє матеріалом з дисципліни;", answers: answersVariants}, 
        {questionId:4, questionTitle:"Проводить заняття професійною, виразною та чіткою мовою;", answers: answersVariants},
        {questionId:5,questionTitle: "Вміє доступно викласти матеріал дисципліни;", answers: answersVariants},
        {questionId:6, questionTitle:"Висуває чіткі та несуперечливі вимоги до студентів;", answers: answersVariants},
        {questionId:7, questionTitle:"Об’єктивно оцінює рівень знань студентів;", answers:answersVariants},
        {questionId:8, questionTitle:"Поважає студентів, є тактовним;", answers: answersVariants},
        {questionId:9, questionTitle:"Зацікавлений в успіхах студента",answers:answersVariants},
        {questionId: 10, questionTitle:"Забезпечує високу ступінь реалізації мети заняття;", answers:answersVariants},
        {questionId: 11, questionTitle:"Використовує під час занять наочні матеріали (презентації тощо);", answers:answersVariants},
    ]
        const questionItemsSubject:Question[] = [
            {questionId:1, questionTitle:"Логічно вписується у структуру Освітньої програми;", answers: answersVariants},
            {questionId:2, questionTitle:"Дає можливість набути практичних навичок та вмінь;", answers: answersVariants},
            {questionId:3,questionTitle:"Потрібна для майбутньої професійної діяльності;", answers: answersVariants}, 
            {questionId:4, questionTitle:"Розширює світогляд;", answers: answersVariants},
            {questionId:5,questionTitle: "Дає нові знання;", answers: answersVariants},
            {questionId:6, questionTitle:"Насичена сучасним та актуальним науковим /науково-практичним матеріалом;", answers: answersVariants},
            {questionId:7, questionTitle:"Добре забезпечена навчально-науковою літературою та методичними матеріалами;", answers:answersVariants},
            {questionId:8, questionTitle:"Добре забезпечена необхідними методичними ресурсами/посібниками для організації самостійної роботи здобувачів освіти", answers: answersVariants},
            {questionId:9, questionTitle:"Має прийнятний рівень складності;",answers:answersVariants},
            {questionId: 10, questionTitle:"Лекції тісно пов'язані з іншими формами занять (семінарськими, практичними, лабораторними тощо);", answers:answersVariants},
            {questionId: 11, questionTitle:"Кількість годин аудиторних навчальних занять і самостійної роботи збалансована.", answers:answersVariants}]        
 let formItems = [
    {
        id: 1,
        type: 'lect_prepod',
        answers: []
    },
    {
        id: 2,
        type: 'sem_prepod',
        answers: []
    },
    {
        id: 2,
        type: 'subject',
        answers: []
    },
]

function App() {
  let [formItems, setFormItem] = useState([]);
  const [view, SetView] = useState('Quest');
  const onSetItems = (formItems:[]) => {
      setFormItem(formItems);
  } 
  return (
      <div>
          {
              view === 'Quest' ? <CommonContainer onSubmit={SetView}/> : < QuestionsForm questions={questionItemsLecture} onSubmit={onSetItems}/>
          }
      </div>
  );
}

export default App;