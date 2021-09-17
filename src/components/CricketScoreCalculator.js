import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const CricketScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
}) => {
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
    console.log(`Current player for this round is: ${currentPlayer.player}`);
    playerScore.forEach((score) => {
      if (score === "Bull") {
        currentPlayer.scoreList.push(25);
        setPlayerScore([]);
      } else {
        currentPlayer.scoreList.push(score);
        setPlayerScore([]);
      }
    });
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    // declareWinner();
  };

  // useEffect(() => {
  //   console.log(playerList);
  // }, [playerList]);

  return (
    <>
      <p>Total: {playerScore.toString()}</p>
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
