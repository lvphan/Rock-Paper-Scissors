let buttons = document.querySelectorAll(".playerChoice");

buttons.forEach(button => {

  button.addEventListener("click", startRound);
});

let player = document.getElementById("player");
let computer = document.getElementById("computer");

let playerScore = 0;
let computerScore = 0;

let playerScoreDiv = document.getElementById("playerScore");
let computerScoreDiv = document.getElementById("computerScore");

let hands = ["👊", "✋","✌️"];

function startRound() {

  let computerChoice = Math.floor(Math.random() * 3);

  player.textContent = `Player: ${this.textContent}`;
  computer.textContent = "Computer: " + hands[computerChoice];

  if (this.textContent === "👊") {

    if (computerChoice === 1) { //✋
        computerScore++;
    } 
    else if (computerChoice === 2) {
        playerScore++;
    }
   
  } 
  
  else if (this.textContent === "✋") {

    if (computerChoice === 0) {
      playerScore++;
    } 
    else if (computerChoice === 2) {
      computerScore++;
    }

  } 
  
  else {

    if (computerChoice === 0) {
      computerScore++;
    } 
    else if (computerChoice === 1) {
      playerScore++;
    }
  
  }

  playerScoreDiv.textContent = `Player: ${playerScore}`;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;

}