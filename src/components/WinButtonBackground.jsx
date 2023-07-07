function WinButtonBackground({ children, isVisible }) {
  return (
    <div className="w-[35rem] h-[35rem] relative ">
      {/* Largest circle */}
      <div
        className={`w-full h-full rounded-full absolute flex items-center justify-center ${
          isVisible ? "bg-gradient-b3/50 visible" : "invisible"
        }`}
      >
        {/* Medium circle */}
        <div
          className={`w-4/5 h-4/5 rounded-full bg-gradient-b2/50 flex items-center justify-center ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          {/* Smallest circle */}
          <div
            className={`w-3/4 h-3/4 rounded-full bg-gradient-b1/50 flex items-center justify-center relative ${
              isVisible ? "visible" : "invisible"
            }`}
          >
            <div className="visible">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinButtonBackground;
