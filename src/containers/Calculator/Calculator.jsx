import React, { useState } from "react";
import "./Calculator.scss";
import CalculatorInputs from "../../components/CalculatorInputs/CalculatorInputs";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState()

  const getTargetValues = (event) => {
    const inputs = [];
    inputs.push(event.target[0].value)
    inputs.push(event.target[5].value)
    return inputs;
  };

  const calculateInputs = (firstInput, operator, secondInput) => {
    if (operator === "add") {
      setResult(
        Math.round((parseFloat(firstInput) + parseFloat(secondInput)) * 100) /
          100
      );
    } else if (operator === "subtract") {
      setResult(
        Math.round((parseFloat(firstInput) - parseFloat(secondInput)) * 100) /
          100
      );
    } else if (operator === "multiply") {
      setResult(
        Math.round(parseFloat(firstInput) * parseFloat(secondInput) * 100) / 100
      );
    } else if (operator === "divide") {
      setResult(
        Math.round((parseFloat(firstInput) / parseFloat(secondInput)) * 100) /
          100
      );
    }
  };
   const getOperator = (event) => {
    setOperator(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = getTargetValues(event, 3);
    calculateInputs(inputs[0], operator, inputs[1]);
    
  };

 

  return (
    <div className="calculator">
      <CalculatorInputs handleSubmit={handleSubmit} getOperator={getOperator}/>
      <div className="result">
        <h1>Result</h1>
        <h1 data-testid="result">{result}</h1>
      </div>
    </div>
  );
};

export default Calculator;
