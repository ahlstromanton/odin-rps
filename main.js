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


function playRound(playerSelection, computerSelection) {
    // All tie cases
    if (
        (computerSelection = "Rock" && playerSelection = "Rock") || (computerSelection = "Paper" && playerSelection = "Paper") || (computerSelection = "Scissors" && playerSelection = "Siccors")
    ) {
        console.log("Tie!");
    }
    // All player win cases
    else if (
        computerSelection = "Rock"
    )
}