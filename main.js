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
        return "Tie!";
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

// TODO: Maybe handle tie better (dont count it to rounds?))
// TODO: Handle wrong input
function game() {
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
        const computerSelection = getComputerChoise();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    console.log("Final score was: " + "You: " + playerScore + " vs " + "Computer: " + computerScore);
    return "Call the function game() again to play again :)"
}

// const playerSelection = "rock"; //Change this to user input later
// const computerSelection = getComputerChoise();
// console.log(playRound(playerSelection, computerSelection));