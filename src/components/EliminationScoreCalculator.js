import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

const EliminationScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  turn,
  resetScoreList,
}) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [prevPlayerScore, setPrevPlayerScore] = useState(-1);
  const [playerIsOut, setPlayerIsOut] = useState([]);

  const handleInput = (number) => {
    setPlayerScore(`${playerScore}${number}`);
  };

  const deleteInput = () => {
    setPlayerScore(0);
  };

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
      setPlayerScore(0);
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
    let currentPlayer = playerList[turn];
    if (currentPlayer.lives !== 0) {
      currentPlayer.scoreList.push(score);
      for (let i = 0; i < currentPlayer.scoreList.length; i++) {
        currentPlayer.score = currentPlayer.scoreList[i];
        if (currentPlayer.score < prevPlayerScore) {
          currentPlayer.lives -= 1;
        }
      }
    }
    if (currentPlayer.lives === 0) {
      playerIsOut.push(currentPlayer);
      setPlayerIsOut([...playerIsOut]);
    } else {
      changeTurns();
    }
    setPrevPlayerScore(currentPlayer.score);
    setPlayerList([...playerList]);
    changeTurns();
    declareWinner();
  };

  const declareWinner = () => {
    let winner = null;
    if (playerList.length === playerIsOut.length + 1) {
      playerList.forEach((player) => {
        if (player.lives > 0) {
          winner = player.player;
          console.log(`The winner is ${winner}`);
        }
      });
      if (winner) {
        return (
          <>
            <Alert variant="success" style={{ fontWeight: "bold" }}>
              <p>The WINNER is: {winner}</p>
              <p>Congratulations!</p>
              <Button
                variant="success"
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
      }
    }
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      const number = playerScore;
      if (e.key <= 57 || e.key >= 48) {
        setPlayerScore(number + e.key);
      }
      if (e.key === "Enter") {
        changeTurnValidate();
        setPlayerScore(0);
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
      {declareWinner() ? declareWinner() : <p>Total: {playerScore}</p>}
      <div className="scoreCalculator">
        <div className="scoreInput">
          <div className="scoreKeypad">
            {getCalculatorKeys().map((keyValue, index) => (
              <EliminationScoreCalculatorKey
                name="score"
                key={index}
                keyValue={keyValue}
                onClick={handleScoreChange}
                onChange={handleInput}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

EliminationScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  turn: PropTypes.number,
  resetScoreList: PropTypes.func,
};

const getCalculatorKeys = () => {
  return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", "0", "Enter"];
};

const EliminationScoreCalculatorKey = (props) => {
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

EliminationScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
};

export default EliminationScoreCalculator;
