function getComputerChoice(){
    let rndInt = Math.floor(Math.random()*3+1)
    if(rndInt===1){return "rock";}
    else if(rndInt===2){return "paper";}
    else{return "scissors";}
}


  

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    //playerSelection = prompt("Rock, Paper, or Scissors?");
    //playerSelection = playerSelection.toLowerCase();
    let roundResult;
if(computerSelection==="rock"){
    if(playerSelection==="rock"){
        roundResult="tie"
    }else if(playerSelection==="paper"){
        roundResult="win"
    }else{roundResult="lose"}
    } else if (computerSelection==="paper"){
    if(playerSelection=="rock"){
        roundResult="lose"
    }else if(playerSelection==="paper"){
        roundResult="tie"
    }else{roundResult="win"}
    } else {
    if(playerSelection==="rock"){
        roundResult="win"
    }else if(playerSelection==="paper"){
        roundResult="lose"
    }else{roundResult="tie"}
}
const  roundPrintout = document.querySelector('#roundPrintout');
const printResult = document.createElement('h2');
printResult.classList.add('printResult');
let printOut = "You " + roundResult + " this round! " + playerSelection + " vs " + computerSelection + "."
printResult.textContent = printOut;
roundPrintout.appendChild(printResult);
console.log(printOut);
return roundResult;
}

function gameEnd(gameResult){
    const gameOver = document.querySelector('#gameOver');
    const gamePrintout = document.createElement('h1');
    gamePrintout.classList.add('gamePrintout');
    gamePrintout.textContent = 'Game Over! You ' + gameResult + '!';
    gameOver.appendChild(gamePrintout);
}

function game() {
    //for(let i=0; i<5; i++){
        let result = playRound(playerSelection, computerSelection);
        switch (result){
            case "win": win++; break;
            case "lose": lose++; break;
            case "tie": tie++; break;
        }
    //}
    updateScoreboard();
    if(win===5 || lose===5){
        let gameResult="lose";
        if(win===5){gameResult = "win";}
        gameEnd(gameResult);}
}

function makeScoreboard(){
    const scoreboard = document.querySelector('#scoreboard');
    const score = document.createElement('h2');
    score.classList.add('score');
    let currentScore = "Wins: " + win + "   Losses: " + lose + "   Ties: " + tie;
    score.textContent =  currentScore;
    scoreboard.appendChild(score);
    console.log(currentScore);
}

function updateScoreboard(){
    const scoreboard = document.querySelector('#scoreboard');
    const newScore = document.createElement('h2');
    const score = document.querySelector('.score');
    newScore.classList.add('score');
    let currentScore = "Wins: " + win + "   Losses: " + lose + "   Ties: " + tie;
    newScore.textContent =  currentScore;
    scoreboard.replaceChild(newScore, score);
    console.log(currentScore);
}

let computerSelection;
let playerSelection;
let win = 0;
let lose = 0;
let tie = 0;
makeScoreboard();
const selection = document.querySelector('.buttons');
selection.addEventListener('click', (e)=> {
    playerSelection = e.target.id;
    game();
})

/*
Website loads with buttons and template
-Scoreboard starts at 0 0 0
On button press, player selection is made
-computer selection is made after
-winner is determined
Scoreboard updates with match result
Another selection can be made until either player has reached 5 points
-New text appears announcing winner
*/