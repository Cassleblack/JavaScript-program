const words = ["Rock" , "Paper" , "Scissors" ];

function getComputerChoice() {
return Math.floor(Math.random() * words.length);
}

let playerInput = prompt("Play: " + "Rock, Paper, Scissors");
playerInput = playerInput.trim();
function capitalize(input) {
return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

let playerSelection = capitalize(playerInput);

function gamePlay (player, computer) {
if (player === "Rock" && computer === "Scissors") {
return "You Win!!! Rock beats Scissors.";
} else if (player === "Paper" && computer === "Rock") {
return "You Win!!! Paper beats Rock.";
} else if (player === "Scissors" && computer === "Paper") {
return "You Win!!! Scissors beats Paper.";
} else if (player === "Rock" && computer === "Paper") {
return "You Lose!!! Paper beats Rock.";
} else if (player === "Scissors" && computer === "Rock") {
return "You Lose!!! Rock beats Scissors.";
} else if (player === "Paper" && computer === "Scissors") {
return "You Lose!!! Scissors beats Paper.";
} else if (player === computer) {
return "T's a Tie!!!";
} else {
return "OOPs Wrong Input!";
}
}

let computerSelection = words[getComputerChoice()];
let result = gamePlay(playerSelection, computerSelection);