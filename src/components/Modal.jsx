import { useContext } from "react";
import GameContext from "../context/GameContext";
import rulesSVG from "../assets/image-rules.svg";

export default function Modal({ children }) {
  const { open, dispatch } = useContext(GameContext);

  const closeModal = () => {
    dispatch({ type: "CLOSE_RULES" });
    return;
  };

  return (
    // backdrop
    <div
      onClick={closeModal}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50  ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div className="flex flex-col bg-white p-12 lg:w-3/6 lg:h-3/5 rounded-xl justify-between ">
        <div className="font-body text-4xl flex justify-between ">
          <p>RULES</p>
          <p onClick={closeModal} className="cursor-pointer">
            X
          </p>
        </div>
        <br />
        <br />
        <div className="font-body my-auto mx-auto">
          <img src={rulesSVG} alt="rules" className="object-cover " />
        </div>
      </div>
    </div>
  );
}
