function getComputerChoise() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return ("Rock")
            break
        case 1:
            return ("Paper")
            break
        case 2:
            return ("Scissors")
    }
}


// A probably neater way to handle the above
function playRoundAlt(playerSelection, computerSelection) {
    // Handle all cases where computer selects "Rock"
    if (computerSelection == "Rock") {
        if (playerSelection == "Rock") {
            console.log("Tie!");
        }
        else if (playerSelection = "Scissors") {
            console.log("You lost!");
        }
        else {
            console.log("You won!");
        }
    }
    // Handle all cases where compute selects "Paper"
    else if (computerSelection == "Paper") {
        if (playerSelection == "Paper") {
            console.log("Tie!");
        }
        else if (playerSelection == "Rock") {
            console.log("You lost!");
        }
        else {
            console.log("You won!");
        }
    }
    // Handle all cases where computer selects "Scissors" (doesn't need to be explicitly typed out)
    else {
        if (playerSelection == "Scissors") {
            console.log("Tie!");
        }
        else if (playerSelection == "Paper") {
            console.log("You won!");
        }
        else {
            console.log("You lost!");
        }
    }
}