import { mdlPlayer } from "../Model/mdlPlayer.js";
import { openDB, deleteDB } from 'https://unpkg.com/idb?module'

const playerScore = parseInt(sessionStorage.getItem("playerScore"));
var currentPlayer;


window.onload = function(){
    var buttonSendInfo = document.querySelector('#btn-sendInfo');
    buttonSendInfo.addEventListener("click", () => {validateName()});
}

function validateName(){  
    let name = document.getElementsByName('username')[0].value;
    name = name.toUpperCase();
    if(name.length != 3) {
        name = 'AAA';
    }
    currentPlayer = new mdlPlayer(name, playerScore);
    savePlayerInLocalStorage(currentPlayer);
}

function savePlayerInLocalStorage(){
    if(localStorage.getItem(currentPlayer.name) != null){
        currentPlayer.score = JSON.parse(localStorage.getItem(currentPlayer.name)).score + playerScore;
    }

    localStorage.setItem(currentPlayer.name, JSON.stringify(currentPlayer));
    



    // AQUÍ PONER LO DE LA BASE DE DATOS "IndexedDB"


    alert(`${currentPlayer.name}, tu puntaje (${currentPlayer.score}) ha sido guardado.`);    
    //sessionStorage.removeItem("playerScore");
    //window.location.href = "./records.html";
}






