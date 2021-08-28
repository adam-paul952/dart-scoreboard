import React, { useState } from "react";
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
    changeTurns();

    declareWinner(currentPlayer, score);
  };

  const declareWinner = (currentPlayer, score) => {
    if (score === 0) {
      return (
        <>
          <p>The WINNER is: {currentPlayer}</p>
          <p>Congratulations!</p>
        </>
      );
    }
    let [winnerScore, winner] = [0, null];
    playerList.forEach((player) => {
      const totalScore = player.score - score;
      // console.log(totalScore);
      if (totalScore === winnerScore) {
        winnerScore = totalScore;
        winner = player.player;
      }
      if (winner !== null) {
        return (
          <>
            <p>The WINNER is: {winner}</p>
            <p>Congratulations!</p>
          </>
        );
      }
    });
  };
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
