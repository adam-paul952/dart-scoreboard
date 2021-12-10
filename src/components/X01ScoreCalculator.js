import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import UndoRedo from "./UndoRedo";

const X01ScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  playerListHistory,
  set,
  undo,
  redo,
  canUndo,
  canRedo,
  currentPlayer,
  setCurrentPlayer,
  setTurn,
  turn,
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
    if (score > 180) {
      alert(`Score cannot exceed 180!`);
      setPlayerScore(0);
    } else {
      if (!isNaN(score)) {
        changeTurn(score);
      }
    }
  };

  // TO-DO : Add undo/redo functionality
  // Currently players are not being cycled through
  const changeTurn = (score) => {
    let nowCurrentPlayer = getCurrentPlayer();
    nowCurrentPlayer.scoreList.push(score);
    let playerScoreReduced = nowCurrentPlayer.scoreList.reduce(
      (sum, current) => sum - current
    );
    nowCurrentPlayer.score = playerScoreReduced;
    for (let i = 0; i < nowCurrentPlayer.scoreList.length; i++) {
      if (
        nowCurrentPlayer.scoreList[i] > nowCurrentPlayer.highScore &&
        nowCurrentPlayer.scoreList[i] < 180
      ) {
        nowCurrentPlayer.highScore = nowCurrentPlayer.scoreList[i];
      }
    }
    setPlayerList([...playerList]);
    changeTurns();
    setCurrentPlayer(playerList[turn]);
    set({
      turn: turn,
      playerList: JSON.parse(JSON.stringify(playerList)),
      currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
    });
    declareWinner();
  };

  const declareWinner = () => {
    let winner = null;
    playerList.forEach((player) => {
      if (player.score <= 0) {
        player.score = 0;
        winner = player.playerName;
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

X01ScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
  assignX01PlayerScore: PropTypes.func,
  x01Points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  playerListHistory: PropTypes.array,
  set: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool,
  currentPlayer: PropTypes.object,
  setTurn: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  turn: PropTypes.number,
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

export default X01ScoreCalculator;
