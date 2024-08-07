'use strict';

let diceEl = document.querySelector('.dice');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let currentOEl = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let playere0El = document.querySelector('.player--0');
let playere1El = document.querySelector('.player--1');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//switch player
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  playere0El.classList.toggle('player--active');
  playere1El.classList.toggle('player--active');
}

//display entering the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Roll dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  console.log(scores);
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
});
