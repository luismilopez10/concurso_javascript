import { Question } from '../Model/Question.js';

let lstQuestion = [];

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
        let filterQuestions = lstQuestion.filter(question => question.category === inCategory);
        return filterQuestions;
    })
}

<<<<<<< HEAD
//getQuestionByCategory(1);
=======
getQuestionByCategory(5);
>>>>>>> 658722ef412d4a5efddcbc03564a3efc51f71b8d
