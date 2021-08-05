import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const ScoreCalculator = ({ isCricketBoard }) => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState('0');

  const handleInput = (number) => {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  };

  const deleteInput = () => {
    setNextValue('0');
    setPrevValue(0);
  };

  const handleScoreChange = (value) => {
    if (Number.isInteger(value)) {
      handleInput(parseInt(value, 10));
    } else if (value === 'Del') {
      deleteInput();
    } else if (value === 'Enter') {
      setPrevValue(nextValue);
    }
  };

  useEffect(() => {
    console.log(nextValue);
    console.log(prevValue);
  });

    return (
    <div className="scoreCalculator">
      <div className="scoreInput">
        <div className="result">
          {nextValue}
        </div>
        {
          isCricketBoard ?
          <div className="scoreKeypad">
                  <CricketScoreCalculatorKey keyValue={20} onClick={handleScoreChange}/>
                  <CricketScoreCalculatorKey keyValue={19} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={18} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={17} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={16} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={15} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={'Del'} onClick={handleScoreChange} />
                  <CricketScoreCalculatorKey keyValue={25} onClick={handleScoreChange}/>
                  <CricketScoreCalculatorKey keyValue={'Enter'} onClick={handleScoreChange} />
                </div>
          : <div className="scoreKeypad">
          <ScoreCalculatorKey keyValue={9} onClick={handleScoreChange}/>
          <ScoreCalculatorKey keyValue={8} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={7} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={6} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={5} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={4} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={3} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={2} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={1} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={'Del'} onClick={handleScoreChange} />
          <ScoreCalculatorKey keyValue={0} onClick={handleScoreChange}/>
          <ScoreCalculatorKey keyValue={'Enter'} onClick={handleScoreChange} />
        </div>
          }
      </div>
    </div>
  );
}

const ScoreCalculatorKey = (props) => {
  return (
    <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>{props.keyValue}</Button>
  );
}

const CricketScoreCalculatorKey = (props) => {
  return (
    <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>{props.keyValue}</Button>
  );
}

export default ScoreCalculator;

/*------------------------------------------------------------------- */

// return (
//   <div className="scoreCalculator">
//     <div className="scoreInput">
//       <div className="result">
//         {nextValue}
//       </div>
//       
//     </div>
//   </div>
// );

