import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CreatePlayerDashboard = ({ createPlayer, getPlayerByUserId }) => {
  const [playerName, setPlayerName] = React.useState("");

  const onCreate = (playerName) => {
    createPlayer(playerName);
    setPlayerName("");
    setTimeout(() => {
      getPlayerByUserId();
    }, 20);
  };

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        onCreate(playerName);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

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
                disabled={!playerName || playerName.length < 3 ? true : false}
                onClick={() => {
                  onCreate(playerName);
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
  createPlayer: PropTypes.func,
  getPlayerByUserId: PropTypes.func,
};
