//Constructor Player class
function Player(name, score) {
    this.name = name;
    this.score = score
}

function getRecordPlayer(name, score) {
    if (score === undefined) {
        score = 0
    }

    let players = new Player(name, score)

    var data = document.getElementsByName('Username')[0].value

    if(data.length < 2) {
        data = 'aaa'
    }

    players.name = data
    players.score = score

    var total = "EL usuario ingresado es " + players.name + ". Puntaje total: " + players.score

    alert(total)
    

}