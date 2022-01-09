import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import useGame from "../../util/useGame";

const x01PointsList = [201, 301, 401, 501, 601, 701];

const X01GameSelection = () => {
  const { x01Points, setX01Points, x01GameSelect, assignX01PlayerScore } =
    useGame();

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
};

export default X01GameSelection;
