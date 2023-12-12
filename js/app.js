/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const game = new Game();

const startBtn = document.getElementById('btn__reset');

startBtn.addEventListener('click', () => {
    game.startGame();
}); 