'use strict';
//dom - document object model
//dom stores elemnt in tree structure
//dom methods and properties of dom are not a part of js
//dom methods and properties are web apis which can interact with js
//api - application programming interface
//other web api -  timer, fetch ...... learn these later

/*
document.querySelector('.message').textContent = '🎉correct number!';
//console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.ceil(Math.random() * 20);

//event litsener ---
//event listener has two arguments --
//1st - the event name like 'click'
//2nd - an event handler function
//we want to hear the event on check button --
let score = 20;
let highScore = 0;
//creating a function for displaying message -- 
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when no values is entered
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
  } //when player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉correct number!';
    displayMessage('🎉correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess is high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//in js to generate a random number--- use Math.random()
//it generates a floating point number between 0 to 1
//whenever we get input it is always in form of string.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.ceil(Math.random() * 20);
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

//refactoring ---
