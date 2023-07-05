import { useContext } from "react";
import GameContext from "../context/GameContext";
import rockIcon from "../assets/icon-rock.svg";
import { playGame } from "../functions/playGame";

function Rock() {
  const { dispatch } = useContext(GameContext);

  const playRock = () => {
    const data = playGame("rock");
    dispatch({ type: "START_GAME", payload: data });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div
          className="relative rounded-full bg-gradient-to-b from-rock-start to-rock-end w-44 h-44
      flex items-center justify-center z-20 cursor-pointer hover:-bottom-1"
          onClick={playRock}
        >
          <div
            className="absolute rounded-full bg-white w-36 h-36
            flex items-center justify-center z-20 bottom-3 "
          >
            <img src={rockIcon} alt="Scissors" className="w-20" />
          </div>
          <div className="absolute rounded-full bg-white-shadow w-36 h-36 z-10 "></div>
        </div>
        <div className="absolute rounded-full bg-rock-shadow w-44 h-44 z-10 -bottom-2"></div>
      </div>
    </div>
  );
}

export default Rock;
