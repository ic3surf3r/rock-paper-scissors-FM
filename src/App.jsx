import { useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";
import { GameProvider } from "./context/GameContext";
import Background from "./components/Background";
import Game from "./components/Game";
import Modal from "./components/Modal";
import WinButtonBackground from "./components/WinButtonBackground";

function App() {
  return (
    <Background>
      <GameProvider>
        <div className="flex flex-col text-center ">
          <Header />
          <Game />
        </div>
        <div className="absolute bottom-8 right-8">
          <Rules />
          <Modal />
        </div>
      </GameProvider>
    </Background>
  );
}

export default App;
