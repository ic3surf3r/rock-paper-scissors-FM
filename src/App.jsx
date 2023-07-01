import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const clearScore = () => {
    setScore(0);
  };

  return (
    <div className="relative text-dark-Text-Color h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-Start-Color to-background-end-Color p-10">
      <div className="flex flex-col text-center ">
        <Header score={score} />
        <div className="flex space-x-3 mx-auto">
          <button
            className="bg-white rounded-md w-8 h-8 m-3"
            onClick={increaseScore}
          >
            +1
          </button>
          <button
            className="bg-white rounded-md w-12 h-8 m-3"
            onClick={clearScore}
          >
            Clear
          </button>
        </div>
        <Grid />
      </div>
      <div className="absolute bottom-8 right-8">
        <Rules />
      </div>
    </div>
  );
}

export default App;
