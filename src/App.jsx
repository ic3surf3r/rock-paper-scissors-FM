import { useState } from "react";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";
import Paper from "./components/Paper";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="text-dark-Text-Color bg-scissors-start">
      <h1>Rock Paper Scissors</h1>
      <Rock />
      <Scissors />
      <Paper />
    </div>
  );
}

export default App;
