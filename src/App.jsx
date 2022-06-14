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
      setResult(parseFloat(firstInput) + parseFloat(secondInput));
    } else if (operator === "subtract") {
      setResult(parseFloat(firstInput) - parseFloat(secondInput));
    } else if (operator === "multiply") {
      setResult(parseFloat(firstInput) * parseFloat(secondInput));
    } else if (operator === "divide") {
      setResult(parseFloat(firstInput) / parseFloat(secondInput));
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
