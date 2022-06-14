import React, { useState } from "react";
import "./App.scss";
import Calculator from "./components/Calculator/Calculator";
import ResultBox from "./components/ResultBox/ResultBox";

function App() {
  const [result, setResult] = useState();

  const getTargetValues = (event, numberOfInputs) => {
    const inputs = [];
    for (let i = 0; i < numberOfInputs; i++) {
      inputs.push(event.target[i].value);
    }
    return inputs;
  };

  const calculateInputs = (firstInput, operator, secondInput) => {
    if (operator === "add") {
      setResult(Math.round((parseFloat(firstInput) + parseFloat(secondInput)) * 100) / 100);
    } else if (operator === "subtract") {
      setResult(Math.round((parseFloat(firstInput) - parseFloat(secondInput)) * 100) / 100);
    } else if (operator === "multiply") {
      setResult(Math.round((parseFloat(firstInput) * parseFloat(secondInput)) * 100) / 100);
    } else if (operator === "divide") {
      setResult(Math.round((parseFloat(firstInput) / parseFloat(secondInput)) * 100) / 100);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = getTargetValues(event, 3);
    calculateInputs(inputs[0], inputs[1], inputs[2]);
  };

  return (
    <div className="App">
      <Calculator handleSubmit={handleSubmit} />
      <ResultBox result={result} />
    </div>
  );
}

export default App;
