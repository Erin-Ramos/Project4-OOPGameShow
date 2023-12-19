/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/**
 * game class controls the actions of the game - 
 * creating the phrase strings, starting the game, choosing one of the phrases at random, and handling interactions from the player
 */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.phrases();
        this.activePhrase = null;
    }

    // create the array that holds the phrase strings
    phrases() {
        const phraseStrings = ['Against all odds', 'Go for it', 'Be the change', 'Always add value', 'Action gets results'];

        const phrasesArray = phraseStrings.map((string) => new Phrase(string));
        return phrasesArray;
    }

    // remove the start screen overlay and run the methods needed to begin the game 
    startGame() {
        const startOverlay = document.getElementById('overlay');
        startOverlay.style.visibility = 'hidden';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction();
    }

    // get a phrase string at random from the phrases array
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    // handles user interactions 
    handleInteraction() {
        // select the keyboard section of the page
        const qwerty = document.querySelector('#qwerty');

        qwerty.addEventListener('click', (e) => {
            const clickedLetter = e.target.innerText;
            const clickedBtn = e.target;
            this.activePhrase.checkLetter(clickedLetter);

            // if the letter clicked by the player matches a letter in the phrase, change the key to the chosen class and show the matched letter
            if (clickedLetter === correctLetter) {
                clickedBtn.classList.add('chosen');
                this.activePhrase.showMatchedLetter();

            // if the letter clicked by the player does not match a letter in the phrase, change the key to the wrong class and remove a life
            } else if (clickedBtn.className === 'key') {
                clickedBtn.classList.add('wrong');
                this.removeLife();
            }
            // check if the player has won
            this.checkForWin();
        });
    }

    // remove a life if the player chooses an incorrect letter 
    removeLife() { 
        const triesImg = document.querySelectorAll('.tries img');
        triesImg[this.missed].src = 'images/lostHeart.png';

        // increase the missed counter
        this.missed++;

        if (this.missed === 5) {
            this.gameOver('Bummer! Try again.', 'lose');
        }
    }

    // check if the player has won
    checkForWin() {
        const phraseLi = document.querySelectorAll('.hide');

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
}