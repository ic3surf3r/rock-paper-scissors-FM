import { useContext } from "react";
import GameContext from "../context/GameContext";
import Grid from "./Grid";

function Game() {
  const { score, isPlaying, pChoice, cChoice, winner, dispatch } =
    useContext(GameContext);

  let winnerScreen = "";

  const playAgain = () => {
    dispatch({ type: "PLAY_AGAIN" });
    return "done";
  };

  const playerWon = () => {
    dispatch({ type: "PLAYER_WON", payload: score });
  };

  const displayWinner = () => {
    if (pChoice === cChoice) {
      winnerScreen = "It's a tie!";
    } else if (
      (pChoice === "rock" && cChoice === "scissors") ||
      (pChoice === "paper" && cChoice === "rock") ||
      (pChoice === "scissors" && cChoice === "paper")
    ) {
      winnerScreen = "Player Wins!";
    } else {
      winnerScreen = "Computer Wins!";
    }
    return winnerScreen;
  };

  if (!isPlaying) {
    return <Grid />;
  }

  return (
    <div className="text-white">
      <p>
        player: {pChoice} vs computer: {cChoice}
      </p>

      <div>{displayWinner()}</div>
      {winner === "Player Wins!" && playerWon()}
      <div onClick={playAgain}>Play Again?</div>
    </div>
  );
}

export default Game;
