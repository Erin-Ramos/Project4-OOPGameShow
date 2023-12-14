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
        const phraseStrings = ['Against all odds', 'Go for it', 'Be the change', 'Always add value', 'Action gets results'];

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
        // when i reset, the console tells me that this.missed is restarting at 0, but if you get one wrong, it picks up where it left off last game.
        const triesImg = document.querySelectorAll('.tries img');
        triesImg[this.missed].src = 'images/lostHeart.png';

        this.missed++;

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

        const triesImg = document.querySelectorAll('.tries img');
        for(let j = 0; j < triesImg.length; j++) {
            triesImg[j].src = 'images/liveHeart.png';
        }

    }
}


// TODO: clear out the old phrase. It is hanging on to all of them and allowing letters to be clicked as chosen that aren't in the current phrase