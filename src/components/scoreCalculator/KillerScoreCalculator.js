import React, { useState } from "react";
import Proptypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";

const KillerScoreCalculator = ({
  getCurrentPlayer,
  playerList,
  setPlayerList,
}) => {
  const currentPlayer = getCurrentPlayer();
  const [assignPlayerTarget, setAssignPlayerTarget] = useState([]);
  const [playerScoreList, setPlayerScoreList] = useState([]);
  const [playerScore, setPlayerScore] = useState();

  const assignPlayerScore = (number) => {
    setPlayerScore(number);
    currentPlayer.score = number;
    setPlayerList([...playerList]);
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
        <input placeholder="Player Score" value={playerScore}></input>
        <Button onClick={() => assignPlayerScore(playerScore)}>Submit</Button>
      </Container>
    </>
  );
};

KillerScoreCalculator.propTypes = {
  getCurrentPlayer: Proptypes.func,
  playerList: Proptypes.array,
  setPlayerList: Proptypes.func,
};

export default KillerScoreCalculator;
