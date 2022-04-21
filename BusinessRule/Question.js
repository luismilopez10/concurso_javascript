import { Question } from '../Model/Question.js';
import { preguntas } from '../DDBB/QuestionsDB.js';

export function getQuestionByCategory(inCategory) {
    var filterQuestions = preguntas.filter(question => question.category === inCategory);
    return filterQuestions;
}

//console.log(getQuestionByCategory(1));
