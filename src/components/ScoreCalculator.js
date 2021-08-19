import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ScoreCalculator = ({ isCricketBoard, playerList, setPlayerList }) => {
  const initialTurnState = playerList[0].player;
  const [turn, setTurn] = useState(initialTurnState);
  const [playerScore, setPlayerScore] = useState("");
  const [playerData, setPlayerData] = useState(playerList);

  const handleInput = (number) => {
    setPlayerScore(playerScore + number);
  };

  const deleteInput = () => {
    setPlayerScore(0);
  };

  const handleScoreChange = (value) => {
    if (value === "Enter") {
      changeTurnValidate();
      setPlayerScore("");
    } else if (value === "Del") {
      deleteInput();
      console.log("Entry was deleted");
    } else {
      handleInput(value);
    }
  };

  const onUpdateScore = (value) => {
    setPlayerList(value);
  };

  const changeTurnValidate = () => {
    const score = Number(playerScore);
    if (!isNaN(score)) {
      changeTurn(score);
    }
  };

  const changeTurn = (score) => {
    debugger;
    for (let i = 0; i < playerList.length; i++) {
      console.log(playerList[i]);
    }
    // debugger;
    // for (let i = 0; i < playerList.length; i++) {
    //   if (playerList[i].player === turn) {
    //     console.log(playerList.length);
    //     console.log(turn);
    //     playerList[i].scoreList.push(score);
    //     setTurn(playerList[i + 1].player);
    //     setPlayerList([...playerList]);
    //   }
    // }
    // if (turn === initialTurnState) {
    //   playerList[0].scoreList.push(score);
    //   setPlayerData(playerList[0].scorelist);
    //   setTurn(playerList[1].player);
    //   setPlayerList([...playerData]);
    // } else if (turn === playerList[1].player) {
    //   playerList[1].scoreList.push(score);
    //   setTurn(playerList[0].player);
    //   setPlayerList([...playerData]);
    // }
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
                  onChange={onUpdateScore}
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
