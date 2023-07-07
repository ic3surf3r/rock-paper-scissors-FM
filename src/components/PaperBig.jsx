import paperIcon from "../assets/icon-paper.svg";

function PaperBig() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="relative rounded-full bg-gradient-to-b from-paper-start to-paper-end w-48 h-48
      flex items-center justify-center z-20 "
          >
            <div
              className="absolute rounded-full bg-white w-40 h-40
            flex items-center justify-center z-20 bottom-3"
            >
              <img src={paperIcon} alt="Scissors" className="w-20" />
            </div>
            <div className="absolute rounded-full bg-white-shadow w-40 h-40 z-10"></div>
          </div>
          <div className="absolute rounded-full bg-paper-shadow w-48 h-48 z-10 -bottom-2"></div>
        </div>
      </div>
    </div>
  );
}

export default PaperBig;
