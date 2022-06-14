import React from "react";
import "./ResultBox.scss"

const ResultBox = ({result}) => {
  return (
    <div className="result">
      <h1>Result</h1>
      <h1>{result}</h1>
    </div>
  );
};

export default ResultBox;
