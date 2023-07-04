import { data } from "autoprefixer";
import rockIcon from "../assets/icon-rock.svg";

function Rock() {
  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const playRock = () => {
    const data = {
      pChoice: "rock",
      cChoice: getComputerChoice(),
      winner: "",
    };

    const { pChoice, cChoice } = data;

    if (pChoice === cChoice) {
      data.winner = "It's a tie!";
    } else if (
      (pChoice === "rock" && cChoice === "scissors") ||
      (pChoice === "paper" && cChoice === "rock") ||
      (pChoice === "scissors" && cChoice === "paper")
    ) {
      data.winner = "Player Wins!";
    } else {
      data.winner = "Computer Wins!";
    }

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div
          className="relative rounded-full bg-gradient-to-b from-rock-start to-rock-end w-44 h-44
      flex items-center justify-center z-20 cursor-pointer"
          onClick={playRock}
        >
          <div
            className="absolute rounded-full bg-white w-36 h-36
            flex items-center justify-center z-20 bottom-3"
          >
            <img src={rockIcon} alt="Scissors" className="w-20" />
          </div>
          <div className="absolute rounded-full bg-white-shadow w-36 h-36 z-10"></div>
        </div>
        <div className="absolute rounded-full bg-rock-shadow w-44 h-44 z-10 -bottom-2"></div>
      </div>
    </div>
  );
}

export default Rock;
