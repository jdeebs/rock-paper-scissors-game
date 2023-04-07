const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let resultDiv = document.querySelector('#resultDiv');
let scoreDiv = document.querySelector('#scoreDiv');

let playerWin = 0;
let computerWin = 0;
let roundNumber = 0;

rock.addEventListener('click', () => {
  resultDiv.innerHTML = "";

  if (roundNumber === 0) {
    scoreDiv.innerHTML = "";
  }

  updateGame("Rock");
});

paper.addEventListener('click', () => {
  resultDiv.innerHTML = "";

  if (roundNumber === 0) {
    scoreDiv.innerHTML = "";
  }

  updateGame("Paper");
});

scissors.addEventListener('click', () => {
  resultDiv.innerHTML = "";

  if (roundNumber === 0) {
    scoreDiv.innerHTML = "";
  }

  updateGame("Scissors");
});

function updateGame(playerChoice) {
  roundNumber++;
  let textNode = document.createElement('p');
  textNode.textContent = `You chose: ${playerChoice}`;
  resultDiv.appendChild(textNode);
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  getScore();
}

function getScore() {
  let textNode = document.createElement('p');
  textNode.textContent = `Round ${roundNumber}.\nThe score is:\nComputer: ${computerWin}\nPlayer: ${playerWin}`;
  scoreDiv.appendChild(textNode);

  if (roundNumber === 5) {
    let textNode = document.createElement('p');
    textNode.textContent = "GAME OVER";
    resultDiv.appendChild(textNode);
    let brElement = document.createElement('br');
    resultDiv.appendChild(brElement);
    
    if (computerWin > playerWin) {
      let textNode = document.createElement('p');
      textNode.textContent = "You lost the game. Better luck next time!";
      resultDiv.appendChild(textNode);
    } else if (playerWin > computerWin) {
      let textNode = document.createElement('p');
      textNode.textContent = "You won the game! Congrats!";
      resultDiv.appendChild(textNode);
    } else if (roundNumber !== 5) {
        let textNode = document.createElement('p');
        textNode.textContent = "";
        resultDiv.appendChild(textNode);
    } else {
      let textNode = document.createElement('p');
      textNode.textContent = "You tied the game!";
      resultDiv.appendChild(textNode);
    }
    roundNumber = 0;
    playerWin = 0;
    computerWin = 0;
  }
}

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];

  let computerChoice = choice[Math.floor(Math.random() * choice.length)];

  let textNode = document.createElement('p');
  textNode.textContent = `Computer chose: ${computerChoice}`;
  resultDiv.appendChild(textNode);

  return computerChoice;
}

function playRound(playerChoice, computerChoice) {

  if (roundNumber >= 5) {
    resultDiv.textContent = "";
  }

  switch (playerChoice) {
    case "Rock":
      if (computerChoice === "Scissors") {
        let textNode = document.createElement('p');
        textNode.textContent = "You win! Rock beats scissors";
        resultDiv.appendChild(textNode);
        return playerWin++;
      } else if (computerChoice === "Paper") {
        let textNode = document.createElement('p');
        textNode.textContent = "Computer wins! Paper beats rock";
        resultDiv.appendChild(textNode);
        return computerWin++;
      } else {
        let textNode = document.createElement('p');
        textNode.textContent = "You tied!";
        resultDiv.appendChild(textNode);
      }
      break;
    case "Paper":
      if (computerChoice === "Scissors") {
        let textNode = document.createElement('p');
        textNode.textContent = "Computer wins! Scissors beats paper";
        resultDiv.appendChild(textNode);
        return computerWin++;
      } else if (computerChoice === "Rock") {
        let textNode = document.createElement('p');
        textNode.textContent = "You win! Paper beats rock";
        resultDiv.appendChild(textNode);
        return playerWin++;
      } else {
        let textNode = document.createElement('p');
        textNode.textContent = "You tied!";
        resultDiv.appendChild(textNode);
      }
      break;
    case "Scissors":
      if (computerChoice === "Rock") {
        let textNode = document.createElement('p');
        textNode.textContent = "Computer wins! Rock beats scissors";
        resultDiv.appendChild(textNode);
        return computerWin++;
      } else if (computerChoice === "Paper") {
        let textNode = document.createElement('p');
        textNode.textContent = "You win! Scissors beat paper";
        resultDiv.appendChild(textNode);
        return playerWin++;
      } else {
        let textNode = document.createElement('p');
        textNode.textContent = "You tied!";
        resultDiv.appendChild(textNode);
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



