function getComputerChoice() {
  Choice = Math.floor(Math.random() * 3);
  return Choice;
}
// getComputerChoice();
// if (Choice == 0) {
//   console.log("Rock");
// } else if (Choice == 1) {
//   console.log("Paper");
// } else {
//   console.log("Scissors");
// }
// console.log(Choice);

function getHumanChoice() {
  humanInput = prompt(
    "choose 0 or 1 or 2  where 0 is Rock, 1 is Paper, 2 is Scissors ",
  );
  return humanInput;
}
// getHumanChoice();
// if (humanInput == 0) {
//   console.log("Rock");
// } else if (humanInput == 1) {
//   console.log("Paper");
// } else {
//   console.log("Scissors");
// }
// console.log(humanInput);

let humanScore = 0;
let computerScore = 0;
let score = " Score: " + humanScore + " " + computerScore;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It is a tie");
  } else if (
    (humanChoice == 0 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 1) ||
    (humanChoice == 1 && computerChoice == 0)
  ) {
    humanScore++;
    console.log("You win" + " Score: " + humanScore + " " + computerScore);
  } else if (
    (humanChoice == 2 && computerChoice == 0) ||
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 0 && computerChoice == 1)
  ) {
    computerScore++;
    console.log(
      "Computer wins" + " Score: " + humanScore + " " + computerScore,
    );
  } else {
    console.log("what game are you playing");
  }
}

// console.log("am here");

// playRound(humanSelection, computerSelection);

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log("Final: You " + humanScore + " - " + computerScore + " Computer");
}
playGame();
