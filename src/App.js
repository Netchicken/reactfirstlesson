import "./App.css";
import { useEffect, useState } from "react";

import CalcButtons from "./Components/CalcButtons";
import Inputs from "./Components/Inputs";
import ButtonKeyPad from "./Components/ButtonKeyPad";

function App() {
  //      get      set
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(4);
  const [second, setSecond] = useState(4);
  const [calculation, setCalculation] = useState("");

  useEffect(() => {
    console.log("useEffect ", first);
  }, [first]);

  const updateCalculation = (value) => {
    setCalculation(calculation + String(value));
    console.log("updateCalculation", value + " " + first);

    if (value === "=") {
      setCalculation(new Function("return " + calculation));
    }
  };

  const Calculate = (value) => {
    // console.log("The value passed in ", value);

    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(first - second);
          break;

        case "+":
          setAnswer(parseInt(first) + parseInt(second));
          break;

        case "X":
          setAnswer(first * second);
          break;

        case "/":
          setAnswer(first / second);
          break;
        default:
          setAnswer("Invalid");
      }
      console.log("The value passed in ", value + " " + answer);
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
