import { getQuestionByCategory } from "../BusinessRule/Question.js";


let start = document.querySelector("#send-primary-button");

start.addEventListener("click", ()=>{getQuestionArray()});

function getQuestionArray(){
    let questionArray = getQuestionByCategory(1);
    console.log(questionArray);
}

// let i = getQuestionByCategory(1);
// console.log(i);




