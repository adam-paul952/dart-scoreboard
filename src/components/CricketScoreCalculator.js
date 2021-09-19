import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const CricketScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
}) => {
  const [playerScoreList, setPlayerScoreList] = useState([]);
  const targets = [20, 19, 18, 17, 16, 15, 25];

  const handleInput = (number) => {
    playerScoreList.push(number);
    setPlayerScoreList([...playerScoreList]);
  };

  const deleteScore = () => {
    setPlayerScoreList([]);
  };

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
    } else if (value === "Del") {
      deleteScore();
    } else {
      handleInput(value);
    }
  };

  const currentPlayer = getCurrentPlayer();

  const changeTurnValidate = () => {
    playerScoreList.forEach((score) => {
      if (score === "Bull") {
        currentPlayer.scoreList.push(25);
        setPlayerScoreList([]);
      } else {
        currentPlayer.scoreList.push(score);
        setPlayerScoreList([]);
      }
    });
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    calculatePlayerScore();
    // declareWinner();
  };

  const calculatePlayerScore = () => {
    console.log(currentPlayer);
    let newScoreArray = [];
    for (let i = 0; i < targets.length; i++) {
      let countedScore = currentPlayer.scoreList.filter(
        (hitNum) => hitNum === targets[i]
      );
      countedScore.splice(0, 3);
      let newScore = countedScore.reduce((a, b) => a + b, 0);
      newScoreArray.push(newScore);
    }
    currentPlayer.score = newScoreArray.reduce((a, b) => a + b, 0);
  };

  return (
    <>
      <p>Total: {playerScoreList.toString()}</p>
      <div className="scoreCalculator">
        <div className="scoreKeypad">
          {getCalculatorKeys().map((keyValue, index) => (
            <CricketScoreCalculatorKey
              name="score"
              key={index}
              keyValue={keyValue}
              onChange={handleInput}
              onClick={handleScoreChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

CricketScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
};

const getCalculatorKeys = () => {
  return [20, 19, 18, 17, 16, 15, "Del", "Bull", "Enter"];
};

const CricketScoreCalculatorKey = (props) => {
  return (
    <ButtonGroup
      onChange={() => {
        props.onChange(props.keyValue);
      }}
    >
      <Button variant="primary" onClick={() => props.onClick(props.keyValue)}>
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

CricketScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
};

export default CricketScoreCalculator;
