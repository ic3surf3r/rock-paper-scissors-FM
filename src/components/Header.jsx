import { useState } from "react";
import logo from "../assets/logo.svg";
import Score from "./Score";

function Header({ score }) {
  return (
    <div
      className="flex justify-between rounded-lg border-4 border-solid border-header-Outline-Color w-10/12 lg:w-5/12
    mx-auto py-5 px-6 "
    >
      <img src={logo} alt="Rock Paper Scissors" />
      <Score score={score} />
    </div>
  );
}

export default Header;