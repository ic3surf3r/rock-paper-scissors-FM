import { useState } from "react";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Rock />
      <Scissors />
      <Paper />
    </>
  );
}

export default App;
