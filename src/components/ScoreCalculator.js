import React, { useState, useEffect } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculator = ({
  isCricketBoard,
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  changeRound,
  round,
  turn,
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
    changeTurns();
    changeRound();
    setPlayerList([...playerList]);
    declareWinner();
  };

  const declareWinner = () => {
    if (round >= 9) {
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
          <Alert variant="success">
            <p>The WINNER is: {winner}</p>
            <p>Congratulations!</p>
          </Alert>
        </>
      );
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
      {" "}
      {declareWinner() ? declareWinner() : <p>Total: {playerScore}</p>}
      <div className="scoreCalculator">
        <div className="scoreInput">
          {isCricketBoard ? (
            <div className="scoreKeypad">
              {getCalculatorKeys(isCricketBoard).map((keyValue, index) => (
                <CricketScoreCalculatorKey
                  key={index}
                  keyValue={keyValue}
                  onClick={handleScoreChange}
                  onChange={handleInput}
                />
              ))}
            </div>
          ) : (
            <div className="scoreKeypad">
              {getCalculatorKeys(isCricketBoard).map((keyValue, index) => (
                <ScoreCalculatorKey
                  name="score"
                  key={index}
                  keyValue={keyValue}
                  onClick={handleScoreChange}
                  onChange={handleInput}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const getCalculatorKeys = (isCricketBoard) => {
  if (isCricketBoard) {
    return [20, 19, 18, 17, 16, 15, "Del", 25, "Enter"];
  } else {
    return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", "0", "Enter"];
  }
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

const CricketScoreCalculatorKey = (props) => {
  return (
    <ButtonGroup
      onChange={() => {
        props.onChange(props.keyValue);
      }}
    >
      <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
        {props.keyValue}
        {""}
      </Button>
    </ButtonGroup>
  );
};

export default ScoreCalculator;
