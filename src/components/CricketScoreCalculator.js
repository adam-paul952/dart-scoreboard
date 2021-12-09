import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Container, Button, ButtonGroup } from "react-bootstrap";

const CricketScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
}) => {
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

  const currentPlayer = getCurrentPlayer();

  const changeTurnValidate = () => {
    playerScoreList.forEach((score) => {
      if (score === "Bull") {
        currentPlayer.scoreList.push(25);
        setPlayerScoreList([]);
      } else {
        currentPlayer.scoreList.push(score);
        setPlayerScoreList([]);
      }
    });
    changeTurn();
  };

  const changeTurn = () => {
    changeTurns();
    setPlayerList([...playerList]);
    calculatePlayerScore();
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
      let countedScore = currentPlayer.scoreList.filter(
        (hitNum) => hitNum === targets[i]
      );
      countedScore.splice(0, 3);
      let newScore = countedScore.reduce((a, b) => a + b, 0);
      newScoreArray.push(newScore);
    }
    currentPlayer.score = newScoreArray.reduce((a, b) => a + b, 0);
  };

  const declareWinner = () => {
    let winner = null;
    // let winningScore = -1;

    const countPlayerArray = targets.map((target) => {
      const playerArrayOccurences = currentPlayer.scoreList.filter(
        (hitNum) => hitNum === target
      ).length;
      return playerArrayOccurences;
    });

    if (
      countPlayerArray.every((value) => value >= 3) &&
      currentPlayer.score >= 0
    ) {
      winner = currentPlayer.playerName;
      console.log(`Winner is ${winner}`);

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
        <p>Total: {playerScoreList.toString()}</p>
        {declareWinner()}
        <div className="scoreCalculator">
          <div className="scoreKeypad">
            {getCalculatorKeys().map((keyValue, index) => (
              <CricketScoreCalculatorKey
                name="score"
                key={index}
                keyValue={keyValue}
                onChange={handleInput}
                onClick={handleScoreChange}
                disabled={disable[index]}
              />
            ))}
          </div>
        </div>
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
};

const getCalculatorKeys = () => {
  return [20, 19, 18, 17, 16, 15, "Bull", "Del", "Enter"];
};

const CricketScoreCalculatorKey = (props) => {
  return (
    <ButtonGroup
      onChange={() => {
        props.onChange(props.keyValue);
      }}
    >
      <Button
        variant="primary"
        onClick={() => props.onClick(props.keyValue)}
        disabled={props.disabled}
      >
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

CricketScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
  disabled: PropTypes.bool,
};

export default CricketScoreCalculator;
