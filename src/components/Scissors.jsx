import scissorsIcon from "../assets/icon-scissors.svg";

function Scissors() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div
          className="relative rounded-full bg-gradient-to-b from-scissors-start to-scissors-end w-44 h-44
      flex items-center justify-center z-10"
        >
          <div
            className="absolute rounded-full bg-white w-36 h-36
            flex items-center justify-center z-10 bottom-3"
          >
            <img src={scissorsIcon} alt="Scissors" className="w-20" />
          </div>
          <div className="absolute rounded-full bg-white-shadow w-36 h-36 z-0"></div>
        </div>
        <div className="absolute rounded-full bg-scissors-shadow w-44 h-44 z-0 -bottom-2"></div>
      </div>
    </div>
  );
}

export default Scissors;
