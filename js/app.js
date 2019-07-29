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

let game;

//start game event listener
document.getElementById("btn__reset").addEventListener('click', function() {
    game = new Game();
    game.startGame();
})


//event listner for the on screen keyboard
document.getElementById('qwerty').addEventListener('click', function(event) {
    const e = event.target;
    if (e.className === "key") {
        game.handleInteraction(e)
    };
})


//event listener for the start game button to reset the game
document.getElementById("btn__reset").addEventListener('click', function() {
    if (overlay.className === "lose" || overlay.className === "win") {
        game.resetKeyboard();
        game.resetOverlay();
        game.resetLife();
    };
})

//event listener for keyboard input.
document.addEventListener('keydown', function(event) {
    const pressedkeys = event.key.toLowerCase();
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const keys = document.getElementsByClassName("key");
    if (letters.includes(keyPressed)) {
        for (let key of keys) {
            if (key.innerText == keyPressed) {
                key.click();
            }
        }
    }
});