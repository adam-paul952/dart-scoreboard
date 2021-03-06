import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// Components
import Header from "../../components/Header";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

const CreateGame = () => {
  const { theme, themeToggle } = React.useContext(ThemeContext);
  return (
    <>
      <Header
        title="Create a Game"
        goBackButton
        theme={theme}
        themeToggle={themeToggle}
      />
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
    </>
  );
};

export default CreateGame;
