import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

import UndoRedo from "./UndoRedo";

const EliminationScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  turn,
  resetScoreList,
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

  const passPlayerTurn = () => {
    changeTurns();
  };

  const changeTurn = (score) => {
    let nowCurrentPlayer = playerList[turn];

    if (nowCurrentPlayer.lives !== 0) {
      nowCurrentPlayer.scoreList.push(score);
      for (let i = 0; i < nowCurrentPlayer.scoreList.length; i++) {
        nowCurrentPlayer.score = nowCurrentPlayer.scoreList[i];
        setPrevPlayerScore(nowCurrentPlayer.score);
      }
    }
    if (prevPlayerScore > nowCurrentPlayer.score) {
      nowCurrentPlayer.lives -= 1;
    }
    if (nowCurrentPlayer.lives === 0) {
      playerIsOut.push(nowCurrentPlayer);
      setPlayerIsOut([...playerIsOut]);
      passPlayerTurn();
    } else {
      changeTurns();
    }

    setPlayerList([...playerList]);
    setCurrentPlayer(playerList[turn]);
    set({
      turn: turn,
      playerList: JSON.parse(JSON.stringify(playerList)),
      currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
    });
    changeTurns();
    declareWinner();
  };

  const declareWinner = () => {
    let winner = null;
    if (playerList.length === new Set(playerIsOut).size + 1) {
      playerList.forEach((player) => {
        if (player.lives > 0) {
          winner = player.playerName;
        }
      });
      console.log(`The winner is ${winner}`);
      if (winner) {
        return (
          <>
            <Alert variant="success" style={{ fontWeight: "bold" }}>
              <p>The WINNER is: {winner}</p>
              <p>Congratulations!</p>
              <Button
                variant="success"
                className="m-3"
                as={Link}
                to="/game/elimination/create"
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

EliminationScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  turn: PropTypes.number,
  resetScoreList: PropTypes.func,
  setTurn: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  currentPlayer: PropTypes.object,
  playerListHistory: PropTypes.array,
  set: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool,
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
      <Button variant="primary" onClick={() => props.onClick(props.keyValue)}>
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
