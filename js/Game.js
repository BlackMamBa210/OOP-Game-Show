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

        game.activePhrase = game.getRandomPhrase();
        phrase.phrase = game.activePhrase;
        phrase.phrase.addPhraseToDisplay();

        console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    };

    handleInteraction(KeyboardEvent) {
        KeyboardEvent.diabled = true;

        if (phrase.checkLetter(key.textContent)) {
            key.classList += 'chosen';
            phrase.showMatchedLetter(key.textContent);
            this.gameOver;
        } else {
            key.classList += 'wrong';
            this.removeLife();
            this.missed++;
            this.gameOver();
        }
        //console.log(handleInteraction());
    }


    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const phraseLetters = [...this.activePhrase];
        const phraseCount = letters.filter(element => element !== ' ').length;
        const shownPhraseLetters = document.querySelectorAll('.show').length;

        if (shownPhraseLetters === phraseCount) {
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
    removeLife() {};

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {};

}

// const game = new Game();