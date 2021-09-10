import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import useGame from "../util/useGame";

export const CreateGame = () => {
  const { game, setGame } = useGame();

  const onSelectGame = (eventKey) => {
    setGame(eventKey);
  };

  return (
    <>
      <Header title="Create a Game" goBackButton />
      <form>
        <Dropdown value={game} onSelect={onSelectGame}>
          <Dropdown.Toggle
            id="gameDropDown"
            variant="secondary"
            title="Game DropDown"
          >
            Please Select a Game
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
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
  const { x01GameSelect, assignX01PlayerScore } = useGame();

  const x01PointsList = [201, 301, 401, 501, 601, 701];

  const [x01Points, setX01Points] = useState(0);

  const onPointsSelect = (eventKey) => {
    setX01Points(eventKey);
  };
  // console.log(x01Points);
  const onPointsSubmit = () => {
    x01GameSelect(x01Points);
    assignX01PlayerScore(x01Points);
  };

  return (
    <>
      <Header title="X01" goBackButton />

      <Dropdown value={x01Points} onSelect={onPointsSelect}>
        <Dropdown.Toggle
          id="pointsDropdown"
          variant="secondary"
          name="pointsDropdown"
        >
          Points
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {x01PointsList.map((game) => {
            return (
              <Dropdown.Item key={game} eventKey={game}>
                {game}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h2>Game selected: {x01Points}</h2>
      <Button
        variant="secondary"
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

export const Killer = () => {
  return (
    <>
      <Header title="Killer" goBackButton />
      <h1>Coming Soon!</h1>
    </>
  );
};

export const EliminationSetUp = ({ assignPlayerLives }) => {
  const eliminationLives = [3, 4, 5, 6, 7, 8, 9, 10];

  const [playerLives, setPlayerLives] = useState(0);

  const onLifeSelect = (eventKey) => {
    setPlayerLives(eventKey);
  };
  // console.log(x01Points);
  const onPointsSubmit = () => {
    assignPlayerLives(playerLives);
  };
  return (
    <>
      <Header title="Elimination" goBackButton />
      <Dropdown value={playerLives} onSelect={onLifeSelect}>
        <Dropdown.Toggle
          id="livesDropdown"
          variant="secondary"
          name="livesDropdown"
        >
          Lives
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {eliminationLives.map((numOfLives) => {
            return (
              <Dropdown.Item key={numOfLives} eventKey={numOfLives}>
                {numOfLives}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h2>Number of Lives Selected: {playerLives}</h2>
      <Button
        variant="secondary"
        as={Link}
        to="/game/elimination"
        onClick={onPointsSubmit}
      >
        Continue to Game
      </Button>
    </>
  );
};

EliminationSetUp.propTypes = { assignPlayerLives: PropTypes.func };
