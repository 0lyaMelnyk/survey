import React, { useState } from 'react';
import CommonContainer from './containers/CommonContainer';
import { Question } from './models/Question';
import {QuestionsForm} from './containers/QuestionContainer'
import { QuestionAnswer } from './models/QuestionAnswer';
import SelectedItems from './models/SelectedItems';
import { FormsContainer } from './containers/FormsContainer';
import { Form } from './models/Form';
import Answer from './models/Answer';
import { Subject } from './models/Subject';
import { Teacher } from './models/Teacher';

const subjects: Subject[] = [
    { subjectId: 1, subjectName: "Функціональне програмування" },
    { subjectId: 2, subjectName: "Цифрова обробка сигналів" },
    { subjectId: 3, subjectName: "Системи автоматизації підприємств" },
    { subjectId: 4, subjectName: "Периферійні пристрої" },
  ];
  
  const teachers: Teacher[] = [
    { teacherId: 1, teacherName: "Загороднюк С.П." },
    { teacherId: 2, teacherName: "Слюсар Є.А." },
    { teacherId: 3, teacherName: "Самощенко О.В" },
    { teacherId: 4, teacherName: "Баужа О.С" },
  ];
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
 let formItems: Form[] = [
    {
        formId: 1,
        title: "Форма оцінювання лектора Слюсаря Євгена Андрійовича",
        type: 1,
        teacherId: 1,
        subjectId: 1,
        questions: questionItemsLecture,
        answers: []
    },
    {
        formId: 2,
        title: "Форма оцінювання смінариста Борецького Олександра Францовича",
        type: 2,
        teacherId: 2,
        subjectId: 1,
        questions: questionItemsPractical,
        answers:[]
    },
    {
        formId: 3,
        title: "Форма оцінювання Комп'ютерних систем",
        type: 3,
        teacherId: 0,
        subjectId: 1,
        questions: questionItemsSubject,
        answers:[]
    },
]

const VIEWS = {
    SELECTION:"SELECTION",
    LOADING:"LOADING",
    FORMS:"FORMS",
    ERROR:"EROR",
    SUCCESS:"SUCCESS"
}

function App() {

  const [forms, setForms] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [view, setView] = useState(VIEWS.SELECTION);

  const processSelection = async (selection:any) => {
    //validate Id
    setView(VIEWS.LOADING);
    const formData = await generateForms(selection);
    console.log(formData);
    setForms(formData);
    setView(VIEWS.FORMS);
  }

  const processAnswers = async (answers:Answer[]) => {

  }

  const generateForms = async (selection:any) => {
    const lecture = GetTeacherById(selection.lectureId);
    formItems[0].teacherId = selection.lectureId;
    formItems[0].title = "Форма оцінювання "+(await lecture).teacherName;
    //GetFormByPracticalId(selection.practicalsId)
    //GetFormBySubjectId()
    return formItems;
  }

  const GetTeacherById =  async (teacherId:Number)=>{
      console.log("teacher id"+teacherId);
    for (var i = 0; i < teachers.length; i++) {
        if (teachers[i].teacherId==teacherId) {
            return teachers[i];
        }
    }
    return {
        teacherId:0,
        teacherName:"Not found"
    };
  }
  const processForms = async(forms:Form[]) => {
    setView(VIEWS.LOADING);
    const result = await applyAnswers(forms);//request to backend
    setView(VIEWS.SUCCESS);
  }

  const applyAnswers = async (forms: any) => {

  }

  const getView = () => {
      console.log(view);
      switch(view){
            case VIEWS.SELECTION:
                return <CommonContainer teachers={teachers} subjects={subjects} onSubmit={processSelection}/>
            case VIEWS.FORMS:
                return <FormsContainer forms={forms} onSubmit={processForms}/>
            case VIEWS.LOADING:
                return <div>Loading...</div>
            case VIEWS.ERROR:
                return <div>Error...</div>
            case VIEWS.SUCCESS:
                return <div>Congrats</div>
            
      }
  }

  return (
      <div>
          {getView()}
      </div>
  );
}

export default App;