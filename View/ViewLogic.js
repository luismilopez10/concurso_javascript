import { getQuestionByCategory } from "../BusinessRule/Question.js";


let start = document.querySelector("#send-primary-button");

start.addEventListener("click", ()=>{getQuestionArray(1)});


function getQuestionArray(category){
    var questionArray = getQuestionByCategory(category);
    // return questionArray;
    displayQuestion(questionArray);

}

function displayQuestion(questionArray){
    let numQuestion = Math.floor(Math.random() * 5);
    console.log(questionArray);

    let display_question = questionArray[numQuestion].question;
    let textField = document.querySelector("#questionField");
    textField.value = display_question; 
    
    
    
    let display_op1 = document.querySelector("#option_1");
    display_op1.innerHTML = questionArray[numQuestion].option[0];

    let display_op2 = document.querySelector("#option_2");
    display_op2.innerHTML = questionArray[numQuestion].option[1];

    let display_op3 = document.querySelector("#option_3");
    display_op3.innerHTML = questionArray[numQuestion].option[2];

    let display_op4 = document.querySelector("#option_4");
    display_op4.innerHTML = questionArray[numQuestion].option[3];





    // document.querySelector("#op2").innerHTML = questionArray[numQuestion].option[1];
    // document.querySelector("#op3").innerHTML = questionArray[numQuestion].option[2];
    // document.querySelector("#op4").innerHTML = questionArray[numQuestion].option[3];

}




// let i = getQuestionByCategory(1);
// console.log(i);




