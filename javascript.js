// Creating a equally random outcome - rock, paper, or scissors
function computerPlay() {
        const number = Math.floor(Math.random() * 1000);
        if (number % 3 === 0) {
                return 'rock';
        }
        if (number % 3 === 1) {
                return 'paper';
        }
        return 'scissors';
}


function playRound(playerSelection, computerSelection) {
        if (!(playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' ||
                playerSelection.toLowerCase() === 'scissors')) {
                return "draw"

        }

        else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
                return "draw"
        }
        else {

                if (
                        ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'scissors'))
                        || ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'rock'))
                        || ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'paper'))

                ) {
                        return "won";

                }
                else if (
                        ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'paper'))
                        || ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'scissors'))
                        || ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'rock'))

                ) {

                        return "lose";

                }

        }







}
function game() {
        let playerCount = 0;
        let computerCount = 0;
        for (let i = 0; i < 5; i++) {

                let playerInput = prompt("Write Rock, paper or Scissors?");
                // your code here!
                let computerInput = computerPlay();
                if (playRound(playerInput, computerInput) === 'win') {

                        playerCount++;
                        console.log("You win")

                }
                else if (playRound(playerInput, computerInput) === 'lose') {

                        computerCount++;
                        console.log("computer Win")
                }
                else {
                        //do nothing
                        console.log("No one win this round")
                }




        }
        if (playerCount > computerCount) {
                console.log("You are a champion")
        }
        else if (playerCount < computerCount) {
                console.log("Computer is a champion")
        }
        else {
                console.log("It a tie")
        }

}

//adding eventlistener
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
btn1.addEventListener('click', () => {
        playRound("rock", computerPlay())
});
btn2.addEventListener('click', () => {
        playRound("paper", computerPlay())
});
btn3.addEventListener('click', () => {
        playRound("scissors", computerPlay())
});