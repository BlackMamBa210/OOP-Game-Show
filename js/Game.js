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
        let phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("There is no trying"),
            new Phrase("May the force be with you"),
            new Phrase("You have to see the matrix for yourself"),
            new Phrase("You talking to me")
        ];
        return phrases
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNum];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const phrase = this.getRandomPhrase()
        const container = document.querySelector('.main-container');

        container.firstElementChild.style.display = 'none';
        document.getElementById("overlay").style.display = "none";
        phrase.addPhraseToDisplay()
        this.activePhrase = phrase;
    }


    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const show = document.querySelectorAll('.show');
        const letters = document.querySelectorAll('.letter')
        if (show.length === letters.length) {
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
        const hearts = document.querySelectorAll('img');

        hearts[this.missed].src = "images/lostHeart.png";
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false)
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay")
        const h1 = document.getElementById("game-over-message")

        overlay.style.display = "";

        if (gameWon) {
            overlay.className = "win";
            h1.innerHTML = "Victory!";
        }
        if (this.missed === 5) {
            overlay.className = "lose";
            h1.innerHTML = "Defeat!"
        }
    };


    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     * added a green border with a light green background for correct keys
     * and a solid red border for wrong gueses.
     */
    handleInteraction(button) {
        const letter = button.textContent;

        if (this.activePhrase.checkLetter(letter)) {
            button.disabled = true;
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin()

        } else {
            button.disabled = true;
            button.classList.add("wrong");
            this.removeLife()

        }

        if (this.checkForWin()) {
            this.gameOver(true)
        }

    };

    //resets keyboard 
    resetKeyboard() {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            key.className = "key";
            key.disabled = false;
        }
    }

    //Removes the 'win' and 'lose' overlay
    resetOverlay() {
        const overlay = document.getElementById("overlay");

        overlay.className = "start";
        document.querySelector("h1").innerHTML = "";
    }

    //Resets the hearts
    resetLife() {
        const hearts = document.querySelectorAll('img');

        hearts.forEach(heart => {
            heart.src = "images/liveHeart.png"
        })
    };
}