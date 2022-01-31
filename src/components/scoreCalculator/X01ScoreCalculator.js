import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import UndoRedo from "../UndoRedo";
import DisplayX01OutShot from "../DisplayX01OutShot";
import { PingContext } from "../../contexts/PingProvider";
import useStatsAPI from "../../util/useStatsAPI";
import DisplayWinner from "./DisplayWinner";

import ScoreCalculatorKey, { getCalculatorKeys } from "./ScoreCalculatorKeys";

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
  changeRounds,
  showOutShot,
  setShowOutShot,
  winner,
  setWinner,
}) => {
  const { ping } = useContext(PingContext);
  const { updateSinglePlayerStats, updateWinningPlayerStats } = useStatsAPI();
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
    const score = parseInt(playerScore, 10);
    if (score > 180) {
      alert(`Score cannot exceed 180!`);
      setPlayerScore([]);
    } else {
      if (!isNaN(score)) {
        changeTurn(score);
      }
    }
  };

  let nowCurrentPlayer = getCurrentPlayer();

  useEffect(() => {
    const checkForOutShot = () => {
      if (nowCurrentPlayer.score > 170) {
        return null;
      }
      setShowOutShot(true);
    };
    checkForOutShot();
  }, [nowCurrentPlayer, setShowOutShot]);

  const changeTurn = (score) => {
    nowCurrentPlayer.scoreList.push(score);
    let playerScoreReduced = nowCurrentPlayer.scoreList.reduce(
      (sum, current) => sum - current
    );
    if (playerScoreReduced < 0 || playerScoreReduced === 1) {
      alert(`Bust!!`);
      nowCurrentPlayer.scoreList.pop();
      playerScoreReduced = nowCurrentPlayer.scoreList.reduce(
        (sum, current) => sum - current
      );
    }
    nowCurrentPlayer.score = playerScoreReduced;
    for (let i = 0; i < nowCurrentPlayer.scoreList.length; i++) {
      if (
        nowCurrentPlayer.scoreList[i] > nowCurrentPlayer.highScore &&
        nowCurrentPlayer.scoreList[i] <= 180
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
      showOutShot: showOutShot,
    });
    changeRounds();
  };

  const eraseGameData = () => {
    resetScoreList();
    setWinner(null);
    if (ping) {
      updateWinningPlayerStats(winner.id);
      playerList.forEach((player) => {
        updateSinglePlayerStats(player.id);
      });
    }
  };

  useEffect(() => {
    const declareWinner = () => {
      playerList.forEach((player) => {
        if (player.score === 0) {
          setWinner(player);
        }
      });
    };
    declareWinner();
  }, [playerList, setWinner]);

  useEffect(() => {
    const onKeyUp = (e) => {
      let number = parseInt(playerScore, 10);
      if (playerScore.length === 0) {
        number = 0;
      }
      if (e.key <= 57 || e.key >= 48) {
        setPlayerScore(`${number}${e.key}`.replace(/^0+/, ""));
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
      {winner ? (
        <DisplayWinner
          variant="x01"
          eraseGameData={eraseGameData}
          winner={winner}
        />
      ) : (
        <Container fluid className="playerScoreDisplay">
          <Row>
            <Col className="playerScoreTextTotal">
              <p>Total: {playerScore}</p>
            </Col>
          </Row>
        </Container>
      )}
      {!winner && (
        <Container className={showOutShot ? "outShotDisplay" : ""}>
          <Container className={`scoreCalculator${showOutShot ? "X01" : ""}`}>
            <Container className={`scoreKeypad${showOutShot ? "X01" : ""}`}>
              {getCalculatorKeys().map((keyValue, index) => (
                <ScoreCalculatorKey
                  name="score"
                  key={index}
                  keyValue={keyValue}
                  onClick={handleScoreChange}
                  onChange={handleInput}
                />
              ))}
            </Container>
            <Container
              className={showOutShot ? "undoRedoX01 mt-4" : "undoRedo mt-4"}
            >
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
                setShowOutShot={setShowOutShot}
                variant="x01"
              />
            </Container>
          </Container>
          {showOutShot && (
            <DisplayX01OutShot getCurrentPlayer={getCurrentPlayer} />
          )}
        </Container>
      )}
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
  playerListHistory: PropTypes.object,
  set: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool,
  currentPlayer: PropTypes.object,
  setTurn: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  turn: PropTypes.number,
  changeRounds: PropTypes.func,
  showOutShot: PropTypes.bool,
  setShowOutShot: PropTypes.func,
  winner: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setWinner: PropTypes.func,
};

export default X01ScoreCalculator;
