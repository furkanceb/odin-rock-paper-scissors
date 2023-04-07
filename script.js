
function  getComputerChoice(){
    const randomNumber= Math.floor(Math.random()*3);
    let computerSelection;
    
    switch(randomNumber){
    
        case 0:
        computerSelection="Rock";
        break;
        
        case 1:
        computerSelection="Paper";
        break;
        
        case 2:
        computerSelection="Scissors"
        break;    
    }
    return computerSelection;
}

function getPlayerChoice(){
let playerSelection=prompt("Enter your selection(Rock/Paper/Scissors):)");

playerSelection=playerSelection.toLowerCase();
playerSelection=playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
return playerSelection;
}

const computerSelection=getComputerChoice();
const playerSelection=getPlayerChoice();

function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection===computerSelection){
        console.log("Draw")
    }
    else  if (playerSelection==="Rock" && computerSelection==="Scissors" || playerSelection==="Paper" && computerSelection==="Rock" || playerSelection==="Scissors" && computerSelection==="Paper"){
        console.log("Player won")
    }

    else{
        console.log("Computer won")
    }
}

console.log(computerSelection)
playRound(playerSelection,computerSelection)