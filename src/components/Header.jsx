import { useContext } from "react";
import GameContext from "../context/GameContext";
import logo from "../assets/logo.svg";
import Score from "./Score";

function Header() {
  const { score } = useContext(GameContext);

  return (
    <div
      className="flex justify-between rounded-lg border-4 border-solid border-header-Outline-Color w-10/12 lg:w-5/12
    mx-auto py-3 px-6 mb-6 "
    >
      <img src={logo} alt="Rock Paper Scissors" className="w-2/5 md:w-auto" />
      <Score score={score} />
    </div>
  );
}

export default Header;
