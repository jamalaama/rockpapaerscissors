let playerScore = 0
let computerScore = 0
document.getElementById('playerScore').innerHTML = playerScore
document.getElementById('computerScore').innerHTML = computerScore

function computerSelection(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection){
    if ((playerSelection == 'rock' && computerSelection() == 'scissors') ||
        (playerSelection == 'paper' && computerSelection() == 'rock') ||
        (playerSelection == 'scissors' && computerSelection() == 'paper')) {
        document.getElementById('result').innerHTML = "You won!";
        ++playerScore;
        }
    else if ((playerSelection == 'rock' && computerSelection() == 'paper') ||
        (playerSelection == 'paper' && computerSelection() == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection() == 'rock')) {
        document.getElementById('result').innerHTML = "You lost!";
        ++computerScore;
    }
    else document.getElementById('result').innerHTML = "It\'s a tie!";

    document.getElementById('playerScore').innerHTML = playerScore
    document.getElementById('computerScore').innerHTML = computerScore

    gameOver(playerScore, computerScore);
}

function gameOver(a,b){
    const game = document.querySelector('.result');
    const kill = document.querySelector('html');
    const title = document.querySelector('h1');
    if (a >= 5 && b < 5){
        document.getElementById('result').innerHTML = "Game Over! You Won! Reload to try again!";
        kill.style.cssText = 'background: black; color: black;'
        game.style.cssText = 'background: white; color: green';
        title.style.color = 'white';
    }
    else if (b >= 5 && a < 5){
        document.getElementById('result').innerHTML = "Game Over! You Lost! Reload to try again!";
        kill.style.cssText = 'background: black; color: black;'
        game.style.cssText = 'background: white; color: red';
        title.style.color = 'white';
    }
}