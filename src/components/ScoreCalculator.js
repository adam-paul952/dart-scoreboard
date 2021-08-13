import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ScoreCalculator = ({ isCricketBoard }) => {
  const [totalScore, setTotalScore] = useState(null);
  const [currentScore, setCurrentScore] = useState('');

  const handleInput = (number) => {
    setCurrentScore(currentScore + number);
  };

  const deleteInput = () => {
    setCurrentScore(0);
  };

  const handleScoreChange = (value) => {
    if (parseInt(value)) {
      handleInput(parseInt(value, 10));
      console.log(value);
    } else if (value === "Del") {
      deleteInput();
    } else if (value === "Enter") {
      setTotalScore(parseInt(currentScore, 10));
      console.log(totalScore);
      setCurrentScore(0);
    }
  };

  return (
    <div className="scoreCalculator">
      <div className="scoreInput">
        {isCricketBoard ? (
          <div className="scoreKeypad">
            {getCalculatorKeys(isCricketBoard).map((keyValue) => (
              <CricketScoreCalculatorKey
                keyValue={keyValue}
                onClick={handleScoreChange}
              />
            ))}
          </div>
        ) : (
          <div className="scoreKeypad">
            {getCalculatorKeys(isCricketBoard).map((keyValue, index) => (
              <ScoreCalculatorKey
                key={index}
                keyValue={keyValue}
                onClick={handleScoreChange}
              />
            ))}
          </div>
        )}
        <>
          <p>Current Score : {''}{currentScore}</p>
          <hr />
          <p>Total Score : {''}{totalScore}</p>
        </>
      </div>
    </div>
  );
};

const getCalculatorKeys = (isCricketBoard) => {
  if (isCricketBoard) {
    return [20, 19, 18, 17, 16, 15, "Del", 25, "Enter"];
  } else {
    return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", 0, "Enter"];
  }
};

const ScoreCalculatorKey = (props) => {
  return (
    <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
      {props.keyValue}
    </Button>
  );
};

const CricketScoreCalculatorKey = (props) => {
  return (
    <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
      {props.keyValue}{''}
    </Button>
  );
};

export default ScoreCalculator;
