

function  getComputerChoice(){
    const randomNumber= Math.floor(Math.random()*3);
    let computerChoice;
    
    switch(randomNumber){
    
        case 0:
        computerChoice="Rock";
        break;
        
        case 1:
        computerChoice="Paper";
        break;
        
        case 2:
        computerChoice="Scissors"
        break;    
    }
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice=prompt("Enter your selection(Rock/Paper/Scissors):)");
    playerChoice=playerChoice.toLowerCase();
    playerChoice=playerChoice.replace(playerChoice[0],playerChoice[0].toUpperCase());
    const validChoices = ["Rock", "Paper", "Scissors"];//Validation
    while (!(validChoices.includes(playerChoice))) {
    playerChoice=prompt("Invalid choice! Enter your selection again(Rock/Paper/Scissors):)");
    playerChoice=playerChoice.toLowerCase();
    playerChoice=playerChoice.replace(playerChoice[0],playerChoice[0].toUpperCase())
}
    return playerChoice;
}


function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection===computerSelection){
        console.log("Draw!")
    }
    else  if (playerSelection==="Rock" && computerSelection==="Scissors" || playerSelection==="Paper" && computerSelection==="Rock" || playerSelection==="Scissors" && computerSelection==="Paper"){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }

    else{
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
    }
}


function game(){
    for(let i=0;i<5;i++){
        const computerChoice=getComputerChoice();
        const playerChoice=getPlayerChoice();
        playRound(playerChoice,computerChoice);
}
}
game()