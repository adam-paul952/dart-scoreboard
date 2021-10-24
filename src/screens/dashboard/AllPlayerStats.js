import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import useStatsAPI from "../../util/useStatsAPI";

const DisplayAllPlayerStatsButton = () => {
  const [show, setShow] = useState(false);

  const { getStatsForAllPlayers, allPlayerStats } = useStatsAPI();

  const onFindAllStats = () => {
    getStatsForAllPlayers();
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
                <Row id={player.id}>
                  <Col>{player.id}</Col>
                  <Col>{player.gamesPlayed}</Col>
                  <Col>{player.gamesWon}</Col>
                  <Col>{player.winPercentage}</Col>
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
