


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
    
        playRound(playerSelection,computerSelection);
}
}
game()