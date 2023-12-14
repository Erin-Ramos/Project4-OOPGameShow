/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




const startBtn = document.getElementById('btn__reset');

startBtn.addEventListener('click', () => {
    const game = new Game();
    game.gameReset();
    game.startGame();
    console.log(game.missed);
}); 