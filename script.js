const words = ["Rock" , "Paper" , "Scissors" ];

function getComputerChoice() {
    return Math.floor(Math.random() * words.length);
    }

let playerWins = 0;
let computerWins = 0;

function playGame() {
    let playerInput = prompt("Play: " + "Rock, Paper, Scissors");
    
    playerInput = playerInput.trim();
    
    function capitalize(input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        }
        
        let playerSelection = capitalize(playerInput);
        let computerSelection = words[getComputerChoice()];
        
        function gamePlay (player, computer) {
            if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
                playerWins++;
                return `You Win!!! ${player} beats ${computer}.
                Your score: ${playerWins} Computer's score: ${computerWins}.`;
            } else if (player === computer) {
                return `T's a Tie!!!
                Your score: ${playerWins} Computer's score: ${computerWins}.`;
            } else {
                computerWins++;
                return `You Lose!!! ${computer} beats ${player}.
                Your score: ${playerWins} Computer's score: ${computerWins}.`;
            }
        }
        
        let result = gamePlay(playerSelection, computerSelection);
        console.log(result);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (playerWins > computerWins) {
    console.log("Final Winner: You!");
} else if (playerWins < computerWins) {
    console.log("Final Winner: Computer!");
} else {
    console.log("T's a Tie!");
}