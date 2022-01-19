import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import UndoRedo from "../UndoRedo";
import { PingContext } from "../../contexts/PingProvider";
import useStatsAPI from "../../util/useStatsAPI";
import DisplayWinner from "./DisplayWinner";

import ScoreCalculatorKey, {
  getCricketCalculatorKeys,
} from "./ScoreCalculatorKeys";

const CricketScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
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
  turn,
}) => {
  const { ping } = useContext(PingContext);
  const { updateSinglePlayerStats, updateWinningPlayerStats } = useStatsAPI();
  const [playerScoreList, setPlayerScoreList] = useState([]);

  const [disable, setDisable] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let targets = [20, 19, 18, 17, 16, 15, 25];

  const handleInput = (number) => {
    playerScoreList.push(number);
    setPlayerScoreList([...playerScoreList]);
  };

  const deleteScore = () => {
    setPlayerScoreList([]);
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

  const nowCurrentPlayer = getCurrentPlayer();

  const changeTurnValidate = () => {
    playerScoreList.forEach((score) => {
      if (score === "Bull") {
        nowCurrentPlayer.scoreList.push(25);
        setPlayerScoreList([]);
      } else {
        nowCurrentPlayer.scoreList.push(score);
        setPlayerScoreList([]);
      }
    });
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    calculatePlayerScore();
    setCurrentPlayer(playerList[turn]);
    set({
      turn: turn,
      playerList: JSON.parse(JSON.stringify(playerList)),
      currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
      disabledButtons: JSON.parse(JSON.stringify(disable)),
    });
    declareWinner();
  };

  const calculatePlayerScore = () => {
    let newScoreArray = [];
    for (let i = 0; i < targets.length; i++) {
      let checkNumOfMarks = playerList.map((player) => {
        return player.scoreList.filter((hitNum) => hitNum === targets[i])
          .length;
      });
      let marks = checkNumOfMarks.every((mark) => mark >= 3);
      if (marks) {
        disable[i] = true;
        setDisable([...disable]);
      }
    }
    for (let i = 0; i < targets.length; i++) {
      let countedScore = nowCurrentPlayer.scoreList.filter(
        (hitNum) => hitNum === targets[i]
      );
      countedScore.splice(0, 3);
      let newScore = countedScore.reduce((a, b) => a + b, 0);
      newScoreArray.push(newScore);
    }
    nowCurrentPlayer.score = newScoreArray.reduce((a, b) => a + b, 0);
  };

  const eraseGameData = () => {
    resetScoreList();
    for (let i in disable) {
      setDisable((disable[i] = false));
    }
    if (ping) {
      updateWinningPlayerStats(winner.id);
      playerList.forEach((player) => {
        updateSinglePlayerStats(player.id);
      });
    }
  };

  let winner = null;

  const declareWinner = () => {
    // let winningScore = -1;

    const countPlayerArray = targets.map((target) => {
      const playerArrayOccurences = nowCurrentPlayer.scoreList.filter(
        (hitNum) => hitNum === target
      ).length;
      return playerArrayOccurences;
    });

    if (
      countPlayerArray.every((value) => value >= 3) &&
      nowCurrentPlayer.score >= 0
    ) {
      winner = nowCurrentPlayer;
      console.log(`Winner is ${winner.playerName}`);

      if (winner) {
        return (
          <DisplayWinner
            variant="cricket"
            winner={winner}
            eraseGameData={eraseGameData}
          />
        );
      }
    }
  };

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
      <Container fluid>
        <Container fluid className="playerScoreDisplay">
          <Row xs={2} md={2} lg={2}>
            <Col className="playerScoreTextTotal">
              <p>Total: {playerScoreList.toString()}</p>
            </Col>
          </Row>
        </Container>
        {declareWinner()}
        <Container className="scoreCalculator">
          <Container className="scoreKeypadCricket">
            {getCricketCalculatorKeys().map((keyValue, index) => (
              <ScoreCalculatorKey
                name="score"
                key={index}
                keyValue={keyValue}
                onChange={handleInput}
                onClick={handleScoreChange}
                disabled={disable[index]}
              />
            ))}
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
              setDisable={setDisable}
              variant="cricket"
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

CricketScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
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
  turn: PropTypes.number,
};

export default CricketScoreCalculator;
