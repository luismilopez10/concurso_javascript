import { Question } from '../Model/Question.js';

let lstQuestion = [];

function getQuestionByCategory(inCategory) {
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
        let filterQuestions = lstQuestion.filter(question => question.category === inCategory);
        return filterQuestions;
    })
}

getQuestionByCategory(5);