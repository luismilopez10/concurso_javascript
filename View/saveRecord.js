import { mdlPlayer } from "../Model/mdlPlayer.js";

const playerScore = parseInt(sessionStorage.getItem("playerScore"));
var currentPlayer;
var btnPlayerRecords = document.querySelector("#btn-player-records");
var buttonSendInfo = document.querySelector('#btn-sendInfo');


window.onload = function(){
    buttonSendInfo.addEventListener("click", () => {validateName()});
    btnPlayerRecords.style.display = "none";
}

function validateName(){  
    let name = document.getElementsByName('username')[0].value;
    name = name.toUpperCase();
    if(name.length != 3) {
        name = 'AAA';
    }
    currentPlayer = new mdlPlayer(name, playerScore);
    savePlayerInLocalStorage(currentPlayer);
    btnPlayerRecords.style.display = "block";
    buttonSendInfo.style.display = "none";
}

function savePlayerInLocalStorage(){
    if(localStorage.getItem(currentPlayer.name) != null){
        currentPlayer.score = JSON.parse(localStorage.getItem(currentPlayer.name)).score + playerScore;
    }

    localStorage.setItem(currentPlayer.name, JSON.stringify(currentPlayer));
    sessionStorage.removeItem("playerScore");

    alert(`${currentPlayer.name}, your score (${currentPlayer.score}) has been saved.`);    
}






