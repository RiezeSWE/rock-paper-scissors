let playerScore = 0
let computerScore = 0
let drawScore = 0
let drawRound = 'Tie round!'
let playerRound = 'Player wins the round!'
let computerRound = 'Computer wins the round!'
let playerWin = 'Player wins the game!'
let computerWin = 'Computer wins the game!'

function computerPlay() {
    const gameItems = ['Rock', 'Paper', 'Scissors'];
    const gameItem = gameItems[Math.floor(Math.random() * gameItems.length)];
    // console.log(gameItems[Math.floor(Math.random() * gameItems.length)])
    // console.log(gameItem)
    return gameItem;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == computerSelection) {
        return drawRound;
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) { return playerRound;
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ) { return computerRound;
    }
  }
  
  for (let i = 0; i < 1000; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerChoice, computerSelection);
    console.log(result);
    talliedScore(result);
    console.log('Your score is ' + playerScore);
    console.log('The computer\'s score is ' + computerScore);
    if (
        (playerScore === 5) || (computerScore === 5)
    ) { break;
    }
 }

 function talliedScore(result) {
     if (result == playerRound) {
         playerScore++;
     } else if (result == computerRound) {
         computerScore++;
     } else {
         drawScore++;
     }
     if (playerScore === 5) {
         console.log(playerWin);
     } else if (computerScore === 5) {
         console.log (computerWin);
     }
 }