import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";
import useGame from "../util/useGame";

const CricketScoreCalculator = () => {
  const { playerList, setPlayerList, changeTurns, getCurrentPlayer } =
    useGame();
  const [playerScore, setPlayerScore] = useState([]);

  const handleInput = (number) => {
    playerScore.push(number);
    setPlayerScore([...playerScore]);
  };

  const deleteScore = () => {
    setPlayerScore([]);
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

  const changeTurnValidate = () => {
    let currentPlayer = getCurrentPlayer();
    playerScore.forEach((score) => {
      currentPlayer.scoreList.push(score);
    });
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    // declareWinner();
  };

  useEffect(() => {
    console.log(playerList);
  }, [playerList]);

  return (
    <>
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
      <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
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
