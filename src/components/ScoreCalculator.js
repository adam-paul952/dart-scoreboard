import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculator = ({
  isCricketBoard,
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  changeRound,
  round,
  resetScoreList,
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
    setPlayerList([...playerList]);
    changeTurns();
    changeRound();
    declareWinner();
  };

  const declareWinner = () => {
    if (round >= 10) {
      let [winnerScore, winner] = [-1, null];
      playerList.forEach((player) => {
        const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
        if (totalScore > winnerScore) {
          winnerScore = totalScore;
          winner = player.player;
          alert(`The WINNER is: ${winner}`);
          resetScoreList();
        }
      });
    }
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.key <= 57 || e.key >= 48) {
        console.log(`The value is ${e.key}`);
        handleInput();
      } else if (e.key === "Enter") {
        handleScoreChange();
      }
    };
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <>
      {" "}
      Total: {playerScore}
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
