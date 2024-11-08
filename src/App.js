import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      if (input.trim() === "") {
        setResult("Error");
        return;
      }
      if (/0\s*\/\s*0/g.test(input)) {
        setResult("NaN");
        return;
      }
      if (/\/\s*0(?![0-9])/g.test(input)) {
        setResult("Infinity");
        return;
      }
      let evalResult = eval(input);

      if (evalResult === Infinity) {
        setResult("Infinity");
      } else if (Number.isNaN(evalResult)) {
        setResult("Invalid Input");
      } else {
        setResult(evalResult);
      }
    } catch (error) {
      setResult("Error");
    }
    setInput("");
  };

  return (
    <div className="App">
      <div className="Calculator">
        <h1>React Calculator </h1>

        <input type="text" placeholder="0" value={input} />

        <div className="result">{result && <p>{result}</p>}</div>
        <div className="container">
          <button
            className=""
            onClick={() => {
              handleNumber("7");
            }}
          >
            7
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("8");
            }}
          >
            8
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("9");
            }}
          >
            9
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("+");
            }}
          >
            +
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("4");
            }}
          >
            4
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("5");
            }}
          >
            5
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("6");
            }}
          >
            6
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("-");
            }}
          >
            -
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("1");
            }}
          >
            1
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("2");
            }}
          >
            2
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("3");
            }}
          >
            3
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("*");
            }}
          >
            *
          </button>
          <button className="" onClick={handleClear}>
            C
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("0");
            }}
          >
            0
          </button>
          <button className="" onClick={handleCalculate}>
            =
          </button>
          <button
            className=""
            onClick={() => {
              handleNumber("/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
