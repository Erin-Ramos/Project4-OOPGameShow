/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */




let correctLetter;

/** 
 * phrase class controls the phrase section's functionality - 
 * adding to display, checking that the clicked letter matches the letters of the phrase, and showing the correct letters;
*/
class Phrase {
    constructor(phrase) {
        // set the phrase to lowercase for easier processing
        this.phrase = phrase.toLowerCase();
    }

    // add the phrase to the game screen with the letters hidden
    addPhraseToDisplay() {
        const phrase = this.phrase;
        const phraseUl = document.querySelector('#phrase ul');

        // iterate over the characters in the phrase and place them on the game screen
        for (let i = 0; i < phrase.length; i++) {
            let letter = phrase[i];
            const letterLi = document.createElement('li');

            if (letter === ' ') {
                letterLi.className = 'space';
                letterLi.textContent = ' ';
            } else {
                // hide the letters until they are correctly chosen by the player
                letterLi.className = `hide letter ${letter}`;
                letterLi.textContent = letter;
            }

            // add the characters to the ul 
            phraseUl.appendChild(letterLi);
        }
    }

    // check if the letter chosen by the player matches any of the letters in the phrase
    checkLetter(letter) {
        const phrase = this.phrase;

        // iterate over the phrase characters and check for matches
        for (let i = 0; i < phrase.length; i++) {
            let phraseLetters = phrase[i];

            if (letter === phraseLetters) {
                correctLetter = letter;
            } 
        }
        return correctLetter;
    }

    // show the letters as they are correctly chosen by the player
    showMatchedLetter() {
        const phraseLi = document.querySelectorAll('#phrase ul li');
        
        for (let i = 0; i < phraseLi.length; i++) {
            if (phraseLi[i].textContent === correctLetter) {
                phraseLi[i].classList.replace('hide', 'show');
            }
        }

    }
}