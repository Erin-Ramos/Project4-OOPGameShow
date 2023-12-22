/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/** Final Issue: 
 * initialising the game variable with a new Game object outside of the event handler, 
 * so the event handler just re-calls the startGame method on the same class instance of the Game class. 
 * instead need to make the variable create a new instance of the class. 
 * BUT - when I do this, the game does not reset properly. */


const game = new Game();
const startBtn = document.getElementById('btn__reset');

// reset the game and then start the game when the start game button is clicked
startBtn.addEventListener('click', () => {
    game.resetGame();
    game.startGame();
}); 


