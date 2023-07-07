import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";
import bgTriangle from "../assets/bg-triangle.svg";

function Grid() {
  return (
    <div className=" flex flex-col justify-center items-center pt-7 my-auto mx-auto">
      <div
        className="grid grid-cols-3 grid-rows-2 w-10/12 
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
      <div className="absolute z-0 ">
        <img src={bgTriangle} alt="triangle" className="pt-9" />
      </div>
    </div>
  );
}

export default Grid;
