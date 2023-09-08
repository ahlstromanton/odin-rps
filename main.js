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

const rockbtn = document.querySelector('.buttons #rock');
rockbtn.onclick = () => {
    playerSelection = "rock";
    game(playerSelection);;
}

const paperbtn = document.querySelector('.buttons #paper');
paperbtn.onclick = () => {
    playerSelection = "paper";
    game(playerSelection);
}

const scissorsbtn = document.querySelector('.buttons #scissors');
scissorsbtn.onclick = () => {
    playerSelection = "scissors";
    game(playerSelection);
}

function game() {
    const computerSelection = getComputerChoise();
    playRound(playerSelection, computerSelection);
    console.log("Player picks: " + playerSelection);
    console.log("Computer picks: " + computerSelection);
    console.log("Current score: " + playerScore + " vs " + computerScore);
}


