import React from 'react'
import "./CalculatorInputs.scss"

const CalculatorInputs = ({handleSubmit,getOperator} ) => {

  return (
    <form onSubmit={handleSubmit} className="calculator-inputs">
        <div className="calculator-inputs__int-input">
          <label htmlFor="first-int">Enter first number here</label>
          <input id="first-int" type="number" min="0"  step="any"/>
        </div>
        <p htmlFor="operations">Choose an operation:</p>

        <button onClick={getOperator} type="button" value="add">Add</button>
        <button onClick={getOperator}  type="button" value="add">Subtract</button>
        <button onClick={getOperator}  type="button" value="add">Divide</button>
        <button onClick={getOperator}  type="button" value="add">Multiply</button>
      
        <div className="calculator-inputs__int-input">
          <label htmlFor="second-int">Enter second number here</label>
          <input id="second-int" type="number" min="0" step="any"/>
        </div>
        <button data-testid="button" type="submit">Calculate</button>
      </form>
  )
}

export default CalculatorInputs