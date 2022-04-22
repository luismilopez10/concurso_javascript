import { getQuestionByCategory } from "../BusinessRule/Question.js";
import { mdlPlayer } from "../Model/mdlPlayer.js";

const currentPlayer = new mdlPlayer("",0);

var level = 1;
var currentQuestion;
var correctAnswer;
var score = 0;

let send = document.querySelector("#btnSend");
send.addEventListener("click", ()=>{sendAnswer()});

let giveUp = document.querySelector("#btnGiveUp");
giveUp.addEventListener("click", ()=>{endGame(`Te has rendido. Tu puntaje fue: ${score}`)});


window.onload = function(){
    displayQuestion(getQuestionArray(level));
}

function getQuestionArray(category){
    var questionArray = getQuestionByCategory(category);
    return questionArray;
}

function displayQuestion(questionArray){
    let numQuestion = Math.floor(Math.random() * 5);
    correctAnswer = questionArray[numQuestion].answer;
    currentQuestion = questionArray[numQuestion];

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
    if (selectedRadioElement != null) {
        let selectedAnswerValue = selectedRadioElement.value;
        
        validateAnswer(selectedAnswerValue);
        selectedRadioElement.checked = false;  
    } else{
        alert("Por favor seleccione una opción");
    }     
}

function validateAnswer(selectedAnswerValue){
    if (selectedAnswerValue == correctAnswer){
        alert("La respuesta es correcta");
        level++;
        score += currentQuestion.reward;

        level < 3 ? displayQuestion(getQuestionArray(level)) : endGame(`¡¡¡Ganaste!!! Tu puntaje fue: ${score}`);
    } else {
        loseGame();
    }  
}

function endGame(alertText){
    alert(alertText);
    currentPlayer.score = score;
    sessionStorage.setItem("playerScore",currentPlayer.score);
    window.location.href = "./saveRecord.html";
}

function loseGame(){
    alert("La respuesta es incorrecta, perdiste todo el puntaje acumulado. ¡Intentalo de nuevo!");
    window.location.href = "./home.html";
    sessionStorage.removeItem("playerScore");
}