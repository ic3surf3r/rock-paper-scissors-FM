import { useContext } from "react";
import GameContext from "../context/GameContext";
import Grid from "./Grid";

function Game() {
  const { isPlaying, pChoice, cChoice, winner } = useContext(GameContext);

  if (!isPlaying) {
    return <Grid />;
  }

  return (
    <div className="text-white">
      player: {pChoice} vs computer: {cChoice}
    </div>
  );
}

export default Game;
