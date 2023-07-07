import { useContext } from "react";
import GameContext from "../context/GameContext";

function Rules() {
  const { open, dispatch } = useContext(GameContext);

  const openModal = () => {
    dispatch({ type: "OPEN_RULES" });
    return;
  };

  return (
    <div
      onClick={openModal}
      className="rounded-lg border-4 border-solid border-header-Outline-Color  py-2 px-8 cursor-pointer"
    >
      <p className="font-body text-white font-thin tracking-widest">RULES</p>
    </div>
  );
}

export default Rules;
