let playerScore = 0
let computerScore = 0
let drawScore = 0
const playerWin = 'Player wins the game!'
const computerWin = 'Computer wins the game!'
const selectionButtons = document.querySelectorAll('[data-selection]');

//the scores will tally
// the round end summary at the bottom will appear

function computerPlay() {
    const gameItems = ['Rock', 'Paper', 'Scissors'];
    const gameItem = gameItems[Math.floor(Math.random() * gameItems.length)];
    // console.log(gameItems[Math.floor(Math.random() * gameItems.length)])
    // console.log(gameItem)
    return gameItem;
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        playerSelection(selectionName);
    })
});

function playerSelection(selection) {
    const computerSelection = computerPlay().toLowerCase();   //returns random rock, paper or scissors
    // console.log(selection);
    // console.log(computerSelection);
    if (selection == computerSelection) {
        document.querySelector('.roundOutcome').innerText = 'Tie Round!';
        // return console.log(drawRound);
    } else if (
        (selection == 'rock' && computerSelection == 'scissors') ||
        (selection == 'paper' && computerSelection == 'rock') ||
        (selection == 'scissors' && computerSelection == 'paper')
    ) { document.querySelector('.roundOutcome').innerText = 'Player wins the round!';
        document.querySelector('.playerScore').innerText = playerScore++;
        // return console.log(playerRound);
    } else {
        document.querySelector('.roundOutcome').innerText = 'Computer wins the round!';
        document.querySelector('.computerScore').innerText = computerScore++;
        // return console.log(computerRound);
    }
}
console.log (playerSelection(selection)) // tests if function is working

 function talliedScore(result) {
     if (result == playerRound) {
         playerScore++;
     } else if (result == computerRound) {
         computerScore++;
     } else {
         drawScore++;
     }
    //  if (playerScore === 5) {
    //      console.log(playerWin);
    //  } else if (computerScore === 5) {
    //      console.log (computerWin);
    //  }
 }