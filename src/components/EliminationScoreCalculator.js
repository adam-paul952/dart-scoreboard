import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const EliminationScoreCalculator = ({
  playerList,
  setPlayerList,
  changeTurns,
  // getCurrentPlayer,
  //   changeRound,
  //   round,
  turn,
}) => {
  const [playerScore, setPlayerScore] = useState("");
  const [prevPlayerScore, setPrevPlayerScore] = useState(-1);

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
      // setPrevPlayerScore(score);
      changeTurn(score);
    }
  };

  const changePrevPlayerScore = (score) => {
    setPrevPlayerScore(score);
  };

  const changeTurn = (score) => {
    let currentPlayer = playerList[turn];
    currentPlayer.score += score;
    setPlayerList([...playerList]);
    if (prevPlayerScore === -1) {
      changePrevPlayerScore(score);
      // currentPlayer.lives - 1;
      console.log(`Prevplayer score was === to -1`);
    }
    changeTurns();
    // changeRound();
    // declareWinner();
  };
  useEffect(() => {
    const score = playerList[turn].score;
    console.log(prevPlayerScore);
    if (score > 0) {
      setPrevPlayerScore(score);
    }
  }, [prevPlayerScore]);

  //   const declareWinner = () => {
  //     if (round >= 9 && turn === 0) {
  //       let [winnerScore, winner] = [-1, null];
  //       playerList.forEach((player) => {
  //         const totalScore = player.scoreList.reduce((a, b) => a + b, 0);
  //         if (totalScore > winnerScore) {
  //           winnerScore = totalScore;
  //           winner = player.player;
  //         }
  //       });
  //       return (
  //         <>
  //           <Alert variant="success" style={{ fontWeight: "bold" }}>
  //             <p>The WINNER is: {winner}</p>
  //             <p>Congratulations!</p>
  //           </Alert>
  //         </>
  //       );
  //     }
  //   };
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
      Total: {playerScore}
      {/* {declareWinner() ? declareWinner() : <p>Total: {playerScore}</p>} */}
      <div className="scoreCalculator">
        <div className="scoreInput">
          <div className="scoreKeypad">
            {getCalculatorKeys().map((keyValue, index) => (
              <EliminationScoreCalculatorKey
                name="score"
                key={index}
                keyValue={keyValue}
                onClick={handleScoreChange}
                onChange={handleInput}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

EliminationScoreCalculator.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  changeRound: PropTypes.func,
  round: PropTypes.number,
  turn: PropTypes.number,
};

const getCalculatorKeys = () => {
  return [9, 8, 7, 6, 5, 4, 3, 2, 1, "Del", "0", "Enter"];
};

const EliminationScoreCalculatorKey = (props) => {
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

EliminationScoreCalculatorKey.propTypes = {
  keyValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: () => {},
  onClick: () => {},
};

export default EliminationScoreCalculator;
