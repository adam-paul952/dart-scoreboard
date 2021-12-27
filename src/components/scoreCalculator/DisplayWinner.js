import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

const DisplayWinner = ({ variant, eraseGameData, winner }) => {
  return (
    <>
      <Alert className="winnerAlert" variant="success">
        <p>The WINNER is: {winner.playerName}</p>
        <p>Congratulations!</p>
        {variant === "x01" && (
          <Button
            variant="success"
            as={Link}
            to="/game/x01/create"
            className="m-3"
            onClick={() => eraseGameData()}
          >
            Play Again
          </Button>
        )}
        {variant === "baseball" && (
          <Button
            variant="success"
            className="m-3"
            onClick={() => eraseGameData()}
          >
            Play Again
          </Button>
        )}
        {variant === "elimination" && (
          <Button
            variant="success"
            className="m-3"
            as={Link}
            to="/game/elimination/create"
            onClick={() => eraseGameData()}
          >
            Play Again
          </Button>
        )}
        {variant === "cricket" && (
          <Button
            variant="success"
            className="m-3"
            onClick={() => eraseGameData()}
          >
            Play Again
          </Button>
        )}
        {variant === "killer" && (
          <Button
            variant="success"
            className="m-3"
            as={Link}
            to="/game/killer/create"
            onClick={() => {
              eraseGameData();
            }}
          >
            Play Again
          </Button>
        )}
        <Button
          variant="success"
          as={Link}
          to="/game/create"
          onClick={() => eraseGameData()}
        >
          Choose another game
        </Button>
      </Alert>
    </>
  );
};

DisplayWinner.propTypes = {
  variant: PropTypes.string,
  eraseGameData: PropTypes.func,
  winner: PropTypes.object,
};

export default DisplayWinner;
