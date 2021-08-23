import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export function CreateGame({ game, setGame }) {
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
}

export function X01({ x01GameSelect }) {
  const x01PointsList = [201, 301, 401, 501, 601, 701];

  const [x01Points, setX01Points] = useState("");

  const onPointsSelect = (eventKey) => {
    setX01Points(eventKey);
  };
  console.log(x01Points);
  const onPointsSubmit = () => {
    x01GameSelect(x01Points);
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
      >
        Continue to Game
      </Button>
    </>
  );
}

export const Baseball = () => {
  return (
    <>
      <Header title="Baseball" goBackButton />
    </>
  );
};

export const Cricket = () => {
  return (
    <>
      <Header title="Cricket" goBackButton />
    </>
  );
};

export const Killer = () => {
  return (
    <>
      <Header title="Killer" goBackButton />
      <h1>Coming Soon!</h1>
    </>
  );
};

export const Elimination = () => {
  return (
    <>
      <Header title="Elimination" goBackButton />
      <h1>Coming Soon!</h1>
    </>
  );
};
