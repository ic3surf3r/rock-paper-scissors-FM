import { useContext } from "react";
import GameContext from "../context/GameContext";
import Grid from "./Grid";
import Scissors from "./Scissors";
import Rock from "./Rock";
import Paper from "./Paper";

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
      winnerScreen = "TIE";
    } else if (
      (pChoice === "rock" && cChoice === "scissors") ||
      (pChoice === "paper" && cChoice === "rock") ||
      (pChoice === "scissors" && cChoice === "paper")
    ) {
      winnerScreen = "YOU WIN";
    } else {
      winnerScreen = "YOU LOSE";
    }
    return winnerScreen;
  };

  const bigButton = (choice) => {
    if (choice === "scissors") {
      return <Scissors />;
    } else if (choice === "rock") {
      return <Rock />;
    } else {
      return <Paper />;
    }
  };

  if (!isPlaying) {
    return <Grid />;
  }

  return (
    <>
      <div className="text-white flex justify-center items-center gap-10 pt-48">
        <div className="flex flex-col">
          <p>YOU PICKED</p>
          {bigButton(pChoice)}
        </div>
        <div>{displayWinner()}</div>
        <div className="flex flex-col">
          <p>THE HOUSE PICKED</p>
          {bigButton(cChoice)}
        </div>
        {winner === "Player Wins!" && playerWon()}
      </div>
      <div onClick={playAgain}>Play Again?</div>
    </>
  );
}

export default Game;
