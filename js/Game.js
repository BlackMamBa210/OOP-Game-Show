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
            new Phrase("May the force be with you"),
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
        const hide = document.querySelectorAll('.hide')

        if (hide.length === 0) {
            this.gameOver('win');
        }

        // if (phrase === 0) {
        //     return true;
        // } else {
        //     return false;
        // }
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

        if (gameWon === 'lose') {
            document.querySelector('#overlay').className = 'lose';
            document.querySelector('#game-over-message').textContent = 'Defeat!';
        }

        if (gameWon === 'win') {
            document.querySelector('#overlay').className = 'win';
            document.querySelector('#game-over-message').textContent = 'Victory!';
        }

        document.querySelector('#overlay').style = 'visability: visible';

        this.resetGame();
    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        //put the text content of the button in a const
        const letters = this.activePhrase.checkLetter(button.textContent)


        if (this.activePhrase.checkeLetter(letters)) {
            button.disabled = true;
            letters.classList.add('chosen');
            this.activePhrase.ShowMatchedLetter(letters)
            this.checkForWin();

        } else {
            button.disabled = false
            letters.classList.add('wrong');
            this.removeLife();

        };

        if (this.checkForWin() === true) {
            this.gameOver(true)
        }
        this.resetGame();
    };

    //create  a method that will reset your keyboard
    resetKeyboard() {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            key.className = "key";
            key.disabled = false;
        }
        this.resetGame();
    }

    //reset the overlay you could create a method to do this.
    resetPhrase() {
        const ul = document.querySelector('ul');
        const li = document.querySelectorAll('#phrase ul li');

        for (let i = 0; i < li.length; i++) {
            ul.removeChild(li[i]);
        };
    };
    //reset hearts you could also use a method for this
    resetHearts() {
        const hearts = document.querySelectorAll('img');

        for (let i = 0; i < hearts.length; i++) {
            hearts[i].setAttribute('src', './images/liveHeart.png');
            this.missed = 0;
        };
    }

    // button.disabled = true;
    // const key = document.getElementsByClassName('.key')

    // if (this.activePhrase.checkLetter(button.textContent)) {
    //     this.activePhrase.showMatchedLetter(button.textContent);
    //     key.classList.add('chosen');

    //     if (this.checkForWin()) {
    //         this.gameOver(true);
    //     }
    // } else {
    //     key.classList.add('wrong');
    //     this.removeLife();
    // }

    // this.resetGame();
};

// resetGame() {
//     this.activePhrase = null;

//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('#phrase ul li');
//     const keys = document.getElementsByClassName('key');
//     const hearts = document.querySelectorAll('img');

//     for (let i = 0; i < li.length; i++) {
//         ul.removeChild(li[i]);
//     };

//     for (let key of keys) {
//         key.className = 'key';
//         key.disabled = false;
//     };

//     for (let i = 0; i < hearts.length; i++) {
//         hearts[i].setAttribute('src', './images/liveHeart.png');
//         this.missed = 0;
//     };
//     console.log(keys)
// };