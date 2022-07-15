//Generate a random number between 1 and 500
let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
  subt.addEventListener('click', function(e){
      e.preventDefault();
      //Grab guess from user
      const guess = parseInt(userInput.value);
      validateGuess(guess);
  });
}

function validateGuess(guess){
  if (isNaN(guess)){
      alert('Please enter a valid number');
  } else if (guess < 1) {
      alert('Please enter a number greater than 1!');
  } else if (guess > 100){
      alert('Please enter a number less than 500!')
  } else {
      //Keep record of number of attempted guesses
      previousGuesses.push(guess);
      //Check to see if game is over
      if (numGuesses === 11){
          displayGuesses(guess);
          displayMessage(`Game Over! Number was ${randomNumber}`);
          endGame();
      } else {
      //Display previous guessed numbers
      displayGuesses(guess);
      //Check guess and display if wrong
      checkGuess(guess);
      }
  }
}

function checkGuess(guess){
  //Display clue if guess is too high or too low
  if (guess === randomNumber){
      displayMessage(`You guessed correctly!`);
      endGame();
  } else if (guess < randomNumber) {
      displayMessage(`Too low! Try again!`);
  } else if (guess > randomNumber) {
      displayMessage(`Too High! Try again!`);
  }
}