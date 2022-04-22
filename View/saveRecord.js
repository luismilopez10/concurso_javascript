import { mdlPlayer } from "../Model/mdlPlayer.js";

const playerScore = parseInt(sessionStorage.getItem("playerScore"));
const currentPlayer = new mdlPlayer();

window.onload = function(){
    var buttonSendInfo = document.querySelector('#btn-sendInfo');
    buttonSendInfo.addEventListener("click", () => {savePlayerInDB()});
    
    currentPlayer.score = playerScore;
}

function savePlayerInDB(){
    var name = document.getElementsByName('username')[0].value;
    validateName(name);

    // AQUÍ PONER LO DE LA BASE DE DATOS "IndexedDB"
    var db = openDatabase('DBPlayer', '1.0', 'Players DB', 2 * 1024 * 1024);

    db.transaction(function (tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS tblPlayer (name, score)');
        tx.executeSql('INSERT INTO tblPlayer (name, score) VALUES (' + currentPlayer.name + ', ' + currentPlayer.score + ')');
    });

    alert(`${currentPlayer.name}, tu puntaje (${currentPlayer.score}) ha sido guardado.`);    
    //sessionStorage.removeItem("playerScore");
    //window.location.href = "./records.html";
}

function validateName(name){    
    if(name.length < 3) {
        name = 'AAA';
    }    
    currentPlayer.name = name.toUpperCase();
}

