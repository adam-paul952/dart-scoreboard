import React from "react";

const CricketScoreCalculator = () => {
  return (
    <>
      {declareWinner()}
      <div className="scoreCalculator">
        <div className="scoreKeypad">
          {getCalculatorKeys().map((keyValue, index) => (
            <ScoreCalculatorKey
              name="score"
              key={index}
              keyValue={keyValue}
              onClick={handleScoreChange}
              onChange={handleInput}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const getCalculatorKeys = () => {
  return [20, 19, 18, 17, 16, 15, "Del", 25, "Enter"];
};

const CricketScoreCalculatorKey = (props) => {
  return (
    <ButtonGroup
      onChange={() => {
        props.onChange(props.keyValue);
      }}
    >
      <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

export default CricketScoreCalculator;
