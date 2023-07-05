export function playGame(input) {
  const data = {
    pChoice: input,
    cChoice: getComputerChoice(),
    winner: "",
  };

  const { pChoice, cChoice } = data;

  if (pChoice === cChoice) {
    data.winner = "It's a tie!";
  } else if (
    (pChoice === "rock" && cChoice === "scissors") ||
    (pChoice === "paper" && cChoice === "rock") ||
    (pChoice === "scissors" && cChoice === "paper")
  ) {
    data.winner = "Player Wins!";
  } else {
    data.winner = "Computer Wins!";
  }

  return data;
}

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
