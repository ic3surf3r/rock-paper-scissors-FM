import scissorsIcon from "../assets/icon-scissors.svg";

function ScissorsBig() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative m-auto flex items-center justify-center">
        <div
          className="relative rounded-full bg-gradient-to-b from-scissors-start to-scissors-end w-36 h-36 md:w-48 md:h-48
              flex items-center justify-center z-40 "
        >
          <div
            className="absolute rounded-full bg-white w-28 h-28 md:w-40 md:h-40
                flex items-center justify-center z-40 bottom-3"
          >
            <img src={scissorsIcon} alt="Scissors" className="w-16 md:w-20" />
          </div>
          <div className="absolute rounded-full bg-white-shadow w-28 h-28 md:w-40 md:h-40 z-30"></div>
        </div>
        <div className="absolute rounded-full bg-scissors-shadow w-36 h-36 md:w-48 md:h-48 z-30 -bottom-2"></div>
      </div>
    </div>
  );
}

export default ScissorsBig;
