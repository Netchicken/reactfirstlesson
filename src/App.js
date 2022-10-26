import "./App.css";
import { useEffect, useState } from "react";

import CalcButtons from "./Components/CalcButtons";
import Inputs from "./Components/Inputs";
import ButtonKeyPad from "./Components/ButtonKeyPad";

function App() {
  const [calculation, setCalculation] = useState("");

  const updateCalculation = (value) => {
    setCalculation(calculation + String(value));
    console.log("updateCalculation", value + " " + first);

    if (value === "=") {
      setCalculation(new Function("return " + calculation));
    }
  };

  return (
    <div className='App'>
      <h1>Simple Calulator</h1>
      <div className='output'>{calculation || "Enter a Number"}</div>
      <ButtonKeyPad updateCalculation={updateCalculation} />
      <CalcButtons updateCalculation={updateCalculation} />
    </div>
  );
}

export default App;
