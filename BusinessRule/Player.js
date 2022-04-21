// //Constructor Player class
// export function Player(score) {
//     let name = "";
//     this.score = score;
// }

// Player.prototype.updatePlayerScore = function(updatedScore){
//     this.score += updatedScore;
// }

// Player.prototype.setName = function(userName) {
//     this.name = userName;
// }

import{ Player } from "./mdlPlayer.js"

export function setRecordPlayer(score) {
    // if (score === undefined) {
    //     score = 0
    // }

    // var data = document.getElementsByName('Username')[0].value 
        
    // if(data.length < 3) {
    //     data = 'aaa'
    // }

    // let players = new Player(data,score)
    
    // var total = "EL usuario ingresado es " + players.name + ". Puntaje total: " + players.score

    // alert(total)

    // var record = [players.name, players.score]

    // return console.log(record)
    console.log(`El puntaje es ${score}`)
}







