/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/**
 * game class controls the actions of the game - 
 * creating the phrase strings, starting the game, choosing one of the phrases at random, and handling interactions from the player
 */
class Game {
    constructor() {
        // initialize the 5 Phrase objects
        const phrase1 = new Phrase('Against all odds');
        const phrase2 = new Phrase('Go for it');
        const phrase3 = new Phrase('Be the change');
        const phrase4 = new Phrase('Always add value');
        const phrase5 = new Phrase('Action gets results')
        // place the phrases in an array for use
        const phrases = [phrase1, phrase2, phrase3, phrase4, phrase5];

        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }

    // remove the start screen overlay and run the methods needed to begin the game 
    startGame() {
        const startOverlay = document.getElementById('overlay');
        startOverlay.style.visibility = 'hidden';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // get a phrase string at random from the phrases array
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    // handles user interactions 
    handleInteraction(clickedBtn) {
        const clickedLetter = clickedBtn.innerText;
        this.activePhrase.checkLetter(clickedLetter);

        // if the letter clicked by the player matches a letter in the phrase, change the key to the chosen class and show the matched letter
        if (clickedLetter === correctLetter) {
            clickedBtn.classList.add('chosen');
            clickedBtn.disabled = true;
            this.activePhrase.showMatchedLetter();

        // if the letter clicked by the player does not match a letter in the phrase, change the key to the wrong class and remove a life
        } else {
            clickedBtn.classList.add('wrong');
            clickedBtn.disabled = true;
            this.removeLife();
        }
        // check if the player has won
        this.checkForWin();

    }

    // remove a life if the player chooses an incorrect letter 
    removeLife() {
        const triesImg = document.querySelectorAll('.tries img');
        triesImg[this.missed].src = 'images/lostHeart.png';

        // increase the missed counter
        this.missed += 1;
        // if player runs out of lives, run gameOver with the loss message and class
        if (this.missed === 5) {
            this.gameOver('Bummer! Try again.', 'lose');
        }
    }

    // check if the player has won
    checkForWin() {
        const phraseLi = document.querySelectorAll('.hide');

        // if player has finished the phrase, run gameOver with the win message and class
        if (phraseLi.length === 0) {
            this.gameOver('Congratulations! You won!', 'win');
        }
    }

    // when the game is over, display the correct screen - either win or lose 
    gameOver(msg, result) {
        const startOverlay = document.getElementById('overlay');
        startOverlay.classList = (result);
        startOverlay.style.visibility = 'visible';

        const h1 = document.getElementById('game-over-message');
        h1.innerText = msg;
    }

    resetGame() {
        // clear out the previous phrase
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';

        // remove chosen/wrong classes from keys and enable them
        const keys = document.querySelectorAll('.key');
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList = 'key';
            keys[i].disabled = false;
        }

        // restore hearts
        const triesImg = document.querySelectorAll('.tries img');
        for (let j = 0; j < triesImg.length; j++) {
            triesImg[j].src = 'images/liveHeart.png';
        }

        // reset missed counter to 0;
        this.missed = 0;
    }
}