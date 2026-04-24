const buttons = document.querySelectorAll(".btn1");
const result = document.querySelector(".btn4");
const restart = document.querySelector(".restart");

let player1Choice = null;
let player2Choice = null;
let isPlayer1Turn = true;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice; // "rock", "paper", "scissor"

    if (isPlayer1Turn) {
      player1Choice = choice;
      isPlayer1Turn = false;
    } else {
      player2Choice = choice;
      isPlayer1Turn = true;
      winner(player1Choice, player2Choice);
    }
  });
});

function winner(player1, player2) {
  if (player1 === player2) {
    result.innerText = "It's a tie";
  } else if (
    (player1 === "rock" && player2 === "scissor") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissor" && player2 === "paper")
  ) {
    result.innerText = "Player 1 wins";
  } else {
    result.innerText = "Player 2 wins";
  }
}

restart.addEventListener("click", () => {
  player1Choice = null;
  player2Choice = null;
  isPlayer1Turn = true;
  result.innerText = "who is the winner?";
});