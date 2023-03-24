
function game() {
  let playerWin = 0;
  let computerWin = 0;
  let roundNumber = 1;
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();

  function getPlayerChoice(playerChoice, computerChoice) {
    let choice = ["rock", "paper", "scissors"];
  
    let playerChoice = prompt("Type rock, paper, or scissors for your choice: ");
  
    if (playerChoice !== null) {
      if (choice.includes(playerChoice.toLowerCase())) {
        console.log("You chose: " + playerChoice.toLowerCase());
        console.log("Computer chose: " + computerChoice.toLowerCase());
        return playerChoice;
      } else {
        console.log("Invalid choice.");
      }
    } else {
      console.log("Cancelled.");
    }
  }

  function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
  
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  
    return computerChoice;
  }
  
  function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          console.log("You win! Rock beats scissors");
          return playerWin++;
        } else if (computerChoice === "paper") {
          console.log("Computer wins! Paper beats rock");
          return computerWin++;
        } else {
          console.log("You tied.");
        }
          break;
      case "paper":
        if (computerChoice === "scissors") {
          console.log("Computer wins! Scissors beats paper");
          return computerWin++;
        } else if (computerChoice === "rock") {
          console.log("You win! Paper beats rock");
          return playerWin++;
        } else {
          console.log("You tied.");
        }
          break;
      case "scissors":
        if (computerChoice === "rock") {
          console.log("Computer wins! Rock beats scissors");
          return computerWin++;
        } else if (computerChoice === "paper") {
          console.log("You win! Scissors beat paper");
          return playerWin++;
        } else {
          console.log("You tied.");
        }
          break;
      default:
        if (playerChoice == null) {
          console.log("Cancelled.")
        } else {
        console.log("Unknown Error.");
        }
        break;
    }
  }
  
  for (let i = 0; i < 5; i++) {
    playRound(playerChoice, computerChoice);
    console.log(`Round ${roundNumber}.\nThe score is:\nComputer: ${computerWin}\nPlayer: ${playerWin}`);
    roundNumber++;
  }

  if (computerWin > playerWin) {
    console.log("You lost the game. Better luck next time!");
  } else if (playerWin > computerWin) {
    console.log("You won the game! Congrats!");
  } else {
    console.log("You tied the game!");
  }
}

game();