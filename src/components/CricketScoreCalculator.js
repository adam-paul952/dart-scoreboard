import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const CricketScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  changeRound,
  // round,
  // turn,
}) => {
  const [playerScore, setPlayerScore] = useState([]);

  const handleInput = (number) => {
    playerScore.push(number);
    setPlayerScore([...playerScore]);
    // let num = parseInt(number, 10);
    // let currentPlayer = getCurrentPlayer();
    // currentPlayer.scoreList.push(num);
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
    changeRound();
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

CricketScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  changeRound: PropTypes.func,
  round: PropTypes.number,
  turn: PropTypes.number,
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
