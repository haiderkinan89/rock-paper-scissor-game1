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
    
    // Reset message
    msg.innerHTML = "Play your move";
    msg.style.backgroundColor = "rgb(36, 35, 35)";
});

// Selecting all game choices (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Message display element - FIXED SELECTOR
const msg = document.querySelector("#msg");  // Changed from ".msg-container" to "#msg"

// Generate random choice for computer
const genCompChoice = () => {
    // FIXED: Changed "Papper" to "paper" to match HTML ID
    const options = ["rock", "paper", "scissors"];  // Lowercase to match HTML IDs
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function to handle draw condition
const drawGame = () => {
    msg.innerHTML = "Game was a draw!";
    msg.style.backgroundColor = "rgba(35, 35, 36, 1)";
};

// Function to show winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerHTML = userScore;

        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerHTML = compScore;

        msg.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`;
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

        // Game rules logic - FIXED: Use lowercase to match new IDs
        if (userChoice === 'rock') {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else { // scissors
            userWin = compChoice === "rock" ? false : true;
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