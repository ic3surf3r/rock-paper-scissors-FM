function Score({ score }) {
  return (
    <div className="flex flex-col justify-center space-y-0 text-center bg-white rounded-lg w-16 md:w-24 h-auto">
      <div className="text-score-Text-Color font-body text-xs md:text-sm m-0 p-0">
        SCORE
      </div>
      <div className="font-body font-bold text-xl md:text-6xl m-0 p-0">
        {score}
      </div>
    </div>
  );
}

export default Score;
