import { useContext } from "react";
import GameContext from "../context/GameContext";
import Grid from "./Grid";
import PaperBig from "./PaperBig";
import RockBig from "./RockBig";
import ScissorsBig from "./ScissorsBig";

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
      return <ScissorsBig />;
    } else if (choice === "rock") {
      return <RockBig />;
    } else {
      return <PaperBig />;
    }
  };

  if (!isPlaying) {
    return <Grid />;
  }

  return (
    <div className="flex flex-col justify-center items-center font-body">
      <div className="text-white flex justify-center items-center gap-10 pt-48">
        <div className="flex flex-col">
          <p>YOU PICKED</p>
          <br />
          {bigButton(pChoice)}
        </div>
        <div>
          <div className="text-3xl">{displayWinner()}</div>
          <br />
          <div
            onClick={playAgain}
            className="text-playAgainColor bg-white rounded-md w-40 h-10 p-2 cursor-pointer"
          >
            PLAY AGAIN
          </div>
        </div>
        <div className="flex flex-col">
          <p>THE HOUSE PICKED</p>
          <br />
          {bigButton(cChoice)}
        </div>
        {winner === "Player Wins!" && playerWon()}
      </div>
    </div>
  );
}

export default Game;
