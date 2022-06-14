import React from 'react'
import "./CalculatorInputs.scss"

const CalculatorInputs = ({handleSubmit} ) => {

  return (
    <form onSubmit={handleSubmit} className="calculator-inputs">
        <div className="calculator-inputs__int-input">
          <label htmlFor="first-int">Enter first number here</label>
          <input id="first-int" type="number" min="0"  step="any"/>
        </div>
        <label htmlFor="operations">Choose an operation:</label>
        <select name="operations" id="operations">
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="divide">Divide</option>
          <option value="multiply">Multiply</option>
        </select>
        <div className="calculator-inputs__int-input">
          <label htmlFor="second-int">Enter second number here</label>
          <input id="second-int" type="number" min="0" step="any"/>
        </div>
        <button type="submit">Calculate</button>
      </form>
  )
}

export default CalculatorInputs