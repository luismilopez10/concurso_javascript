import { Question } from '../Model/Question.js';

let lstQuestion = [];
var filterQuestions;

export function getQuestionByCategory(inCategory) {
    fetch('../DDBB/QuestionsDB.json')
    .then (response => response.json())
    .then(questions=>{
        for (let question of questions){
            const mdlQuestion = new Question();
            mdlQuestion.question=question.question;
            mdlQuestion.answer=question.answer;
            mdlQuestion.option=question.option;
            mdlQuestion.category=question.category;
            lstQuestion.push(mdlQuestion);
        }
        filterQuestions = lstQuestion.filter(question => question.category === inCategory);
        return new Promise((resolve, reject) => {resolve(filterQuestions)})
    })
}





//getQuestionByCategory(1);
