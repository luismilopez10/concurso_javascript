
export function correctAnswerDOM(){
    let gameTitle = document.querySelector("#gamepage-title");
    gameTitle.innerHTML = "You got the correct answer! Prepare for the next level!";
    gameTitle.classList.replace("bg-primary", "bg-success");
    hideGameElements();
    
    setTimeout(() => {
        gameTitle.innerHTML = "Select the correct answer";
        gameTitle.classList.replace("bg-success", "bg-primary");
        showGameElements();
    }, 2000);
}

export function wrongAnswerDOM(){
    let gameTitle = document.querySelector("#gamepage-title");
    gameTitle.innerHTML = "Wrong answer, you lose the current score.";
    gameTitle.classList.replace("bg-primary", "bg-danger");
    hideGameElements();
    setTimeout(() => {
        gameTitle.innerHTML = "Try again!";
        gameTitle.classList.replace("bg-danger", "bg-primary");
        showGameElements();
    }, 2000);
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

