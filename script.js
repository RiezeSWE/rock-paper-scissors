let playerScore = 0
let computerScore = 0
const playerSelection = 'paper';
const computerSelection = computerPlay();
const playerWinRound = 'Player Wins!'
const computerWinRound = 'Computer Wins!'
const tieGame = 'Tie Game!'

function computerPlay() {
    const gameItems = ['Rock', 'Paper', 'Scissors'];
    const gameItem = gameItems[Math.floor(Math.random() * gameItems.length)];
    return gameItem;
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return tieGame;
    } 
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ){ return playerWinRound;
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
        ){ return computerWinRound;
    }
}

for (let i = 0; i < 1000; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    let game = playRound(playerChoice, computerSelection);
    console.log(game);
    gameScore(game)
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
 }
 
function gameScore(game) {
    if (game === playerWinRound) {
        playerScore++ ;
    } else {
        computerScore++;
    }
    
}