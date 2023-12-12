/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//framework
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
        let correctLetter;
        const phrase = this.phrase;
        // console.log(letter);

        for (let i = 0; i < phrase.length; i++) {
            let phraseLetters = phrase[i];

            if (letter === phraseLetters) {
                correctLetter = letter;
                console.log(`we have a match at ${phraseLetters}!`);
                    // TODO: this breaks after the first matched letter... It needs to keep going until all 
                    // phrase letters have been checked for a match... UGH 
                break;
            } else {
                console.log('no match :(');
            }
        }
        return correctLetter;  // TODO: WHY IS THIS NOT CONNECTING??? 
    }
    showMatchedLetter() {

    }
}