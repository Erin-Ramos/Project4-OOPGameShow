/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//framework

let correctLetter;

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phrase = this.phrase;
        const phraseUl = document.querySelector('#phrase ul');

        for (let i = 0; i < phrase.length; i++) {
            let letter = phrase[i];
            const letterLi = document.createElement('li');

            if (letter === ' ') {
                letterLi.className = 'space';
                letterLi.textContent = ' ';
            } else {
                letterLi.className = `hide letter ${letter}`;
                letterLi.textContent = letter;
            }

            phraseUl.appendChild(letterLi);
        }
        console.log(phrase);
    }
    checkLetter(letter) {
        const phrase = this.phrase;

        for (let i = 0; i < phrase.length; i++) {
            let phraseLetters = phrase[i];

            if (letter === phraseLetters) {
                correctLetter = letter;
            } 
        }
        return correctLetter;
    }
    showMatchedLetter() {
        const phraseLi = document.querySelectorAll('#phrase ul li');
        
        for (let i = 0; i < phraseLi.length; i++) {
            if (phraseLi[i].textContent === correctLetter) {
                phraseLi[i].classList.replace('hide', 'show');
            }
        }

    }
}