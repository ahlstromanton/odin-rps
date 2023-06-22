// Generate a random computer choise

function getComputerChoise() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return ("rock");
            break;
        case 1:
            return ("paper");
            break;
        case 2:
            return ("scissors");
            break;
    }
}
// Determine tie, win or loss

// Note: You could probably refactor this even further, for example to use comparisions better ("if (playerSelection == computerSelection), tie") etc. Maybe assin an integrer to each choise to easier keep track and determine if a choise is a win or loss?

function playRound() {
    computerSelection = getComputerChoise();
    userinput = prompt("Choose Rock, Paper or Scissors!");
    let playerSelection = userinput.toLowerCase();
    // Lowercase players input. Not sure if this works, if bugs, start here


    // Handle all cases where computer selects "Rock"
    if (computerSelection == "rock") {
        if (playerSelection == "rock") {
            return ("Tie!");
        }
        else if (playerSelection = "scissors") {
            return ("You lost!");
        }
        else {
            return ("You won!");
        }
    }
    // Handle all cases where compute selects "Paper"
    else if (computerSelection == "paper") {
        if (playerSelection == "paper") {
            return ("Tie!");
        }
        else if (playerSelection == "rock") {
            return ("You lost!");
        }
        else {
            return ("You won!");
        }
    }
    // Handle all cases where computer selects "Scissors"
    else if (computerSelection == "scissors") {
        if (playerSelection == "scissors") {
            return ("Tie!");
        }
        else if (playerSelection == "paper") {
            return ("You won!");
        }
        else {
            return ("You lost!");
        }
    }
    // Handle misspellings, etc.
    else {
        return ("Please choose Rock, Paper or Scissors");
    }
    console.log(playerSelection, computerSelection);
}

function game() {
    let numberOfRoundsPlayed = 0;
    while (numberOfRoundsPlayed < 5) {
        playRound();
        console.log(playRound() + " Computer choose " + computerSelection);
        numberOfRoundsPlayed++;
    }
}