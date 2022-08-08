

function getComputerChoice(){
    let rndInt = Math.floor(Math.random()*3+1)
    if(rndInt===1){return "rock";}
    else if(rndInt===2){return "paper";}
    else{return "scissors";}
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
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
let printOut = "You " + roundResult + "! " + playerSelection + " vs " + computerSelection + "."
console.log(printOut);
return roundResult;
}

function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for(let i=0; i<5; i++){
        let result = playRound(playerSelection, computerSelection);
        switch (result){
            case "win": win++; break;
            case "lose": lose++; break;
            case "tie": tie++; break;
        }
    }
    let scoreboard = "Wins: " + win + "   Losses: " + lose + "   Ties: " + tie;
    console.log(scoreboard);
}

let computerSelection;
let playerSelection;
game();