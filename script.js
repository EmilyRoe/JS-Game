const gameContainer = document.querySelector(".game-container");
const skyElement = document.querySelector(".sky");
const treesElement = document.querySelector(".trees");
const groundElement = document.querySelector(".ground");
const avatar = document.querySelector(".avatar");

let avatarBottomPosition = 0;
let avatarLeftPosition = 20;
let gravity = 4;
let obstacleRightPosition = 0;

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
    if (obstacleRightPosition === 95 && avatarBottomPosition === 0 && avatarLeftPosition === 20 ) {
        currentNumber = currentNumber - 1;
        score.innerHTML = currentNumber;
    }
}

setInterval(decreaseScore, 150);

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowUp") {
        increaseScore()
    }
})

// const loseGame = () => {
//     querySelector score
//     if(currentNumber = -10) {
//        // change display on you lose message to not be hidden when score = -10
//         alert("You lose message");
//     }
// }

// Restart button - this should appear with you lose message
// const restartButton = document.querySelector(".restart-button")
// restartButton.addEventListener("click", () => {
//     //Need to get it to open welcome page with start button
//     alert(welcomePage);
// })


//Welcome page and start button
//const startButton = document.querySelector(".start-button")
//startButton.addEventListener("click", () => {
    //onclick(remove ".welcome-page")
//})