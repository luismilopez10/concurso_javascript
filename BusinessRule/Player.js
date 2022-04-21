//Constructor Player class
function Player(name, score) {
    this.name = name;
    this.score = score
}

function getScore(){
    
}

function getRecordPlayer(score) {
    if (score === undefined) {
        score = 0
    }

    var data = document.getElementsByName('Username')[0].value 
        
    if(data.length < 3) {
        data = 'aaa'
    }

    let players = new Player(data,score)
    
    var total = "EL usuario ingresado es " + players.name + ". Puntaje total: " + players.score

    alert(total)

    var record = [players.name, players.score]

    return console.log(record)
}







