/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const game = new Game();
const startBtn = document.getElementById('btn__reset');

// reset the game and then start the game when the start game button is clicked
startBtn.addEventListener('click', () => {
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = '';

    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList = 'key';
    }

    const triesImg = document.querySelectorAll('.tries img');
    for(let j = 0; j < triesImg.length; j++) {
        triesImg[j].src = 'images/liveHeart.png';
    }

    game.missed = 0;

    game.startGame();
}); 