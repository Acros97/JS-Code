import Ball from "./Ball.js"
import Paddle from "./Paddle.js"


// GETTING THE ELEMENTS
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const buttonStart = document.getElementById("start");
const panelMenu = document.getElementById("panelMenu");
const author = document.getElementById("author");

let isPanelStarVisible = true;

let lastTime
function update(time){ // Starting the game
    if(lastTime != null){
        const delta = time - lastTime;
        ball.update(delta, [playerPaddle.rect(),computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
        document.documentElement.style.setProperty("--hue", hue + delta * 0.01);
        if(isLose())
            handleLose();
    }

        lastTime = time;
        window.requestAnimationFrame(update);
}

function isLose(){
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
    const rect = ball.rect();
    if(rect.right >= window.innerWidth)
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
    else
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1;

    ball.reset();
    computerPaddle.reset();
}


//#region INPUT
document.addEventListener("mousemove", e => {
    if(!isPanelStarVisible)
        playerPaddle.position = (e.y / window.innerHeight) * 100;           
    });


document.addEventListener("click", e => {
        isPanelStarVisible = false;        
        author.style.display = "none";
        panelMenu.style.display = "none"; // Hidden menu
        window.requestAnimationFrame(update);
        
    });

document.addEventListener("keydown", y =>{
    if(y.key === "Enter"){
        isPanelStarVisible = false;
        
        author.style.display = "none";
        panelMenu.style.display = "none"; // Hidden menu
        window.requestAnimationFrame(update);
    }
});

//#endregion INPUT


