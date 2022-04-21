import { setRecordPlayer } from "../BusinessRule/Player.js"
// import { currentPlayer } from "./ViewLogic.js";
var finalPlayer;

export function getCurrentPlayer(currentPlayer){

    finalPlayer = currentPlayer;
    console.log(finalPlayer.score);

}


window.onload = function(){
    var buttonSendInfo = document.querySelector("#btn-sendInfo");
    buttonSendInfo.addEventListener("click", () => {setRecordPlayer(finalPlayer.score)});
}