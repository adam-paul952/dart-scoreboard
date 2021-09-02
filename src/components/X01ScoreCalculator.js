import React, { useState, useEffect } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";

const X01ScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
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
    currentPlayer.score -= score;
    setPlayerList([...playerList]);

    changeTurns();
    declareWinner();
  };

  const declareWinner = () => {
    let winner = null;
    playerList.forEach((player) => {
      if (player.score === 0) {
        winner = player.player;
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
      </div>
    </>
  );
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
      <Button variant="secondary" onClick={() => props.onClick(props.keyValue)}>
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

export default X01ScoreCalculator;
