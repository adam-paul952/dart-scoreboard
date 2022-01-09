import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import UndoRedo from "../UndoRedo";
import { PingContext } from "../../contexts/PingProvider";
import useStatsAPI from "../../util/useStatsAPI";
import DisplayWinner from "./DisplayWinner";

import ScoreCalculatorKey, { getCalculatorKeys } from "./ScoreCalculatorKeys";

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
  const { updateSinglePlayerStats, updateWinningPlayerStats } = useStatsAPI();
  const { ping } = useContext(PingContext);
  const [playerScore, setPlayerScore] = useState([]);

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
    let score = parseInt(playerScore, 10);
    if (playerScore.length === 0) {
      score = 0;
    }
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
    if (ping) {
      updateWinningPlayerStats(winner.id);
      playerList.forEach((player) => {
        updateSinglePlayerStats(player.id);
      });
    }
  };

  let winner = null;

  const declareWinner = () => {
    const totalRounds = 10;
    let winnerScore = -1;
    if (round === totalRounds) {
      playerList.forEach((player) => {
        const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
        if (totalScore > winnerScore) {
          winnerScore = totalScore;
          winner = player;
        }
      });
      return (
        <DisplayWinner
          variant="baseball"
          winner={winner}
          eraseGameData={eraseGameData}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      const number = parseInt(playerScore, 10);
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
      <Container className="scoreCalculator">
        <Container className="scoreKeypad">
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
        </Container>
        {!declareWinner() && (
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
        )}
      </Container>
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

export default ScoreCalculator;
