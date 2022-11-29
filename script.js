let score = 20;
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
console.log(hiddenNumber);
let max = Number(document.querySelector('.highscore').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please guess a value!';
  }

  if (score > 1) {
    if (guess > hiddenNumber) {
      document.querySelector('.message').textContent = 'Number is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < hiddenNumber) {
      document.querySelector('.message').textContent = 'Number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess === hiddenNumber) {
      document.querySelector('.message').textContent = 'You won the game';
      document.querySelector('.number').textContent = hiddenNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.guess').value = '';
      if (score > max) {
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.check').disabled = true;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(hiddenNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
