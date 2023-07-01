import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";
import bgTriangle from "../assets/bg-triangle.svg";

function Grid() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div
        className="grid grid-cols-3 grid-rows-2 w-10/12 lg:w-5/12
      mx-auto py-5 px-6 "
      >
        <div className="col-start-1 col-span-1">
          <Paper />
        </div>
        <div className="col-start-3 col-span-1">
          <Scissors />
        </div>
        <div className="col-start-2">
          <Rock />
        </div>
      </div>
      <div className="absolute z-0">
        <img src={bgTriangle} alt="triangle" />
      </div>
    </div>
  );
}

export default Grid;
