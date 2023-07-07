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
          className="relative rounded-full bg-gradient-to-b from-rock-start to-rock-end  w-28 h-28 md:w-44 md:h-44
      flex items-center justify-center z-20 cursor-pointer hover:-bottom-1"
          onClick={playRock}
        >
          <div
            className="absolute rounded-full bg-white w-20 h-20 md:w-36 md:h-36
            flex items-center justify-center z-20 md:bottom-3 "
          >
            <img src={rockIcon} alt="Scissors" className="md:w-20 w-12" />
          </div>
          <div className="absolute rounded-full bg-white-shadow w-20 h-20 md:w-36 md:h-36 z-10 "></div>
        </div>
        <div className="absolute rounded-full bg-rock-shadow w-28 h-28 md:w-44 md:h-44 z-10 -bottom-2"></div>
      </div>
    </div>
  );
}

export default Rock;
