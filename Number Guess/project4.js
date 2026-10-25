 let randomNumber = Math.floor(Math.random() * 100) + 1;

 const submit = document.querySelector('#subt');
 const userInput = document.querySelector('#guessField');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let   prevGuess = [];

let   numGuess = 1;

let   playGame = true;


// e.prevent default tells the browser to not do what it normally does when an event occurs.
//  In this case, it prevents the form from being submitted to the server and the page from being refreshed. like here it is a form so value run and go to server or anywhere where it will be called  so this prevents the values from being sent to the server and the page from being refreshed. This allows the JavaScript code to handle the form submission and update the page dynamically without a full page reload. 
// hence e.preventDefault() is used to prevent the default behavior of the form submission and allow the JavaScript code to handle the form submission and update the page dynamically without a full page reload.and it will stop values here only that it will be hold and not go anywhere and it will be used in the code only.


if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number');
  } else if(guess < 1){
    alert('Please enter a number greater than 1');
  } else if(guess > 100){
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game Over! The number was ${randomNumber}`, 'red');
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`Congratulations! You guessed the number ${randomNumber}`, 'green');
    endGame();
  } else if(guess < randomNumber){
    displayMessage('Your guess is too low', 'blue');
  } else if(guess > randomNumber){
    displayMessage('Your guess is too high', 'blue');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess  }, `;
  remaining.innerHTML = 10 - numGuess;
  numGuess++;
}

function displayMessage(message, color) {
  lowOrHi.innerHTML = message;
  lowOrHi.style.color = color;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h1 id="newGame">Start New Game</h1>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10 - numGuess;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = '';
    playGame = true;
  });
}