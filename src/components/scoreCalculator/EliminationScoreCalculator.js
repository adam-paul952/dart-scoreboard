import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Container, Col, Row } from "react-bootstrap";

import UndoRedo from "../UndoRedo";
import { PingContext } from "../../contexts/PingProvider";
import useStatsAPI from "../../util/useStatsAPI";
import DisplayWinner from "./DisplayWinner";

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
  const { ping } = useContext(PingContext);
  const { updateSinglePlayerStats, updateWinningPlayerStats } = useStatsAPI();

  const [playerScore, setPlayerScore] = useState([]);
  const [prevPlayerScore, setPrevPlayerScore] = useState(-1);
  const [playerIsOut, setPlayerIsOut] = useState([]);

  const handleInput = (number) => {
    setPlayerScore(`${playerScore}${number}`);
  };

  const deleteInput = () => {
    setPlayerScore([]);
  };

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
      setPlayerScore([]);
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
        if (
          nowCurrentPlayer.lives === 0 &&
          nowCurrentPlayer.scoreList[i] === 0
        ) {
          return;
        }
        nowCurrentPlayer.score = nowCurrentPlayer.scoreList[i];
        setPrevPlayerScore(nowCurrentPlayer.score);
      }
    }
    if (prevPlayerScore >= nowCurrentPlayer.score) {
      nowCurrentPlayer.lives -= 1;
      if (nowCurrentPlayer.lives < 0) {
        nowCurrentPlayer.lives = 0;
      }
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

  const eraseGameData = () => {
    resetScoreList();
    if (ping) {
      updateWinningPlayerStats(winner.id);
      playerList.forEach((player) => {
        updateSinglePlayerStats(player.id);
      });
    }
  };

  let winner = null;

  const declareWinner = () => {
    if (playerList.length === new Set(playerIsOut).size + 1) {
      playerList.forEach((player) => {
        if (player.lives > 0) {
          winner = player;
        }
      });
      console.log(`The winner is ${winner.playerName}`);
      if (winner) {
        return (
          <DisplayWinner
            variant="elimination"
            eraseGameData={eraseGameData}
            winner={winner}
          />
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
        setPlayerScore([]);
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
        <Container fluid className="playerScoreDisplay">
          <Row xs={2} md={2} lg={2}>
            <Col className="playerScoreTextTotal">
              <p>Total:</p>
            </Col>
            <Col className="playerScoreTextScore">
              <p>{playerScore}</p>
            </Col>
          </Row>
        </Container>
      )}
      {!winner && (
        <Container className="scoreCalculator">
          <Container className="scoreInput">
            <Container className="scoreKeypad">
              {getCalculatorKeys().map((keyValue, index) => (
                <EliminationScoreCalculatorKey
                  name="score"
                  key={index}
                  keyValue={keyValue}
                  onClick={handleScoreChange}
                  onChange={handleInput}
                />
              ))}
            </Container>
          </Container>
          <Container className="undoRedo mt-4">
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
          </Container>
        </Container>
      )}
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
