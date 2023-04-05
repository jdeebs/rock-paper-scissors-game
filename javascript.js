const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerWin = 0;
let computerWin = 0;
let roundNumber = 1;

rock.addEventListener('click', () => {
    let playerChoice = "rock";
    console.log('You chose: Rock');
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });

paper.addEventListener('click', () => {
  let playerChoice = "paper";
  console.log('You chose: Paper');
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

scissors.addEventListener('click', () => {
  let playerChoice = "scissors";
  console.log('You chose: Scissors');
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

  function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
  
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];

    console.log("Computer chose: " + computerChoice.toLowerCase());
  
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

  if (computerWin > playerWin) {
    console.log("You lost the game. Better luck next time!");
  } else if (playerWin > computerWin) {
    console.log("You won the game! Congrats!");
  } else {
    console.log("You tied the game!");
  }

