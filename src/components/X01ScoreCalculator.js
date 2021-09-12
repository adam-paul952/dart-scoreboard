import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

const X01ScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
}) => {
  const [playerScore, setPlayerScore] = useState("");

  const handleInput = (number) => {
    setPlayerScore(`${playerScore}${number}`);
  };

  const deleteInput = () => {
    setPlayerScore("");
  };

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
      setPlayerScore("");
    } else if (value === "Del") {
      deleteInput();
    } else {
      handleInput(value);
    }
  };

  const changeTurnValidate = () => {
    const score = parseInt(playerScore, 10);
    if (!isNaN(score)) {
      changeTurn(score);
    }
  };

  const changeTurn = (score) => {
    let currentPlayer = getCurrentPlayer();
    currentPlayer.score -= score;
    setPlayerList([...playerList]);
    changeTurns();
    declareWinner();
  };

  const declareWinner = () => {
    let winner = null;
    playerList.forEach((player) => {
      if (player.score === 0) {
        winner = player.player;
      }
    });
    if (!winner) {
      return (
        <>
          <p>Total: {playerScore}</p>
        </>
      );
    }
    return (
      <>
        <Alert variant="success" style={{ fontWeight: "bold" }}>
          <p>The WINNER is: {winner}</p>
          <p>Congratulations!</p>
          <Button
            variant="success"
            as={Link}
            to="/game/x01/create"
            className="m-3"
            onClick={() => resetScoreList()}
          >
            Play Again
          </Button>
          <Button
            variant="success"
            as={Link}
            to="/game/create"
            onClick={() => resetScoreList()}
          >
            Choose another game
          </Button>
        </Alert>
      </>
    );
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      const number = playerScore;
      if (e.key <= 57 || e.key >= 48) {
        setPlayerScore(number + e.key);
      }
      if (e.key === "Enter") {
        changeTurnValidate();
        setPlayerScore("");
      } else if (e.key === "Backspace") {
        deleteInput();
      }
    };
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  });

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

X01ScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
  assignX01PlayerScore: PropTypes.func,
  x01Points: PropTypes.number,
};

const getCalculatorKeys = () => {
  return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", "0", "Enter"];
};

const ScoreCalculatorKey = (props) => {
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

ScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
};

export default X01ScoreCalculator;
