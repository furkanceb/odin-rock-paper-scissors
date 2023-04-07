
function  getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*3);
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

const playerSelection=prompt("Enter your selection(Rock/Paper/Scissors):)");
const computerSelection=getComputerChoice();


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