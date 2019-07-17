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

    handleInteraction(key) {
        key.diabled = true;

        if (phrase.checkLetter(key.textContent)) {
            key.classList += ' chosen';
            phrase.showMatchedLetter(key.textContent);
            this.gameOver;
        } else {
            key.classList += ' wrong';
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
        const tries = document.querySelectorAll('img[alt=\'Heart Icon\']');
        tries[tries.length - 1].src = 'images/lostHeart.png';
        tries[tries.length - 1].alt = 'Heart Lost';

        if (!tries === 5) {
            this.gameOver();
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const resetGame = function() {
            this.missed = 0;
            const ul = document.querySelector('ul');
            ul.innerHTML = '';

            const keyboard = document.querySelectorAll('button.key');
            for (let i = 0; i < keyboard.length; i++) {
                keyboard[i].className = 'key';
                keyboard[i].disabled = '';
                console.log('keyboard clear')
            }

            const hearts = document.querySelectorAll('li > img');
            for (let i = 0; i < hearts.length; i++) {
                hearts[i].src = 'images/liveHeart.png';
                hearts[i].alt = 'Heart Icon';
                console.log('Hearts clear')
            }
        };

        if (this.checkForWin() === true) {
            const overlay = document.querySelector('#overlay');
            overlay.style.display = '';
            overlay.className = 'win';
            document.querySelector('#game-over-message').textContent = 'Victory!';
            resetGame();

        } else {
            if (this.missed === 5) {
                overlay.style.display = '';
                overlay.className = 'lose';
                document.querySelector('#game-over-message').textContent = 'Defeat!';
                resetGame();
            }
        }
    }
};

// const game = new Game();