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
