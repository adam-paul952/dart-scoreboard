import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

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
    if (currentPlayer.score === 0) {
      declareWinner();
      console.log(`The Winner is: ${currentPlayer.player}`);
    }
    changeTurns();
  };

  const declareWinner = () => {
    playerList.forEach((player) => {
      if (player.score === 0) {
        return (
          <>
            <p>The WINNER is: {player.player}</p>
            <p>Congratulations!</p>
          </>
        );
      }
    });
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
      {/* <p>Total: {playerScore}</p> */}
      {declareWinner() ? declareWinner() : <p>Total: {playerScore}</p>}
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
