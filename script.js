const gameContainer = document.querySelector(".game-container");
const skyElement = document.querySelector(".sky");
const treesElement = document.querySelector(".trees");
const groundElement = document.querySelector(".ground");
const avatar = document.querySelector(".avatar");
const loseGame = document.querySelector (".loseGame");
const startGame = document.querySelector(".start-button");
const welcomePage = document.querySelector(".welcome-page");

let avatarBottomPosition = 0;
let avatarLeftPosition = 20;
let gravity = 4;
let obstacleRightPosition = 0;
let isGameRunning = false;

const initiateAvatar = () => {
    avatarBottomPosition -= gravity;
    avatar.style.bottom = avatarBottomPosition + "px";
    if (avatarBottomPosition < 0) {
        avatarBottomPosition = 0;
    }
};

const moveAvatarUp = () => {
    avatar.style.bottom = avatarBottomPosition + "px";
    avatarBottomPosition += 125;
};

const generateObstacle = () => {
    obstacleRightPosition = 0;
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacles");
    gameContainer.appendChild(obstacle);
    obstacle.style.right = obstacleRightPosition + "px";
    obstacle.style.bottom = 0 + "px";
    console.log(obstacle);
}
const moveObstacle = () => {
    if(isGameRunning === false) {
        return
    }
    const obstacle = document.querySelector(".obstacles")
    obstacle.style.right = obstacleRightPosition + '%';
    obstacleRightPosition += 1;
    if (obstacleRightPosition > 97) {
        removeObstacle(obstacle);
        generateObstacle();
    }
}

const removeObstacle = () => {
    const obstacle = document.querySelector(".obstacles")
    obstacleRightPosition = 0;
    gameContainer.removeChild(obstacle)
}

setInterval(moveObstacle, 150);
generateObstacle();

setInterval(initiateAvatar, 50);

document.addEventListener("keydown", () => {
    moveAvatarUp();
});

let currentNumber = 0;

const score = document.querySelector (".score")
const increaseScore = () => {
    if(obstacleRightPosition > 85) {
            currentNumber = currentNumber + 1;  
            score.innerHTML = currentNumber;
    } 
}

const decreaseScore = () => {
    if(isGameRunning === false) {
        return
    }
    if (obstacleRightPosition === 95 && avatarBottomPosition === 0 && avatarLeftPosition === 20 ) {
        currentNumber = currentNumber - 1;
        score.innerHTML = currentNumber;
        checkForGameOver()
    }
}

setInterval(decreaseScore, 150);

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowUp") {
        increaseScore()
    }
})

//loseMessage
const checkForGameOver = () => {
    console.log(loseGame)
    if(currentNumber === -2) {
        loseGame.classList.remove("hidden")
        isGameRunning = false
    }
}

//Restart button 
const restartButton = document.querySelector(".restart-button")
restartButton.addEventListener("click", () => {
    loseGame.classList.add("hidden")
    welcomePage.classList.remove("hidden")
})

//Welcome page and start button
startGame.addEventListener("click", () => {
    isGameRunning = true
    welcomePage.classList.add("hidden")
    currentNumber = 0;
    score.innerHTML = 0;
})


