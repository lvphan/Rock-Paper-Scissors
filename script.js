let selection = document.querySelectorAll(".playerChoice");

selection.forEach(button => {

    button.addEventListener("click", startRound);
});

let player = document.getElementById("player");
let computer = document.getElementById("computer");

let playerScore = 0;
let computerScore = 0;

let playerScoreDiv = document.getElementById("playerScore");
let computerScoreDiv = document.getElementById("computerScore");

let hands = ["👊", "✋", "✌️"];

function startRound() {

    let computerChoice = Math.floor(Math.random() * 3);

    player.textContent = `Player: ${this.textContent}`;
    computer.textContent = "Computer: " + hands[computerChoice];

    if (this.textContent === "👊") {

        if (computerChoice === 1) { //✋
            computerScore++;
        } else if (computerChoice === 2) {
            playerScore++;
        }

    } else if (this.textContent === "✋") {

        if (computerChoice === 0) {
            playerScore++;
        } else if (computerChoice === 2) {
            computerScore++;
        }

    } else {

        if (computerChoice === 0) {
            computerScore++;
        } else if (computerChoice === 1) {
            playerScore++;
        }

    }

    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;

}

let end = document.getElementById("end");
end.addEventListener("click", endGame);

function endGame() {

    if (playerScore > computerScore) {
        alert("Player Wins!");
        player.textContent = 'Player: WINNER';
        computer.textContent = 'Computer: LOSER';
    } else if (computerScore > playerScore) {
        alert("Computer Wins!")
        player.textContent = 'Player: LOSER';
        computer.textContent = 'Computer: WINNER';
    } else if (playerScore === computerScore) {
        alert("Tie :(");
        player.textContent = 'Player: TIE';
        computer.textContent = 'Computer: TIE';
    } else {
        alert("Did you start yet?");
    }

}

let reset = document.getElementById("reset")
reset.addEventListener("click", resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    player.textContent = `Player: ` + hands[0];
    computer.textContent = "Computer: " + hands[0];

    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}
