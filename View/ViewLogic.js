import { getQuestionByCategory } from "../BusinessRule/Question.js";

var level = 1;
var correctAnswer;
var score = 0;

let send = document.querySelector("#send-primary-button");
send.addEventListener("click", ()=>{sendAnswer()});

window.onload = function(){
    getQuestionArray(level);
}

function getQuestionArray(category){
    var questionArray = getQuestionByCategory(category);
    displayQuestion(questionArray);
}


function displayQuestion(questionArray){
    let numQuestion = Math.floor(Math.random() * 5);
    correctAnswer = questionArray[numQuestion].answer;
    // console.log(questionArray);

    let display_question = questionArray[numQuestion].question;
    let textField = document.querySelector("#questionField");
    textField.value = display_question; 
    
    let display_op1 = document.querySelector('label[for="option1"]');
    display_op1.innerHTML = questionArray[numQuestion].option[0];
    display_op1.value = questionArray[numQuestion]

    let display_op2 = document.querySelector('label[for="option2"]');
    display_op2.innerHTML = questionArray[numQuestion].option[1];

    let display_op3 = document.querySelector('label[for="option3"]');
    display_op3.innerHTML = questionArray[numQuestion].option[2];

    let display_op4 = document.querySelector('label[for="option4"]');
    display_op4.innerHTML = questionArray[numQuestion].option[3];
}

function sendAnswer(){
    let selectedRadioElement = document.querySelector('input[name="options"]:checked')
    let selectedAnswerValue = selectedRadioElement.value;
    
    if (selectedAnswerValue == correctAnswer){
        alert("La respuesta es correcta");
        level++;
        if (level < 5) {
            getQuestionArray(level);
            selectedRadioElement.checked = false;
        } else {
            window.location.href = "./saveRecord.html";
        }
        
        
    } else {
        alert("La respuesta es incorrecta, perdiste todo el puntaje acumulado. Intentalo de nuevo!");
        window.location.href = "./home.html"
    }
     

}