import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

const DisplayCurrentRoundInformation = ({ currentPlayer, round }) => {
  const numOfDarts = () => {
    return round * 3 - 3;
  };
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <b>High Score:</b> {currentPlayer.highScore}
        </Col>
        <Col>
          <b>Number of Darts:</b> {numOfDarts()}
        </Col>
      </Row>
    </Container>
  );
};

DisplayCurrentRoundInformation.propTypes = {
  currentPlayer: PropTypes.object,
  round: PropTypes.number,
};

export default DisplayCurrentRoundInformation;
