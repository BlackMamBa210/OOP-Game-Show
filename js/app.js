/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase("Life is like a box of chocolates");

// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };

// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game = new Game();

btn__reset.addEventListener('click', (e) => {
    game.startGame();
})

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