import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import DisplayWinner from "./DisplayWinner";
// import UndoRedo from "../UndoRedo";

import ScoreCalculatorKey from "./ScoreCalculatorKeys";

const KillerScoreCalculator = ({
  getCurrentPlayer,
  playerList,
  setPlayerList,
  // round,
  // setRound,
  changeTurns,
  changeRounds,
  turn,
  currentPlayer,
  resetScoreList,
  setCurrentPlayer,
}) => {
  const nowCurrentPlayer = getCurrentPlayer();
  const [playerTargets] = useState(
    playerList.map((player) => {
      return player.score;
    })
  );
  const [playerScore, setPlayerScore] = useState([]);
  const [playerIsOut, setPlayerIsOut] = useState([]);

  const handleScoreInput = (number) => {
    playerScore.push(number);
    setPlayerScore([...playerScore]);
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
      handleScoreInput(value);
    }
  };

  const filterPlayerScore = playerScore.filter((score) => {
    return score === nowCurrentPlayer.score;
  });

  const filterOpposingPlayer = playerScore.filter((score) => {
    return score !== nowCurrentPlayer.score;
  });

  const changeTurnValidate = () => {
    filterPlayerScore.forEach((score) => {
      nowCurrentPlayer.scoreList.push(score);
      setPlayerScore([]);
    });

    if (nowCurrentPlayer.scoreList.length > 5) {
      let result = nowCurrentPlayer.scoreList.length - 5;
      nowCurrentPlayer.scoreList.splice(5);
      nowCurrentPlayer.scoreList.splice(-result);
      nowCurrentPlayer.lives -= result;
      setPlayerList([...playerList]);
    }

    nowCurrentPlayer.lives = nowCurrentPlayer.scoreList.length;
    if (nowCurrentPlayer.scoreList.length === 5) {
      nowCurrentPlayer.killer = true;
      setPlayerList([...playerList]);
    }

    if (nowCurrentPlayer.killer === true) {
      playerList.forEach((player) => {
        if (player.lives === 0) {
          playerIsOut.push(currentPlayer);
          setPlayerIsOut([...playerIsOut]);
        }
        for (let i = 0; i < filterOpposingPlayer.length; i++) {
          if (filterOpposingPlayer[i] === player.score) {
            player.lives -= 1;
            player.scoreList.pop();
            if (player.lives <= 0) {
              playerIsOut.push(currentPlayer);
              setPlayerIsOut([...playerIsOut]);
              player.lives = 0;
            }
          }
        }
        if (player.killer === true && player.lives < 5) {
          player.killer = false;
        }
      });
    }
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    setCurrentPlayer(playerList[turn]);
    changeRounds();
    // set({
    //   turn: turn,
    //   playerList: JSON.parse(JSON.stringify(playerList)),
    //   currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
    // });
    declareWinner();
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
            variant="killer"
            eraseGameData={eraseGameData}
            winner={winner}
          />
        );
      }
    }
  };

  const eraseGameData = () => {
    resetScoreList();
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
      {declareWinner() ? (
        declareWinner()
      ) : (
        <Container fluid className="playerScoreDisplay">
          <Row xs={2} md={2} lg={2}>
            <Col className="playerScoreTextTotal">
              <p>Total:</p>
            </Col>
            <Col className="playerScoreTextScore">
              <p>{playerScore.toString()}</p>
            </Col>
          </Row>
        </Container>
      )}
      <Container className="scoreCalculator">
        <Container className="scoreKeypad">
          {playerTargets.map((keyValue, index) => (
            <ScoreCalculatorKey
              name="score"
              key={index}
              keyValue={keyValue}
              onClick={handleScoreChange}
              onChange={handleScoreInput}
            />
          ))}
          <ScoreCalculatorKey
            name="Enter"
            keyValue="Enter"
            onClick={handleScoreChange}
            onChange={handleScoreInput}
          />
          <ScoreCalculatorKey
            name="Del"
            keyValue="Del"
            onClick={handleScoreChange}
            onChange={handleScoreInput}
          />
        </Container>
        {/* <Container className="undoRedo mt-4">
            <UndoRedo />
          </Container> */}
      </Container>
    </>
  );
};

KillerScoreCalculator.propTypes = {
  getCurrentPlayer: Proptypes.func,
  playerList: Proptypes.array,
  setPlayerList: Proptypes.func,
  round: Proptypes.number,
  setRound: Proptypes.func,
  changeTurns: Proptypes.func,
  changeRounds: Proptypes.func,
  turn: Proptypes.number,
  currentPlayer: Proptypes.object,
  resetScoreList: Proptypes.func,
  setCurrentPlayer: Proptypes.func,
};

export default KillerScoreCalculator;
