import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Rules from "./components/Rules";
import ReactModal from "react-modal";
import { GameProvider } from "./context/GameContext";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-dark-Text-Color h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-Start-Color to-background-end-Color p-10">
      <GameProvider>
        <div className="flex flex-col text-center ">
          <Header />
          <Grid />
        </div>
        <div className="absolute bottom-8 right-8">
          <Rules />
        </div>
      </GameProvider>
    </div>
  );
}

export default App;
