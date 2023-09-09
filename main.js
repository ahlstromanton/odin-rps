let playerScore = 0;
let computerScore = 0;

function getComputerChoise() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    if (randomNumber == 0) {
        computerSelection = "Rock";
    }
    else if (randomNumber == 1) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return computerScore++, playerScore++;
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        return computerScore++;
    } else {
        return playerScore++;
    }
}

function game() {
    const computerSelection = getComputerChoise();
    playRound(playerSelection, computerSelection);
    showScores();
    showOutcome(playerSelection, computerSelection);
}

function showScores() {
    const userScoreFrontend = document.querySelector('#userScoreFrontend');
    userScoreFrontend.textContent = playerScore;
    const computerScoreFrontend = document.querySelector('#computerScoreFrontend');
    computerScoreFrontend.textContent = computerScore;
}

function showOutcome(playerSelection, computerSelection) {
    const playerChoise = document.querySelector('#playerChoise')
    playerChoise.textContent = playerSelection;
    const computerChoise = document.querySelector('#computerChoise')
    computerChoise.textContent = computerSelection;
}


const rockBtn = document.querySelector('.buttons #rock');
rockBtn.onclick = () => {
    playerSelection = "rock";
    game(playerSelection);
}

const paperBtn = document.querySelector('.buttons #paper');
paperBtn.onclick = () => {
    playerSelection = "paper";
    game(playerSelection);
}

const scissorsBtn = document.querySelector('.buttons #scissors');
scissorsBtn.onclick = () => {
    playerSelection = "scissors";
    game(playerSelection);
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    showScores(playerScore, computerScore);
    showOutcome();
})

