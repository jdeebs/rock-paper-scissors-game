let playerWin = 0;
let computerWin = 0;
let roundNumber = 1;

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
        console.log("You win! rock beats scissors");
        return playerWin++;
      } else if (computerChoice === "paper") {
        console.log("Computer wins! paper beats rock");
        return computerWin++;
      } else {
        console.log("You tied.");
      }
        break;
    case "paper":
      if (computerChoice === "scissors") {
        console.log("Computer wins! scissors beats paper");
        return computerWin++;
      } else if (computerChoice === "rock") {
        console.log("You win! paper beats rock");
        return playerWin++;
      } else {
        console.log("You tied.");
      }
        break;
    case "scissors":
      if (computerChoice === "rock") {
        console.log("Computer wins! rock beats scissors");
        return computerWin++;
      } else if (computerChoice === "paper") {
        console.log("You win! scissors beat paper");
        return playerWin++;
      } else {
        console.log("You tied.");
      }
        break;
    default:
      console.log("Unknown Error.");
      break;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    playRound(playerChoice, computerChoice);
    console.log(`Round ${roundNumber}.\nThe score is:\nComputer: ${computerWin}\nPlayer: ${playerWin}`);
    roundNumber++;
  }
}

game();