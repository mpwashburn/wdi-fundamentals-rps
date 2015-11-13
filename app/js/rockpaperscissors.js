////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    move = move || getInput();
    return move;
    
}

function getComputerMove(move) {
    var move;
    move = move || randomPlay();
    return move;
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "tie";
        } else if (computerMove === "paper") {
            winner = "computer";
        }
          else if (computerMove === "scissors") {
            winner = "player"
        }
    } else if (playerMove === "paper") {
        if (computerMove === "paper") {
                winner = "tie";
        }else if (computerMove === "scissors") {
                winner = "player";
        }else if (computerMove === "rock") {
            winner = "computer";
        }
     } else if (playerMove === "scissors") {
            if (computerMove === "rock") {
            winner = "player"; 
        } else if (computerMove === "paper") {
            winner = "player";
        } else if (computerMove === "scissors") {
            winner = "tie";
        }
}
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 || computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            console.log(" player chose " + playerMove + " and computer chose " + computerMove + ". Player wins this round.");
            playerWins++;
        } 

        else if (winner === "computer") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Computer wins this round.");
            computerWins++;
        }

        else if (winner === "tie") {
            console.log(" player chose " + playerMove + " and computer chose " + computerMove + ". It's a tie.");
        }
        console.log("player; " + playerWins + " Computer: " + computerWins);
    }

    return [playerWins, computerWins];
}

playToFive();