function WinButtonBackground({ children }) {
  return (
    <div className="w-[40rem] h-[40rem] relative ">
      {/* Largest circle */}
      <div className="w-full h-full rounded-full bg-gradient-b3/50 absolute flex items-center justify-center">
        {/* Medium circle */}
        <div className="w-5/6 h-5/6 rounded-full bg-gradient-b2/50 flex items-center justify-center">
          {/* Smallest circle */}
          <div className="w-4/6 h-4/6 rounded-full bg-gradient-b1/50 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinButtonBackground;
