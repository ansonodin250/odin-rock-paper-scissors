function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return 'rock';
    }
    else if (random ===1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getUserChoice(){
    let userChoice = prompt('Rock, Paper or Scissors?');
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(playerSelection, computerSelection){
    let playerScore = 0;
    if (playerSelection === computerSelection){
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore = 1;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore = 1;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore = 1;
    }
    else{
        playerScore = -1;
    }
    return playerScore;
}

function game(){
    let roundResult;
    let score = 0;
    for (let round = 1; round<=5; round++){
        roundResult = playRound(getUserChoice(), getComputerChoice());
        if (roundResult == 1){
            score++;
            console.log(`Round ${round}: player takes this round`);
        }
        else if (roundResult == -1){
            score--;
            console.log(`Round ${round}: computer takes this round`);
        }
        else{
            console.log(`Round ${round}: its a tie this round`);
        }
    }

    if (score > 0){
        console.log('player wins the game');
    }
    else if (score < 0){
        console.log('computer wins the game');
    }
    else{
        console.log('the game is tied');
    }
}

game();
