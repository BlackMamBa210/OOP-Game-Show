/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay() {
        const ul = document.querySelector("ul");
        const letter = this.phrase;

        for (let letter of this.phrase) {
            if (letter === " ") {
                const li = document.createElement("li");
                li.classList.add('space');
                ul.appendChild(li);
            } else {
                const li = document.createElement("li");
                li.textContent = letter;
                li.classList.add('hide', 'letter', letter);
                ul.appendChild(li);
            }
        }

    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if ([...this.phrase].indexOf(letter) !== -1) {
            return true;
        } else {
            return false;
        }
    };
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const list = document.querySelectorAll('li');

        for (let li of list) {
            if (li.textContent === letter) {
                li.classList.add('show');
                li.classList.remove('hide');
            }
        }
    };
};