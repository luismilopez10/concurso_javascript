export function initialDom(){
    let statusAlert = document.createElement("h1");
    statusAlert.id = "statusAlert";
    statusAlert.classList.add("rounded");
    statusAlert.classList.add("justify-content-center");
    statusAlert.classList.add("align-items-center");
    statusAlert.style.height = "200px";
    
    statusAlert.style.display = "none";
    let mainContainer = document.querySelector("#main-container");
    mainContainer.appendChild(statusAlert);
}


export function correctAnswerDOM(){
    let gameTitle = document.querySelector("#gamepage-title");
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");

    gameTitle.classList.replace("bg-primary", "bg-success");
    statusAlert.style.display = "flex";
    statusAlert.classList.add("bg-success");
    statusAlert.innerHTML = "Correct Answer! Prepare for the next level";
    divGameContainer.style.display = "none";

    hideGameElements();
    
    setTimeout(() => {
        divGameContainer.style.display = "inline-block";
        statusAlert.style.display = "none";
        statusAlert.classList.remove("bg-success");

        gameTitle.innerHTML = "Select the correct answer";
        gameTitle.classList.replace("bg-success", "bg-primary");
        showGameElements();
    }, 3000);
}

export function wrongAnswerDOM(){
    let gameTitle = document.querySelector("#gamepage-title");
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");

    gameTitle.innerHTML = "Wrong answer, you lose the current score.";
    gameTitle.classList.replace("bg-primary", "bg-danger");
    divGameContainer.style.display = "none";
    statusAlert.style.display = "flex";
    statusAlert.innerHTML = "Wrong answer! You lose your score. Try again!";
    statusAlert.classList.add("bg-danger");

    hideGameElements();
    setTimeout(() => {
        statusAlert.classList.remove("bg-warning");
        statusAlert.style.display = "none";
        window.location.href = "./home.html";  
    }, 3000);
}

export function showScore(score){
    let scoreDisplay = document.createElement("h4");
    let gameHeader = document.querySelector("#game-header");
    scoreDisplay.id = "score-display";
    scoreDisplay.innerHTML = score;
    scoreDisplay.style.marginTop = "20px";
    scoreDisplay.style.display = "inline-block";
    gameHeader.appendChild(scoreDisplay);
}

export function updateShowScoreLevel(score, level){
    let scoreDisplay = document.querySelector("#score-display");
    let levelDisplay = document.querySelector("#level-display");
    scoreDisplay.innerHTML = score;
    levelDisplay.innerHTML = level;
}

export function showLevel(level) {
    let levelDisplay = document.createElement("h4");
    let gameHeader = document.querySelector("#game-header");
    levelDisplay.id = "level-display";
    levelDisplay.innerHTML = level;
    levelDisplay.style.marginTop = "20px";
    levelDisplay.style.display = "inline-block";
    gameHeader.appendChild(levelDisplay);
}

function hideGameElements(){
    let question = document.querySelector("#questionField");
    let options = document.querySelector("#options-container");
    let sendBtn = document.querySelector("#btnSend");
    let giveUpBtn = document.querySelector("#btnGiveUp");
    
    question.style.display = "none";
    options.style.display = "none";
    sendBtn.style.display = "none";
    giveUpBtn.style.display = "none";
}

function showGameElements(){
    let question = document.querySelector("#questionField");
    let options = document.querySelector("#options-container");
    let sendBtn = document.querySelector("#btnSend");
    let giveUpBtn = document.querySelector("#btnGiveUp");

    question.style.display = "block";
    options.style.display = "block";
    sendBtn.style.display = "inline-block";
    giveUpBtn.style.display = "inline-block";
}



