/*
 * 1. Consultar las preguntas
 * 2. Filtrar por categoría
 * 3. Elegir una pregunta al azar
*/

function Question(question, answer, options, category) {
    this.question = question;
    this.answer = answer;
    this.options = options;
    this.category = category;
}

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
        //console.log(lstQuestion);
        let filterQuestions = lstQuestion.filter(question => question.category === inCategory);
        //console.log(filterQuestions);
        return filterQuestions;
    })
}

getQuestionByCategory(1);