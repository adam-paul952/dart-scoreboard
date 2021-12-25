import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import UndoRedo from "../UndoRedo";

const KillerScoreCalculator = ({
  getCurrentPlayer,
  playerList,
  setPlayerList,
  // round,
  // setRound,
  // changeTurns,
  // changeRounds,
  // turn,
}) => {
  const currentPlayer = getCurrentPlayer();
  const [playerTargets, setPlayerTargets] = useState(
    playerList.map((player) => {
      return player.score;
    })
  );
  const [playerScoreList, setPlayerScoreList] = useState([]);
  const [playerScore, setPlayerScore] = useState([]);

  const handleScoreInput = (number) => {
    setPlayerScore(`${playerScore}${number}`);
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

  const changeTurnValidate = () => {
    let score = parseInt(playerScore, 10);
    if (playerScore.length === 0) {
      score = 0;
    } else {
      if (!isNaN(score)) {
        changeTurn(score);
      }
    }
  };

  useEffect(() => {
    console.log(playerTargets);
  }, [playerTargets]);

  const changeTurn = (score) => {
    let nowCurrentPlayer = getCurrentPlayer();
    nowCurrentPlayer.scoreList.push(score);
    setPlayerList([...playerList]);
    // changeTurns();
    // setCurrentPlayer(playerList[turn]);
    // changeNumberOfRounds();
    // set({
    //   turn: turn,
    //   playerList: JSON.parse(JSON.stringify(playerList)),
    //   currentPlayer: JSON.parse(JSON.stringify(currentPlayer)),
    // });
    // declareWinner();
  };

  return (
    <>
      <Container fluid className="playerScoreDisplay">
        <Row xs={2} md={2} lg={2}>
          <Col className="playerScoreTextTotal">
            <p>Total:</p>
          </Col>
          <Col className="playerScoreTextScore">
            <p>{playerScoreList}</p>
          </Col>
        </Row>
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
          </Container>

          <Container className="undoRedo mt-4">
            <UndoRedo />
          </Container>
        </Container>
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
};

export default KillerScoreCalculator;

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
      <Button variant="primary" onClick={() => props.onClick(props.keyValue)}>
        {props.keyValue}
      </Button>
    </ButtonGroup>
  );
};

ScoreCalculatorKey.propTypes = {
  keyValue: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
  onChange: () => {},
  onClick: () => {},
};
