import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import useGame from "../util/useGame";

export const CreateGame = () => {
  return (
    <>
      <Header title="Create a Game" goBackButton />
      <form>
        <Dropdown>
          <Dropdown.Toggle
            id="gameDropDown"
            variant="primary"
            title="Game DropDown"
          >
            Please Select a Game
          </Dropdown.Toggle>
          <Dropdown.Menu variant="primary">
            <Dropdown.Item as={Link} to="/game/x01/create" eventKey="X01">
              X01
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/game/baseball/" eventKey="Baseball">
              Baseball
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/game/elimination/create"
              eventKey="Elimination"
            >
              Elimination
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/game/killer/create" eventKey="Killer">
              Killer
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/game/cricket" eventKey="Cricket">
              Cricket
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </>
  );
};

export function X01GameSelection() {
  const { x01Points, setX01Points, x01GameSelect, assignX01PlayerScore } =
    useGame();

  const x01PointsList = [201, 301, 401, 501, 601, 701];

  const onPointsSubmit = () => {
    x01GameSelect(x01Points);
    assignX01PlayerScore(x01Points);
  };

  return (
    <>
      <Header title="X01" goBackButton />
      <Dropdown value={x01Points} onSelect={setX01Points}>
        <Dropdown.Toggle
          id="pointsDropdown"
          variant="primary"
          name="pointsDropdown"
          className="m-5"
        >
          Points
        </Dropdown.Toggle>
        <Dropdown.Menu variant="primary">
          {x01PointsList.map((game) => {
            return (
              <Dropdown.Item key={game} eventKey={game}>
                {game}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h2 className="m-5">Game selected: {x01Points}</h2>
      <Button
        className="mt-2"
        variant="primary"
        as={Link}
        to="/game/x01"
        onClick={onPointsSubmit}
        disabled={x01Points === 0 ? true : false}
      >
        Continue to Game
      </Button>
    </>
  );
}

export const KillerSetUp = () => {
  return (
    <>
      <Header title="Killer" goBackButton />
      <h1>Coming Soon!</h1>
    </>
  );
};

export const EliminationSetUp = () => {
  const { assignPlayerLives } = useGame();
  const eliminationLives = [3, 4, 5, 6, 7, 8, 9, 10];

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
