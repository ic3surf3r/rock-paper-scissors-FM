import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";
import bgTriangle from "../assets/bg-triangle.svg";

function Grid() {
  return (
    <div className=" flex flex-col justify-center items-center pt-7 my-auto mx-auto">
      <div
        className="grid grid-cols-3 grid-rows-2 gap-12 md:w-10/12 
      mx-auto md:py-5 md:px-6 "
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
      <div className="absolute z-0 w-3/5 md:w-3/4 flex justify-center">
        <img src={bgTriangle} alt="triangle" className="pt-12 md:pt-9 " />
      </div>
    </div>
  );
}

export default Grid;
