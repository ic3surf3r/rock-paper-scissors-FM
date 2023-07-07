import { createContext, useReducer } from "react";
import gameReducer from "./GameReducer";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const initialState = {
    score: 0,
    isPlaying: false,
    pChoice: "",
    cChoice: "",
    winner: "",
    open: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
