/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("There is no trying"),
            new Phrase("May the foce be with you"),
            new Phrase("You have to see the matrix for yourself"),
            new Phrase("You talking to me")
        ];

        return phrases;
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[index];

        return phrase
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const container = document.querySelector('.main-container');
        container.firstElementChild.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        phrase.phrase = this.activePhrase;
        phrase.phrase.addPhraseToDisplay();

        console.log(`Active Phrase - phrase: ${this.activePhrase}`);
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        if (phrase === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const liveHearts = document.querySelectorAll('img');
        const liveHeart = liveHearts[this.missed];
        liveHeart.src = 'images/lostHeart.png';

        this.missed++;

        if (this.missed === 5) {
            this.gameOver('lose');
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        if (gameWon) {
            document.querySelector('#overlay').className = 'lose';
            document.querySelector('#game-over-message').textContent = 'Defeat!';
        } else {
            document.querySelector('#overlay').className = 'win';
            document.querySelector('#game-over-message').textContent = 'Victory!';
        }

        document.querySelector('#overlay').style = 'visability: visible';
    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        const letter = document.querySelector(button.textContent);

        document.addEventListener('click', (e) => {
            if (this.activePhrase) {
                button.disabled = true;
            } else if (this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);
                button.className = 'chosen';
            } else if (this.checkForWin()) {
                this.gameOver(true);
            } else {
                button.className = 'wrong'
                this.removeLife();
            }
        });
        console.log(button);
    };
};