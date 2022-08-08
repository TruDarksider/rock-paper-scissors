

function getComputerChoice(){
    let rndInt = Math.floor(Math.random()*3+1)
    if(rndInt==1){return "rock";}
    else if(rndInt==2){return "paper";}
    else{return "scissors";}
}

function playRound(playerSelection, computerSelection){
if(computerSelection=="rock"){
    if(playerSelection=="rock"){
        return "tie"
    }else if(playerSelection=="paper"){
        return "lose"
    }else{return "win"}
    } else if (computerSelection=="paper"){
    if(playerSelection=="rock"){
        return "win"
    }else if(playerSelection=="paper"){
        return "tie"
    }else{return "lose"}
    } else {
    if(playerSelection=="rock"){
        return "lose"
    }else if(playerSelection=="paper"){
        return "win"
    }else{return "tie"}
}
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";

getComputerChoice();
console.log(playRound(playerSelection, computerSelection));