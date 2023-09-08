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
        return "You lose :(";
    } else {
        return "You win! :)";
    }
}

function game() {
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
        const computerSelection = getComputerChoise();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    return "Call the function game() again to play again :)"
}

// const playerSelection = "rock"; //Change this to user input later
// const computerSelection = getComputerChoise();
// console.log(playRound(playerSelection, computerSelection));