import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const Calculate = (value) => {
    console.log("The value passed in ", value);

    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(first - second);
          break;

        case "+":
          setAnswer(first + second);
          break;

        case "*":
          setAnswer(first * second);
          break;

        case "/":
          setAnswer(first / second);
          break;
        default:
          setAnswer("Invalid");
      }
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>This is a heading</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
