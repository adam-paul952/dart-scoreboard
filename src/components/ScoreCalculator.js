import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import UndoRedo from "./UndoRedo";

const ScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  round,
  setRound,
  changeRounds,
  turn,
  setTurn,
  setCurrentPlayer,
  currentPlayer,
  playerListHistory,
  set,
  undo,
  redo,
  canUndo,
  canRedo,
}) => {
  const [playerScore, setPlayerScore] = useState(0);

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
    let nowCurrentPlayer = getCurrentPlayer();
    nowCurrentPlayer.scoreList.push(score);
    setPlayerList([...playerList]);
    changeTurns();
    setCurrentPlayer(playerList[turn]);
    changeNumberOfRounds();
    set({
      turn: turn,
      playerList: JSON.parse(JSON.stringify(playerList)),
      currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
    });
    declareWinner();
  };

  const changeNumberOfRounds = () => {
    changeRounds();
  };

  const eraseGameData = () => {
    resetScoreList();
    setRound(1);
  };

  const declareWinner = () => {
    const totalRounds = 10;
    if (round === totalRounds) {
      let [winnerScore, winner] = [-1, null];
      playerList.forEach((player) => {
        const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
        if (totalScore > winnerScore) {
          winnerScore = totalScore;
          winner = player.playerName;
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
    const onKeyUp = (e) => {
      const number = parseInt(playerScore, 10);
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

  useEffect(() => {
    const onMouseDown = (e) => {
      e.preventDefault();
      e.target.blur();
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  });

  return (
    <>
      {declareWinner() ? (
        declareWinner()
      ) : (
        <div className="playerScoreDisplay">
          <p className="playerScoreText">Total:</p>
          <p className="playerScoreText"> {playerScore}</p>
        </div>
      )}
      <div className="scoreCalculator">
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
        <div className="undoRedo mt-4">
          <UndoRedo
            undo={undo}
            redo={redo}
            set={set}
            canUndo={canUndo}
            canRedo={canRedo}
            playerListHistory={playerListHistory}
            setPlayerList={setPlayerList}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setTurn={setTurn}
          />
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
  resetScoreList: PropTypes.func,
  turn: PropTypes.number,
  round: PropTypes.number,
  setRound: PropTypes.func,
  changeRounds: PropTypes.func,
  setTurn: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  currentPlayer: PropTypes.object,
  playerListHistory: PropTypes.object,
  set: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool,
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
      <Button variant="primary" onClick={() => props.onClick(props.keyValue)}>
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
