import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  round,
  setRound,
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
    currentPlayer.scoreList.push(score);

    setPlayerList([...playerList]);
    changeTurns();
    changeNumberOfRounds();
    declareWinner();
  };
  const changeNumberOfRounds = () => {
    setRound(round + 1);
  };

  const eraseGameData = () => {
    resetScoreList();
    setRound(0);
  };
  const declareWinner = () => {
    const totalRounds = Math.floor(playerList.length * 9);
    if (round === totalRounds) {
      let [winnerScore, winner] = [-1, null];
      playerList.forEach((player) => {
        const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
        if (totalScore > winnerScore) {
          winnerScore = totalScore;
          winner = player.player;
        }
      });
      return (
        <>
          <Alert variant="success" style={{ fontWeight: "bold" }}>
            <p>The WINNER is: {winner}</p>
            <p>Congratulations!</p>
            <Button
              variant="success"
              className="m-3"
              onClick={() => eraseGameData()}
            >
              Play Again
            </Button>
            <Button
              variant="success"
              as={Link}
              to="/game/create"
              onClick={() => eraseGameData()}
            >
              Choose another game
            </Button>
          </Alert>
        </>
      );
    }
  };

  useEffect(() => {
    console.log(playerList);
  }, [playerList]);

  useEffect(() => {
    const onKeyUp = (e) => {
      const number = playerScore;
      if (e.key <= 57 || e.key >= 48) {
        setPlayerScore(number + e.key);
      }
      if (e.key === "Enter") {
        changeTurnValidate();
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
            {!declareWinner() &&
              getCalculatorKeys().map((keyValue, index) => (
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
      </div>
    </>
  );
};

ScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  setRound: PropTypes.func,
  round: PropTypes.number,
  turn: PropTypes.number,
  resetScoreList: PropTypes.func,
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

export default ScoreCalculator;
