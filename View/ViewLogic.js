import { getQuestionByCategory } from "../BusinessRule/Question.js";
import { mdlPlayer } from "../Model/mdlPlayer.js";
import { correctAnswerDOM, wrongAnswerDOM, initialDom, showScore, showLevel, updateShowScoreLevel, completeGameDOM, giveUpDOM} from "./manipulatingDOM.js";


const currentPlayer = new mdlPlayer("",0);
var level = 1;
var currentQuestion;
var correctAnswer;
var score = 0;
showScore(`Score: ${score}`);
showLevel(`Level: ${level}`);

window.onload = function(){
    displayQuestion(getQuestionArray(level));
    initialDom();
}


let send = document.querySelector("#btnSend");
send.addEventListener("click", ()=>{sendAnswer()});

let btnGiveUp = document.querySelector("#btnGiveUp");
btnGiveUp.addEventListener("click", ()=>{giveUp()});



function getQuestionArray(category){
    var questionArray = getQuestionByCategory(category);
    return questionArray;
}

function displayQuestion(questionArray){
    let numQuestion = Math.floor(Math.random() * 5);
    currentQuestion = questionArray[numQuestion];
    correctAnswer = questionArray[numQuestion].answer;

    let display_question = questionArray[numQuestion].question;
    let textField = document.querySelector("#questionField");
    textField.value = display_question; 
    
    let display_op1 = document.querySelector('label[for="option1"]');
    display_op1.innerHTML = questionArray[numQuestion].option[0];
    // display_op1.value = questionArray[numQuestion]

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
        alert("Please choose an option");
    }     
}

function validateAnswer(selectedAnswerValue){
    if (selectedAnswerValue == correctAnswer){
        score += currentQuestion.reward;
        level++;
        updateShowScoreLevel(`Score: ${score}`, `Level: ${level}`);
        if (level > 5){
            endGame();
        } else{
            displayQuestion(getQuestionArray(level));
            correctAnswerDOM();
        }

    } else {
        loseGame();
    }  
}

function endGame(){
    currentPlayer.score = score;
    sessionStorage.setItem("playerScore",currentPlayer.score);
    completeGameDOM();
}

function giveUp(){
    currentPlayer.score = score;
    sessionStorage.setItem("playerScore",currentPlayer.score);
    giveUpDOM();
}

function loseGame(){
    wrongAnswerDOM();
    sessionStorage.removeItem("playerScore");

}
