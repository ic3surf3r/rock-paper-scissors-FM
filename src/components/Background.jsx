function Background({ children }) {
  return (
    <div className="relative text-dark-Text-Color h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-Start-Color to-background-end-Color p-10 overflow-hidden">
      {children}
    </div>
  );
}

export default Background;
