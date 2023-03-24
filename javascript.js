let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let playerWin = 0;
let computerWin = 0;
let roundNumber = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];

  let computerChoice = choice[Math.floor(Math.random() * choice.length)];

  return computerChoice;
}

function getPlayerChoice() {
  let choice = ["rock", "paper", "scissors"];

  let playerChoice = prompt("Type rock, paper, or scissors for your choice: ");

  if (playerChoice !== null) {
    if (choice.includes(playerChoice.toLowerCase())) {
      console.log("You chose: " + playerChoice.toLowerCase());
      return playerChoice;
    } else {
      console.log("Invalid choice.");
    }
  } else {
    console.log("Cancelled.");
  }
}

function playRound(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        console.log("You win!");
        return playerWin++;
      } else if (computerChoice === "paper") {
        console.log("Computer wins!");
        return computerWin++;
      } else
        break;
    case "paper":
      if (computerChoice === "scissors") {
        console.log("Computer wins!");
        return computerWin++;
      } else if (computerChoice === "rock") {
        console.log("You win!");
        return playerWin++;
      } else
        break;
    case "scissors":
      if (computerChoice === "rock") {
        console.log("Computer wins!");
        return computerWin++;
      } else if (computerChoice === "paper") {
        console.log("You win!");
        return playerWin++;
      } else
        break;
    default:
      console.log("You tied.");
      break;
  }

}

function game() {


}