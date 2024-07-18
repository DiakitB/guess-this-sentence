"use strict";
const player1 = document.querySelector("#score--0");
const player2 = document.querySelector("#score--1");
const diceboxe = document.querySelector(".dice");
const player1CurrentScore = document.querySelector("#current--0");
const player2CurrentScore = document.querySelector("#current--1");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
const currentPlayerActice = document.querySelector(".current-score");
const btnewGame = document.querySelector(".btn--new");
const btnRow = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore, activePlayer, playing, totalScore;
const GameRester = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceboxe.classList.add("hidden");
  player1.textContent = 0;
  player2.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

  playerZero.classList.remove("player--winner");
  playerOne.classList.remove("player--winner");
  playerZero.classList.add("player--active");
  playerOne.classList.remove("player--active");
};
GameRester();
///
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
};

/////

//////
// const totalScore = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

btnRow.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceboxe.classList.remove("hidden");
    diceboxe.src = `dice-${dice}.png`;
    console.log(dice);
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      // player1CurrentScore.textContent = currentScore;
    } else {
      //witch to next player
      switchPlayer();
    }
  }
  // const dice = Math.trunc(Math.random() * 6) + 1;
  // diceboxe.classList.remove('hidden');
  // diceboxe.src = `dice-${dice}.png`;
  // console.log(dice);
  // if (dice !== 1) {
  //   currentScore += dice;
  //   document.querySelector(`#current--${activePlayer}`).textContent =
  //     currentScore;
  //   // player1CurrentScore.textContent = currentScore;
  // } else {
  //   //witch to next player
  //   switchPlayer();
  // }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceboxe.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
  // totalScore[activePlayer] += currentScore;
  // document.querySelector(`#score--${activePlayer}`).textContent =
  //   totalScore[activePlayer];
  // if (totalScore[activePlayer] >= 20) {
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.add('player--winner');
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove('player--active');
  // } else {
  //   switchPlayer();
  // }
});

btnewGame.addEventListener("click", function () {
  diceboxe.classList.remove("hidden");
  GameRester();
});
