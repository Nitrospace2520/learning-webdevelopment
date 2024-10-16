/* //* Taking user defined inputs:-
let username;
document.getElementById("input-button").onclick = function () {
  username = document.getElementById("input-name").value;
  console.log(username);
  document.querySelector("#input-label").innerHTML = "Hello " + username;
};
 */
/* //* Finding the Hypotenuse of a Right Angle:-
document.getElementById("submit-button").onclick = function () {
  const sideA = Number(document.getElementById("input-side-a").value);
  const sideB = Number(document.getElementById("input-side-b").value);
  const sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  document.querySelector("#label-side-c").innerHTML =
    "The Hypotenuse of the right angle is: " + sideC;
};
 */
/* //* Make a Counter:-
let count = 0;
document.getElementById("decrese-key").onclick = function () {
  count -= 1;
  document.querySelector("#output").innerHTML = String(count);
};
document.getElementById("reset-key").onclick = function () {
  count = 0;
  document.querySelector("#output").innerHTML = String(count);
};
document.getElementById("increse-key").onclick = function () {
  count += 1;
  document.querySelector("#output").innerHTML = String(count);
};
 */
//* Making a Rock, Paper, Scissors:-
let playerChoice;
let winner;
let computerChoice = "Rock-Paper-Scissors".split("-")[
  Math.floor(Math.random() * 3)
];
document.getElementById("not-interested").onclick = function () {
  document.querySelector("#not-play").innerHTML = "Maybe Next Time";
  document.getElementById("is-play").style.display = "none";
  setTimeout(() => {
    location.reload();
  }, 5000);
};
document.getElementById("interested").onclick = function () {
  document.querySelector("#not-play").innerHTML = "";
  enterChoice();
};
function enterChoice() {
  //? Most important function of this code
  if (document.getElementById("is-play").style.display === "none") {
    document.getElementById("interested").onclick(() => {
      document.getElementById("is-play").style.display = "none";
    });
  } else {
    document.getElementById("is-play").style.display = "block";
  }
}
function whoIsWinner() {
  // DOM manipulation for display who is winner
  document.querySelector("#both-choices").innerHTML =
    "Your choice -> " + playerChoice + ", Computer choice -> " + computerChoice;
  if (winner === "Tie") {
    document.querySelector("#winner").innerHTML = "It's a tie game";
  } else if (winner === "Computer") {
    document.querySelector("#winner").innerHTML = "Computer wins";
  } else {
    document.querySelector("#winner").innerHTML = "You wins";
  }
  setTimeout(() => {
    location.reload();
  }, 7000);
}
document.getElementById("rock-id").onclick = function () {
  playerChoice = "Rock";
  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "Paper") {
    winner = "Computer";
  } else {
    winner = "Player";
  }
  whoIsWinner();
};
document.getElementById("paper-id").onclick = function () {
  playerChoice = "Paper";
  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "Paper") {
    winner = "Computer";
  } else {
    winner = "Player";
  }
  whoIsWinner();
};
document.getElementById("scissors-id").onclick = function () {
  playerChoice = "Scissors";
  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "Paper") {
    winner = "Computer";
  } else {
    winner = "Player";
  }
  whoIsWinner();
};
