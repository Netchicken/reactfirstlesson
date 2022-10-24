import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(4);
  const [second, setSecond] = useState(4);

  const Calculate = (value) => {
    // console.log("The value passed in ", value);

    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(first - second);
          break;

        case "+":
          setAnswer(first + second);
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
      <input
        type='number'
        value={Number(first)}
        onChange={(event) => setFirst(event.target.value)}
      />
      <input
        type='number'
        value={Number(second)}
        onChange={(event) => setSecond(event.target.value)}
      />
      =
      <input type='number' defaultValue={answer} />
      <div>
        <button onClick={() => Calculate("+")}>+</button>
        <button onClick={() => Calculate("-")}>-</button>
        <button onClick={() => Calculate("X")}>*</button>
        <button onClick={() => Calculate("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
