/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//framework
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.inputPhrases();
        this.activePhrase = null;
    }

    inputPhrases() {
        const phraseStrings = ['one test', 'two test', 'THREE test', 'four test', 'five test'];

        const phrasesArray = phraseStrings.map((string) => new Phrase(string));
        return phrasesArray;

    };

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
            this.activePhrase.checkLetter(clickedLetter);
            /*
            if (clickedLetter === correctLetter) {
                console.log('winner winner chicken dinner')
                // TODO: figure out how to change the style of the correct/incorrect keys later. 
                // just get the damn app functioning for now. 
                // You literally wasted 3 hours. Move on. 
            } */
        });
    }
    removeLife() {

    }
    checkForWin() {

    }
    gameOver() {

    }
}
