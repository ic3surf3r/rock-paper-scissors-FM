import { useState } from "react";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";
import Paper from "./components/Paper";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="text-dark-Text-Color h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-Start-Color to-background-end-Color p-10">
      <Header score={score} />
      <h1 className="font-body">Rock Paper Scissors</h1>
      <p className="font-body">YOU PICKED</p>
      <button onClick={increaseScore}>+1</button>
      <Rock />
      <Scissors />
      <Paper />
    </div>
  );
}

export default App;
