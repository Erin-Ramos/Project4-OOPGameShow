/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

const startBtn = document.getElementById('btn__reset');

// reset the game and then start the game when the start game button is clicked
startBtn.addEventListener('click', () => {
    // prevents the game from reseting if it is the first play through
    if (game) {
        game.resetGame();
    }

    // initialize a new Game class
    game = new Game();
    // start the game
    game.startGame();
}); 

const qwerty = document.querySelector('#qwerty');

// event listener when key buttons are clicked to call handleInteraction
qwerty.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
});

