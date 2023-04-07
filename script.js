

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
    let playerChoice;
    playerChoice=prompt("Enter your selection(Rock/Paper/Scissors):)");
    playerChoice=caseInsensitive(playerChoice);//Not working properly
    const validChoices = ["Rock", "Paper", "Scissors"];//Validation
    while (!(validChoices.includes(playerChoice))) {
    playerChoice=prompt("Invalid choice! Enter your selection again(Rock/Paper/Scissors):)");
    playerChoice=caseInsensitive(playerChoice);//Not working properly
}
    return playerChoice;
}
function caseInsensitive(text){//Not working properly
    let playerCaseInsensitive=text.toLowerCase();
    playerCaseInsensitive=playerCaseInsensitive.replace(playerCaseInsensitive[0],playerCaseInsensitive[0].toUpperCase());
    return playerCaseInsensitive;
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
        const computerS=getComputerChoice();
        const playerS=getPlayerChoice();
        playRound(playerS,computerS);
}
}
game()