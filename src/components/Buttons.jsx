import React from "react";
import '../components/Buttons.css'

function Buttons() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="buttonsContainer">
      {buttonNames.map((btn) => (
        <button key={buttonNames} className="button">{btn} </button>
      ))}
    </div>
  );
}

export default Buttons;
