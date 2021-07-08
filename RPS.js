function computerPlay(){
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    // playerSelection = prompt("Type what you will be playing with (Rock, Paper Scissors):", "");
    let capitalizeFirstLetterplayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerScores = 0;
    let playerScores = 0;
    console.log(`Computer's choice: ${computerSelection}`);
    console.log(`Player's choice: ${capitalizeFirstLetterplayerSelection}`);
    if (capitalizeFirstLetterplayerSelection == "Rock" && computerSelection == "Scissors" ||
        capitalizeFirstLetterplayerSelection == "Paper" && computerSelection == "Rock" ||
        capitalizeFirstLetterplayerSelection == "Scissors" && computerSelection == "Paper"){
        playerScores++;
        return alert(`You win this round! ${capitalizeFirstLetterplayerSelection} beats ${computerSelection}`);
    } else if (capitalizeFirstLetterplayerSelection == computerSelection){
        return alert("Tie");
    } else {
        computerScores++;
        return alert(`You lose this round! ${capitalizeFirstLetterplayerSelection} beats ${computerSelection}`);
    }
}

// const playerSelection = "roCk";
// const computerSelection = computerPlay();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let rounds = 5;
    for(i = 0; i <= rounds; i++){
        do{
        playerSelection = prompt("Type what you will be playing with?", "Rock, Paper, Scissors");
        if (playerSelection != null){
            playRound(playerSelection, computerSelection);
        } else {
            return endgame();
        }
        } while (confirm("Would you like to continue the game?"));
        return endgame();
    }
}

function endgame(){
    let playerScores;
    let computerScores;
    if (playerScores > computerScores){
        alert ("Congratulations! You are have better luck than computer");
    } else if (playerScores < computerScores){
        alert ("Better luck next time");
    }else {
        alert ("Thank you for playing the game!");
    }
    return "Thank you for playing!"
}



const computerSelection = computerPlay();
console.log(game());


