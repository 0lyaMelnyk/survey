import { Question } from "./Question"
import { QuestionAnswer } from "./QuestionAnswer"

const answersVariants:QuestionAnswer[]=[
    {answerId:1, answerTitle:"Повністю не погоджуюсь"},
    {answerId:2, answerTitle:"Частково не погоджуюсь"},
    {answerId:3, answerTitle:"Не можу дати відповідь"},
    {answerId:4, answerTitle:"Частково погоджуюсь"},
    {answerId:5, answerTitle:"Повністю погоджуюсь"}]
const questionItems:Question[] = [
    {questionId:1, questionTitle:"1.	Вміє зацікавити студентів своєю дисципліною;", answers: answersVariants},
    {questionId:2, questionTitle:"2.	Стимулює активність, творчість та самостійну роботу студентів;", answers: answersVariants},
    {questionId:3,questionTitle:"3.	Вільно володіє матеріалом з дисципліни;", answers: answersVariants}, 
    {questionId:4, questionTitle:"4.	Проводить заняття професійною, виразною та чіткою мовою;", answers: answersVariants},
    {questionId:5,questionTitle: "5.	Вміє доступно викласти матеріал дисципліни;", answers: answersVariants},
    {questionId:6, questionTitle:"6.	Висуває чіткі та несуперечливі вимоги до студентів;", answers: answersVariants},]
 