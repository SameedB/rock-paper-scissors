function computerPlay(){
    var choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: choice = 'rock'; break;
        case 2: choice = 'paper'; break;
        case 3: choice = 'scissors'; break;
    }
    return choice;
}

var win = 0;
var lose = 0;
var tie = 0;


function playRound(playerSelection, computerSelection){

    switch(playerSelection){
        case "rock":
            if(computerSelection == 'rock'){
                tie++;
                return "Tie, rock ties with rock";
            }
            else if(computerSelection == 'paper'){
                lose++;
                return "You lose, paper beats rock";
            }
            else if(computerSelection == 'scissors'){
                win++;
                return "You win, rock beats scissors";
            }
            break;
        case "paper":
            if(computerSelection == 'rock'){
                win++;
                return "You win, paper beats rock";
            }
            else if(computerSelection == 'paper'){
                tie++;
                return "Tie, paper ties with paper";
            }
            else if(computerSelection == 'scissors'){
                lose++;
                return "You lose, scissors beats paper";
            }
            break; 
        case "scissors":
            if(computerSelection == 'rock'){
                lose++;
                return "You lose, rock beats scissors";
            }
            else if(computerSelection == 'paper'){
                win++;
                return "You win, scissors beats paper";
            }
            else if(computerSelection == 'scissors'){
                tie++;
                return "Tie, scissors ties scissors";
            }
        default:
            return "Invalid input";    
    }

}

const body = document.querySelector('body');
const scoreDisplay = document.createElement('div');
//const gameEndDisplay = document.createElement('p');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == 1){
            (playRound("rock", computerPlay()));
        }
        if(button.id == 2){
            playRound("paper", computerPlay());
        }
        if(button.id == 3){
            playRound("scissors", computerPlay());
        }
        if(win < 5 || lose < 5){
            scoreDisplay.textContent = "Score: " + win + "-" + lose + "-" + tie;
        }
        if(win == 5){
            scoreDisplay.textContent = "Game Over, You Win: " + win + "-" + lose + "-" + tie;
        }
        if(lose == 5){
            scoreDisplay.textContent = "Game Over, You Lose: " + win + "-" + lose + "-" + tie;
        }
    })
})

//scoreDisplay.append(gameEndDisplay);
body.appendChild(scoreDisplay);

