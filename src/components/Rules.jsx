function Rules() {
  const onClick = () => {
    console.log("Rules Modal PopsUP");
  };

  return (
    <div
      onClick={onClick}
      className="rounded-lg border-4 border-solid border-header-Outline-Color  py-2 px-8 cursor-pointer"
    >
      <p className="font-body text-white font-thin tracking-widest">RULES</p>
    </div>
  );
}

export default Rules;
