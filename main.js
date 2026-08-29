let firstCard = 10;
let secondCard = 11;
let cards = [];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

function startGame() {
  cards.push(firstCard, secondCard);
  renderGame();
  console.log(cards);
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards;
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  let thirdCard = 2;
  cards.push(thirdCard);
  sum += thirdCard;
  console.log(cards);
  renderGame();
}
