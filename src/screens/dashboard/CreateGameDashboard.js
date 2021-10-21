import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";

const CreateGameDashboard = ({ checkedPlayerList, setPlayerList }) => {
  return (
    <>
      <Container className="m-3">
        <Button
          as={Link}
          to="/game/create"
          onClick={() => setPlayerList(checkedPlayerList)}
        >
          Create Game
        </Button>
      </Container>
    </>
  );
};

CreateGameDashboard.propTypes = {
  checkedPlayerList: PropTypes.array,
  setPlayerList: PropTypes.func,
};

export default CreateGameDashboard;
