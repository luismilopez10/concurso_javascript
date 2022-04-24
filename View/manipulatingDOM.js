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
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");

    statusAlert.style.display = "flex";
    statusAlert.classList.add("bg-success");
    statusAlert.innerHTML = "Correct Answer! Prepare for the next level";
    divGameContainer.style.display = "none";

    
    setTimeout(() => {
        divGameContainer.style.display = "inline-block";
        statusAlert.style.display = "none";
        statusAlert.classList.remove("bg-success");

    }, 3000);
}

export function wrongAnswerDOM(){
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");

    divGameContainer.style.display = "none";
    statusAlert.style.display = "flex";
    statusAlert.innerHTML = "Wrong answer! You lose your score. Try again!";
    statusAlert.classList.add("bg-danger");

    setTimeout(() => {
        statusAlert.classList.remove("bg-danger");
        statusAlert.style.display = "none";
        window.location.href = "./home.html";  
    }, 3000);
}

export function completeGameDOM(){
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");
    divGameContainer.style.display = "none";
    statusAlert.style.display = "flex";
    statusAlert.innerHTML = "You won the game! Make sure you keep your score!";
    statusAlert.classList.add("bg-warning");

    setTimeout(() => {
        statusAlert.classList.remove("bg-warning");
        statusAlert.style.display = "none";
        window.location.href = "./saveRecord.html";  
    }, 3000);
}

export function giveUpDOM(){
    let statusAlert = document.querySelector("#statusAlert");
    let divGameContainer = document.querySelector("#game-container");
    divGameContainer.style.display = "none";
    statusAlert.style.display = "flex";
    statusAlert.innerHTML = `You gave up, your score is ${sessionStorage.getItem("playerScore")}`;
    statusAlert.classList.add("bg-info");
    setTimeout(() => {
        statusAlert.classList.remove("bg-info");
        statusAlert.style.display = "none";
        window.location.href = "./saveRecord.html";  
    }, 3000);
}

export function showScore(score){
    let scoreDisplay = document.createElement("h4");
    let gameHeader = document.querySelector("#game-header");
    scoreDisplay.id = "score-display";
    scoreDisplay.innerHTML = score;
    scoreDisplay.style.marginTop = "20px";
    scoreDisplay.style.display = "inline-block";
    // scoreDisplay.style.marginLeft = "15vw";
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
    // levelDisplay.style.marginRight = "15vw";
    gameHeader.appendChild(levelDisplay);
}



