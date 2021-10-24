import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Modal, Row } from "react-bootstrap";

import { BsClipboardData } from "react-icons/bs";

import useStatsAPI from "../../util/useStatsAPI";

const DisplaySinglePlayerStats = ({ player }) => {
  const [show, setShow] = useState(false);

  const { getStatsForSinglePlayer, singlePlayerStats } = useStatsAPI();

  const onFindStats = (playerid) => {
    getStatsForSinglePlayer(playerid);
    setShow(true);
  };

  return (
    <>
      <Button
        variant="success"
        size="sm"
        onClick={() => {
          onFindStats(player.id);
        }}
      >
        <BsClipboardData style={{ fontSize: 20 }} />
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{player.playerName}&apos;s Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Games Played</Col>
            <Col>Games Won</Col>
            <Col>Win Percentage</Col>
          </Row>
          <Row>
            <Col>{singlePlayerStats.gamesPlayed}</Col>
            <Col>{singlePlayerStats.gamesWon}</Col>
            <Col>{singlePlayerStats.winPercentage}</Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplaySinglePlayerStats;

DisplaySinglePlayerStats.propTypes = {
  player: PropTypes.object.isRequired,
};
