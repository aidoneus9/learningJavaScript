'use strict';

/*
// <70. PROJECT #1: Guess My Number!>
console.log(document.querySelector('.message').textContent); // getting the text content from the selected element

// <72. Selecting and Manipulating Elements>
// set the content of the element
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// with an input field, to get the actual value, use the value property
*/

/*
// <73. Handling Click Events>
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math is basically an object that JavaScript gives us, and on there, we have a lot of different methods, and random is one of them(gives us a number between 0 and 1)
let score = 20; // this variable here can also be called a state variable because this score is part of the so-called application stae which is basically all the data that is relevant to the application
let highscore = 0; // this way, the first score is always gonna be the highest score, because it's always going to be greater than zero

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // usually whenever we get something from the user interface, for example, from an input field, it usually always is a string

  // usually, the first scenario is always to assume that there is actually no input, and then we need to respond to that somehow
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // string
    // it's just the body element so there is no Dot because that's for classes
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); // if there is no guess, zero is falsy, so guess here is false now, but then we use the NOT operator to convert it true, we can then make this block of code execute(it only executes whenever this whole condition here is true)
// whenever there's a wrong guess, we just take the score that we already have in our code, then we decrease it by one and then we display that new score right here.

// <74. Implementing the Game Logic>
// each time that there is a wrong guess, the score should decrease by one
// 1. to read the score from 'Score: 20', then decrease it by one and then print it there agian. store this score basically in the DOM, and to do that we could always just read the value from score label, so right from the DOM, then we could decrease that value and then write it back here to the DOM but then we could not have that value in our code so essentially our application would have no way of knowing that score at all points.
// 2. (better way) actually create a variable for the score in the code and then update that variable so bascially to decrease that variable nad then display the value of that variable here in this score label / by doing that, we have our data also in the code and not just on the DOM. It's always good to keep a variable which actually holds the data in our code and not just rely on the DOM to hold our data.

// <75. Manipulating CSS Styles>
// DOM also includes CSS styles
// 1. change the background of the entire page to a green color whenever the player guesses the right number so when the player wins the game
// 2. also make this number wider then.

// <76. Coding Challenge #1>
// Implement a game reset functionality, so that the player can make a new guess!

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // reassign

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// <77. Implementing Highscores>
*/

// <78. Refactoring Our Code: The DRY Principle>
// restructure the code but without changing how it works

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
