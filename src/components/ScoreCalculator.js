import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculator = ({ isCricketBoard, playerList, updatePlayerScore }) => {
  const initialTurnState = playerList[0].player;
  const [turn, setTurn] = useState(initialTurnState);
  // const [playerScoreList, setPlayerScoreList] = useState([]);
  const [playerScore, setPlayerScore] = useState("");
  const [playerData, setPlayerData] = useState(playerList);

  console.log(playerData);

  const handleInput = (number) => {
    setPlayerScore(`${playerScore}${number}`);
  };

  const deleteInput = () => {
    setPlayerScore(0);
  };

  console.log(turn);

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
      // console.log(playerScore);
      // console.log(playerScoreList);
    } else if (value === "Del") {
      deleteInput();
      console.log("Entry was deleted");
    } else {
      handleInput(value);
    }
    setPlayerScore(value);
  };

  const onUpdateScore = (value) => {
    setPlayerScore(value);
  };

  const changeTurnValidate = () => {
    const score = Number(playerScore);
    if (!isNaN(score)) {
      changeTurn(score);
    }
  };

  const changeTurn = (score) => {
    if (turn === initialTurnState) {
      playerList[0].scoreList.push(score);
      setPlayerData(playerList[0].scoreList);
      setTurn(playerList[1].player);
    } else if (turn === playerList[1].player) {
      playerList[1].scoreList.push(score);
      setPlayerData(playerList[1].scoreList);
      setTurn(playerList[0].player);
    }
    console.log(playerList);

    // if (turn === "Player 1") {
    //   player1ScoreList.push(score);
    //   setPlayer1ScoreList(player1ScoreList);
    //   setTurn("Player 2");
    //   setPlayer1Score(player1Score + score);
    //   console.log(`Player 1 score is ${score}`);
    //   console.log(`Player 1 scorelist is ${player1ScoreList}`);
    // } else if (turn === "Player 2") {
    //   player2ScoreList.push(score);
    //   setPlayer2ScoreList(player2ScoreList);
    //   setTurn("Player 1");
    //   setPlayer2Score(player2Score + score);
    //   console.log(`Player 2 score is ${score}`);
    //   console.log(`Player 2 scorelist is ${player2ScoreList}`);
    // }
  };
  return (
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
                onChange={onUpdateScore}
              />
            ))}
          </div>
        )}
      </div>
      {/* <Button
        onClick={() => {
          console.log(playerScore);
        }}
      >
        Show State
      </Button> */}
    </div>
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
