import { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import Grid from "./Grid";
import PaperBig from "./PaperBig";
import RockBig from "./RockBig";
import ScissorsBig from "./ScissorsBig";
import WinButtonBackground from "./WinButtonBackground";

function Game() {
  const { score, isPlaying, pChoice, cChoice, winner, dispatch } =
    useContext(GameContext);
  const [pWon, setPWon] = useState(false);
  const [cWon, setCWon] = useState(false);

  useEffect(() => {
    displayWinner();
  }, [isPlaying]);

  const playAgain = () => {
    dispatch({ type: "PLAY_AGAIN" });
    return "done";
  };

  const playerWon = () => {
    dispatch({ type: "PLAYER_WON", payload: score });
  };

  const displayWinner = () => {
    if (pChoice === cChoice) {
      setPWon(false);
      setCWon(false);
      return;
    } else if (
      (pChoice === "rock" && cChoice === "scissors") ||
      (pChoice === "paper" && cChoice === "rock") ||
      (pChoice === "scissors" && cChoice === "paper")
    ) {
      setPWon(true);
      setCWon(false);
      return;
    } else {
      setCWon(true);
      setPWon(false);
      return;
    }
  };

  const winningText = () => {
    if (pWon) {
      return "YOU WIN";
    } else if (cWon) {
      return "YOU LOSE";
    } else {
      return "TIE";
    }
  };

  const bigButton = (choice, state) => {
    if (choice === "scissors") {
      return (
        <WinButtonBackground isVisible={state}>
          <ScissorsBig />
        </WinButtonBackground>
      );
    } else if (choice === "rock") {
      return (
        <WinButtonBackground isVisible={state}>
          <RockBig />
        </WinButtonBackground>
      );
    } else {
      return (
        <WinButtonBackground isVisible={state}>
          <PaperBig />
        </WinButtonBackground>
      );
    }
  };

  if (!isPlaying) {
    return <Grid />;
  }

  return (
    <div className="text-white font-body grid grid-cols-3 w-4/5 xl:w-3/5 mx-auto ">
      <div className="flex flex-col md:justify-center items-center relative">
        <p className="absolute top-20 md:top-1/4 z-50">YOU PICKED</p>
        <div className="">{bigButton(pChoice, pWon)}</div>
      </div>

      <div className="flex flex-col justify-end sm:justify-center items-center ">
        <p className="text-3xl z-40">{winningText()}</p>
        <br />
        <div
          onClick={playAgain}
          className="text-playAgainColor bg-white rounded-sm w-40 h-10 p-2 cursor-pointer z-40"
        >
          PLAY AGAIN
        </div>
      </div>
      <div className="flex flex-col md:justify-center items-center relative">
        <p className="absolute top-20 md:top-1/4 z-50">THE HOUSE PICKED</p>
        <div className="">{bigButton(cChoice, cWon)}</div>
      </div>

      {winner === "Player Wins!" && playerWon()}
    </div>
  );
}

export default Game;
