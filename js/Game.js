/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//framework
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.phrases();
        this.activePhrase = null;
    }

    phrases() {
        const phraseStrings = ['one test', 'two test', 'THREE test', 'four test', 'five test'];

        const phrasesArray = phraseStrings.map((string) => new Phrase(string));
        return phrasesArray;
    }

    startGame() {
        const startOverlay = document.getElementById('overlay');
        startOverlay.style.visibility = 'hidden';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction();
    }

    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }
    handleInteraction() {
        const qwerty = document.querySelector('#qwerty');

        qwerty.addEventListener('click', (e) => {
            const clickedLetter = e.target.innerText;
            const clickedBtn = e.target;
            this.activePhrase.checkLetter(clickedLetter);

            if (clickedLetter === correctLetter) {
                clickedBtn.classList.add('chosen');
                this.activePhrase.showMatchedLetter();

            } else if (clickedBtn.className === 'key') {
                clickedBtn.classList.add('wrong');
                this.removeLife();
                console.log(this.missed);
            }
            this.checkForWin();
        });
    }
    removeLife() { // TODO: This stops working on the second play through... So weird. 
        const triesImg = document.querySelectorAll('.tries img');
        console.log(triesImg);
        triesImg[this.missed].src = 'images/lostHeart.png';

        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver('Bummer! Try again.', 'lose');
        }
    }
    checkForWin() {
        const phraseLi = document.querySelectorAll('.hide');

        if (phraseLi.length === 0) {
            this.gameOver('Congratulations! You won!', 'win');
        }
    }
    gameOver(msg, result) {
        const startOverlay = document.getElementById('overlay');
        startOverlay.classList = (result);
        startOverlay.style.visibility = 'visible';

        const h1 = document.getElementById('game-over-message');
        h1.innerText = msg;
    }
    gameReset() {
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';

        const keys = document.querySelectorAll('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList = 'key';
        }

        const resetTries = document.querySelectorAll('.tries img');
        for(let j = 0; j < resetTries.length; j++) {
            resetTries[j].src = 'images/liveHeart.png';
        }

    }
}
