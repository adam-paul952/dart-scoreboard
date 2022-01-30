import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";

const CreateGameDashboard = ({
  checkedPlayerList,
  setPlayerList,
  shufflePlayerArray,
}) => {
  return (
    <>
      <Container className="m-3">
        <Row>
          <Col>
            <Button
              as={Link}
              to="/game/create"
              onClick={() => setPlayerList(checkedPlayerList)}
            >
              Create Game
            </Button>
          </Col>
          <Col>
            <Button onClick={() => shufflePlayerArray(checkedPlayerList)}>
              Random Players
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

CreateGameDashboard.propTypes = {
  checkedPlayerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  shufflePlayerArray: PropTypes.func,
};

export default CreateGameDashboard;
