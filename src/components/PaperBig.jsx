import paperIcon from "../assets/icon-paper.svg";

function PaperBig() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="relative rounded-full bg-gradient-to-b from-paper-start to-paper-end w-36 h-36 md:w-48 md:h-48
      flex items-center justify-center z-20 "
          >
            <div
              className="absolute rounded-full bg-white w-28 h-28 md:w-40 md:h-40
            flex items-center justify-center z-20 bottom-3"
            >
              <img src={paperIcon} alt="Scissors" className="w-16 md:w-20" />
            </div>
            <div className="absolute rounded-full bg-white-shadow w-28 h-28 md:w-40 md:h-40 z-10"></div>
          </div>
          <div className="absolute rounded-full bg-paper-shadow w-36 h-36 md:w-48 md:h-48 z-10 -bottom-2"></div>
        </div>
      </div>
    </div>
  );
}

export default PaperBig;
