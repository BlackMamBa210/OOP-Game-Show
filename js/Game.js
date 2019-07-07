/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases;
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("There is not trying"),
            new Phrase("May the foce be with you"),
            new Phrase("You have to see the matrix for yourself"),
            new Phrase("You talking to me")
        ];

        return phrases;
    };
}

// const game = new Game();