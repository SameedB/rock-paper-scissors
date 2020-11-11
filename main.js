function computerPlay(){
    var choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: choice = 'rock'; break;
        case 2: choice = 'paper'; break;
        case 3: choice = 'scissors'; break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){

    switch(playerSelection){
        case "rock":
            if(computerSelection == 'rock'){
                return "Tie, rock ties with rock";
            }
            else if(computerSelection == 'paper'){
                return "You lose, paper beats rock";
            }
            else if(computerSelection == 'scissors'){
                return "You win, rock beats scissors";
            }
            break;
        case "paper":
            if(computerSelection == 'rock'){
                return "You win, paper beats rock";
            }
            else if(computerSelection == 'paper'){
                return "Tie, paper ties with paper";
            }
            else if(computerSelection == 'scissors'){
                return "You lose, scissors beats paper";
            }
            break; 
        case "scissors":
            if(computerSelection == 'rock'){
                return "You lose, rock beats scissors";
            }
            else if(computerSelection == 'paper'){
                return "You win, scissors beats paper";
            }
            else if(computerSelection == 'scissors'){
                return "Tie, scissors ties scissors";
            }
        default:
            return "Invalid input";    
    }

}

function game(){
    var win = 0;
    var lose = 0;
    var tie = 0;

    for(i = 0; i < 5; i++){
        const playerSelection = window.prompt("Enter rock, paper or scissors", "choice")
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
        switch(playRound(playerSelection, computerSelection)){
            case "Tie, rock ties with rock": tie++;
            break;
            case "Tie, paper ties with paper": tie++;
            break;
            case "Tie, scissors ties scissors": tie++;
            break;
            case "You lose, paper beats rock": lose++;
            break;
            case "You lose, rock beats scissors": lose++;
            break;
            case "You lose, scissors beats paper": lose++;
            break;
            case "You win, paper beats rock": win++;
            break;
            case "You win, rock beats scissors": win++;
            break;
            case "You win, scissors beats paper": win++;
        }
    }

    if(win > lose){
        console.log("You win the game " + win + "-" + lose + "-" + tie)
    }

    if(lose > win){
        console.log("You lose the game " + win + "-" + lose + "-" + tie);
    }

    if(win == lose){
        console.log("You tie the game " + win + "-" + lose + "-" + tie);
    }
}

game();