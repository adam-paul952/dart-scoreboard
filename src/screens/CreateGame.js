import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { PlayerList } from "./CreatePlayer";

// import CreatePlayerList from './CreatePlayer';
import Header from "../components/Header";

export function CreateGame() {
  const [game, setGame] = useState("");

  const onSelectGame = (eventKey) => {
    setGame(eventKey);
  };

  useEffect(() => {
    console.log(game);
  }, [game]);

  return (
    <div>
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
            <Dropdown.Item
              as={Link}
              to="/game/cricket/create"
              eventKey="Cricket"
            >
              Cricket
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
      <hr />
      <h4>You selected {game}</h4>
    </div>
  );
}

export function X01() {
  return (
    <div>
      <Header title="X01" goBackButton />
      <form>
        <Dropdown>
          <Dropdown.Toggle id="pointsDropdown" variant="secondary">
            Points
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item>301</Dropdown.Item>
            <Dropdown.Item active>501</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h2>Game selected: 501</h2>
        {/* <CreatePlayerList /> */}
      </form>
    </div>
  );
}

export const Baseball = () => {
  return (
    <div>
      <Header title="Baseball" goBackButton />
      {/* <form>
        <CreatePlayerList />
      </form> */}
    </div>
  );
};

export const Cricket = () => {
  return (
    <div>
      <Header title="Cricket" goBackButton />
      {/* <form>
        <CreatePlayerList />
      </form> */}
    </div>
  );
};

export const Killer = () => {
  return (
    <div>
      <Header title="Killer" goBackButton />
      <h1>Coming Soon!</h1>
    </div>
  );
};

export const Elimination = () => {
  return (
    <div>
      <Header title="Elimination" goBackButton />
      <h1>Coming Soon!</h1>
    </div>
  );
};
