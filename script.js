const words = ["Rock" , "Paper" , "Scissors" ];

let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * words.length);
}

function playGame () {
    
    let btnId = "";
    let playerChoice = "";
    let computerChoice = "";
    let result = "";
    
    const btnRock = document.getElementById("Rock");
    btnRock.addEventListener ("click", (event) => {
        if (roundsPlayed < 5) {
            btnId = event.target.id;
            playerChoice = playerSelection(btnId);
            computerChoice = words[getComputerChoice()];
            result = gamePlay(playerChoice, computerChoice);
            displayResult(result);
            roundsPlayed++;
            if (roundsPlayed === 5) displayWinner();
        }
    });
    
    const btnPaper = document.getElementById("Paper");
    btnPaper.addEventListener ("click", (event) => {
        if (roundsPlayed < 5) {
            btnId = event.target.id;
            playerChoice = playerSelection(btnId);
            computerChoice = words[getComputerChoice()];
            result = gamePlay(playerChoice, computerChoice);
            displayResult(result);
            roundsPlayed++;
            if (roundsPlayed === 5) displayWinner();
        }
    });
    
    const btnScissors = document.getElementById("Scissors");
    btnScissors.addEventListener ("click", (event) => {
        if (roundsPlayed < 5) {
            btnId = event.target.id;
            playerChoice = playerSelection(btnId);
            computerChoice = words[getComputerChoice()];
            result = gamePlay(playerChoice, computerChoice);
            displayResult(result);
            roundsPlayed++;
            if (roundsPlayed === 5) displayWinner();
        }
    });

    const btnNewGame = document.getElementById("newGame");
    btnNewGame.addEventListener("click", () => {
        newGame();
    });



    function playerSelection (buttonId) {
        if (buttonId === "Rock") {
            return "Rock";
        }

        else if (buttonId === "Paper") {
            return "Paper";
        }

        else if (buttonId === "Scissors") {
            return "Scissors";
        }

        else {
            return "Error: Invalid Selection";
        }
    }
    
    function gamePlay (player, computer) {
        if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
            playerWins++;
            return `You Win!!! ${player} beats ${computer}.<br>
            Your score: ${playerWins}<br>Computer's score: ${computerWins}`;
        } else if (player === computer) {
            return `It's a Tie!!!<br>
            Your score: ${playerWins}<br>Computer's score: ${computerWins}`;
        } else {
            computerWins++;
            return `You Lose!!! ${computer} beats ${player}.<br>
            Your score: ${playerWins}<br>Computer's score: ${computerWins}`;
        }
    }

    function displayResult(resultText) {
        const results = document.querySelector("#Results");
        results.innerHTML = resultText;
    }
    
    function displayWinner(player, computer) {
        const theWinner = document.querySelector("#Winner");

        if (playerWins > computerWins) {
            theWinner.innerHTML = "You Win!";
        } else if (playerWins < computerWins) {
            theWinner.innerHTML = "Computer Win!";
        } else {
            theWinner.innerHTML = "T's a Tie!";
        }
    }

    function newGame() {
        playerWins = 0;
        computerWins = 0;
        roundsPlayed = 0;

        const results = document.querySelector("#Results");
        results.innerHTML = "";

        const theWinner = document.querySelector("#Winner");
        theWinner.innerHTML = "";

        console.log("New Game");
    }
}

playGame ();
