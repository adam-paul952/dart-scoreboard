import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import useGame from "../../util/useGame";
import Header from "../../components/Header";

const eliminationLives = [3, 4, 5, 6, 7, 8, 9, 10];

const EliminationSetUp = () => {
  const { assignPlayerLives } = useGame();

  const [playerLives, setPlayerLives] = useState(0);

  const onLifeSelect = (eventKey) => {
    setPlayerLives(eventKey);
  };

  const onPointsSubmit = () => {
    assignPlayerLives(playerLives);
  };
  return (
    <>
      <Header title="Elimination" goBackButton />
      <Dropdown value={playerLives} onSelect={onLifeSelect}>
        <Dropdown.Toggle
          id="livesDropdown"
          variant="primary"
          name="livesDropdown"
          className="m-5"
        >
          Lives
        </Dropdown.Toggle>
        <Dropdown.Menu variant="primary">
          {eliminationLives.map((numOfLives) => {
            return (
              <Dropdown.Item key={numOfLives} eventKey={numOfLives}>
                {numOfLives}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h2 className="m-5">Number of Lives Selected: {playerLives}</h2>
      <Button
        className="m-2"
        variant="primary"
        as={Link}
        to="/game/elimination"
        onClick={onPointsSubmit}
        disabled={playerLives === 0 ? true : false}
      >
        Continue to Game
      </Button>
    </>
  );
};

EliminationSetUp.propTypes = { assignPlayerLives: PropTypes.func };

export default EliminationSetUp;
