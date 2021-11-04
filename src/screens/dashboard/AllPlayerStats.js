import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { displaySessionUserUuidToken } from "../../util/useSessionStorage";
import useStatsAPI from "../../util/useStatsAPI";

const DisplayAllPlayerStatsButton = () => {
  const userId = displaySessionUserUuidToken();
  const [show, setShow] = useState(false);

  const { getStatsForAllPlayers, allPlayerStats } = useStatsAPI();

  const onFindAllStats = () => {
    getStatsForAllPlayers(userId);
    setShow(true);
  };

  return (
    <>
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          onFindAllStats();
        }}
      >
        All Player Stats
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Player Name</Col>
            <Col>Games Played</Col>
            <Col>Games Won</Col>
            <Col>Win Percentage</Col>
          </Row>
          {allPlayerStats.map((player) => {
            return (
              <>
                <Row key={player.id}>
                  <Col key={player.id}>{player.playerName}</Col>
                  <Col key={player.id}>{player.gamesPlayed}</Col>
                  <Col key={player.id}>{player.gamesWon}</Col>
                  <Col key={player.id}>{player.winPercentage}</Col>
                </Row>
              </>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayAllPlayerStatsButton;
