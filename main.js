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

// Should investigate how to nest conditions in an if statement, so that for example all tie cases could be covered within the first if statement
function playRound(playerSelection, computerSelection) {
    // Rock tie cases
    if (computerSelection == "Rock" && playerSelection == "Rock") {
        console.log("Tie!");
    }
    // Paper Tie Case
    else if (computerSelection == "Paper" && playerSelection == "Paper") {

    }
    // Scissors Tie Case
    else if (computerSelection == "Scissors" && playerSelection == "Scissors") {

    }
}