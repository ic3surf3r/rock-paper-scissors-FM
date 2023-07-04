import { useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";
import ReactModal from "react-modal";
import { GameProvider } from "./context/GameContext";
import Background from "./components/Background";
import Game from "./components/Game";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Background>
      <GameProvider>
        <div className="flex flex-col text-center ">
          <Header />
          <Game />
        </div>
        <div className="absolute bottom-8 right-8">
          <Rules />
        </div>
      </GameProvider>
    </Background>
  );
}

export default App;
