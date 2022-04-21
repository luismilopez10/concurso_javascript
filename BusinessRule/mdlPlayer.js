//Constructor Player class
export function Player(score) {
    let name = "";
    this.score = score;
}

Player.prototype.updatePlayerScore = function(updatedScore){
    this.score += updatedScore;
}

Player.prototype.setName = function(userName) {
    this.name = userName;
}