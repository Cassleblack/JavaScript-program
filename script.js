const words = ["Rock" , "Paper" , "Scissors" ];

function getComputerChoice() {
return Math.floor(Math.random() * words.length);
}

let computerChoice = words[getComputerChoice()];

console.log(computerChoice);