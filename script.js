// User score variable
let userScore = 0;

// Computer score variable
let compScore = 0;

// Selecting score elements from DOM
const userScorepara = document.querySelector('#user-score');  
const compScorepara = document.querySelector('#comp-score');  

// Selecting reset button
const reset = document.querySelector("#reset");

// Reset button click event
reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    // Updating scores on UI
    userScorepara.innerHTML = userScore;
    compScorepara.innerHTML = compScore;
    
});

// Selecting all game choices (rock, paper, scissor)
const choices = document.querySelectorAll(".choice");

// Message display element
const msg = document.querySelector(".msg-container");

// Generate random choice for computer
const genCompChoice = () => {
    const options = ["Rock", "Papper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function to handle draw condition
const drawGame = () => {
    msg.innerHTML = "game was draw";
    msg.style.backgroundColor = "rgba(35, 35, 36, 1)";
};

// Function to show winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerHTML = userScore;

        msg.innerHTML = `You win, your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        
        compScorepara.innerHTML = compScore;

        msg.innerHTML = `You lose, ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main game logic function
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    // Check if game is draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        // Game rules logic
        if (userChoice === 'Rock') {
            userWin = compChoice === "Papper" ? false : true;
        } else if (userChoice === "Papper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }

        // Show final result
        showWinner(userWin, userChoice, compChoice);
    }
};

// Adding click event to each choice
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});