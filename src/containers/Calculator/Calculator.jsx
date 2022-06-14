import React from 'react'
import "./Calculator.scss"
import CalculatorInputs from '../../components/CalculatorInputs/CalculatorInputs'
import ResultBox from '../../components/ResultBox/ResultBox'

const Calculator = ({result, handleSubmit}) => {

  return (
    <div className='calculator'>
      <CalculatorInputs handleSubmit={handleSubmit}/>
      <ResultBox result={result}/>
    </div>
  )
}

export default Calculator