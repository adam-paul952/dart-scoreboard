import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const ScoreCalculator = () => {
  const [] = useState();
  const [] = useState();
  const [] = useState();

    return (
    <div className="scoreCalculator">
      <div className="scoreInput">
        <div className="result">
          
        </div>
        <div className="scoreKeypad">
          <ScoreCalculatorKey keyValue={9} />
          <ScoreCalculatorKey keyValue={8} />
          <ScoreCalculatorKey keyValue={7} />
          <ScoreCalculatorKey keyValue={6} />
          <ScoreCalculatorKey keyValue={5} />
          <ScoreCalculatorKey keyValue={4} />
          <ScoreCalculatorKey keyValue={3} />
          <ScoreCalculatorKey keyValue={2} />
          <ScoreCalculatorKey keyValue={1} />
          <ScoreCalculatorKey keyValue={'Del'} />
          <ScoreCalculatorKey className="key-zero" keyValue={0} />
          <ScoreCalculatorKey  keyValue={'Submit'} />
        </div>
      </div>
    </div>
  );
}

const ScoreCalculatorKey = (props) => {
  return (
    <Button variant="secondary" className={`${props.className}`} onClick={() => props.onClick(props.keyValue)}>{props.keyValue}{" "}</Button>
  );
}

export default ScoreCalculator;