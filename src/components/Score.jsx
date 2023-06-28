function Score({ score }) {
  return (
    <div className="flex flex-col justify-center space-y-0 text-center bg-white rounded-lg w-24">
      <div className="text-score-Text-Color font-body text-sm m-0 p-0">
        SCORE
      </div>
      <div className="font-body font-bold text-6xl m-0 p-0">{score}</div>
    </div>
  );
}

export default Score;
