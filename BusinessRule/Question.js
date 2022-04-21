import { Question } from '../Model/Question.js';
import { questionsDB } from '../DDBB/QuestionsDB.js';

export function getQuestionByCategory(inCategory) {
    var filterQuestions = questionsDB.filter(question => question.category === inCategory);
    return filterQuestions;
}

//console.log(getQuestionByCategory(1));
