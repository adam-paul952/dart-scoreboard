import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CreatePlayerDashboard = ({
  playerName,
  setPlayerName,
  createPlayer,
  userId,
  getPlayerByUserId,
}) => {
  const onCreate = (userId, playerName) => {
    createPlayer(playerName, userId);
    setPlayerName("");
    setTimeout(() => {
      getPlayerByUserId(userId);
    }, 20);
  };

  return (
    <>
      <Form>
        <Container className="mt-5 mb-5" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type="text"
                name="playerName"
                placeholder="Player Name"
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                value={playerName}
              />
            </Col>
            <Col>
              <Button
                onClick={() => {
                  onCreate(userId, playerName);
                }}
              >
                Add Player
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default CreatePlayerDashboard;

CreatePlayerDashboard.propTypes = {
  playerName: PropTypes.string,
  setPlayerName: PropTypes.func,
  createPlayer: PropTypes.func,
  userId: PropTypes.string,
  getPlayerByUserId: PropTypes.func,
  userPlayerList: PropTypes.array,
};
