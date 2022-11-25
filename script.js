'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
console.log('Hidden number is', number);
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  let score = Number(document.querySelector('.score').textContent);
  score = score - 1;
  document.querySelector('.score').textContent = score;
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guessNumber > number) {
    document.querySelector('.message').textContent = 'Your Number is too High!';
  } else if (guessNumber < number) {
    document.querySelector('.message').textContent = 'Your Number is too low!';
  } else {
    document.querySelector('.message').textContent = 'YAY! You win the game';
    document.querySelector('.number').textContent = number;
    const highScore = document.querySelector('.highscore').textContent;
    if (Number(highScore) > number) {
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.check').disabled = true;
  }
  document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    console.log('Hidden number is', number);
    console.log(number);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;
  });
});
