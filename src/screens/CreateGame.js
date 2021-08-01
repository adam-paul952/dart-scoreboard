import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CreatePlayerList from './CreatePlayer';
// import CreatePlayerList from './CreatePlayer'

export function CreateGame() {
  const [games, setGames] = useState('');

  const components = {
    X01: <X01 />,
    Cricket: <Cricket />,
    Baseball: <Baseball />,
    Killer: <Killer />,
    Elimination: <Elimination />
  };

  const selectGame = (eventKey) => {
    setGames(eventKey);
  };

  useEffect(() => {
    console.log(games);
  }, [games]);

  return (
    <div>
      <h2>Create a Game</h2>
      <form>
        <Dropdown value={games} onSelect={selectGame}>
        <Dropdown.Toggle id="gameDropDown" variant="secondary" title='Game DropDown'>
          Please Select a Game
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item as={ Link } to='/game/create/x01' eventKey='X01'>
            X01
          </Dropdown.Item>
          <Dropdown.Item eventKey='Baseball'>Baseball</Dropdown.Item>
          <Dropdown.Item eventKey='Elimination'>Elimination</Dropdown.Item>
          <Dropdown.Item eventKey='Killer'>Killer</Dropdown.Item>
          <Dropdown.Item eventKey='Cricket'>Cricket</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </form>
    <hr />
    <h4>You selected {games}</h4>
  </div>
  );
};

export function X01() {
  return (
    <div>
      <h2>X01</h2>
      <form>
        <Dropdown>
          <Dropdown.Toggle id="pointsDropdown" variant="secondary">
            Points
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item>
              301
            </Dropdown.Item>
            <Dropdown.Item active>
              501
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h2>Game selected: 501</h2>
        <CreatePlayerList />
      </form>
    </div>
  );
};

const Baseball = () => {
  return (
    <div>
      <h3>Baseball</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const Cricket = () => {
  return (
    <div>
      <h3>Cricket</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const Killer = () => {
  return (
    <div>
      <h3>Killer</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const Elimination = () => {
  return (
    <div>
      <h3>Elimination</h3>
      <form>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};
