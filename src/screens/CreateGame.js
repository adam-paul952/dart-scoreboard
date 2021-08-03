import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CreatePlayerList from './CreatePlayer';

export function CreateGame() {
  const [games, setGames] = useState('');

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
          <Dropdown.Item as={ Link } to='/game/x01/create' eventKey='X01'>
            X01
          </Dropdown.Item>
          <Dropdown.Item as={ Link } to='/game/baseball/create' eventKey='Baseball'>Baseball</Dropdown.Item>
          <Dropdown.Item as={ Link } to='/game/elimination/create' eventKey='Elimination'>Elimination</Dropdown.Item>
          <Dropdown.Item as={ Link } to='/game/killer/create' eventKey='Killer'>Killer</Dropdown.Item>
          <Dropdown.Item as={ Link } to='/game/cricket/create' eventKey='Cricket'>Cricket</Dropdown.Item>
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

export const Baseball = () => {
  return (
    <div>
      <h3>Baseball</h3>
      <form>
        <CreatePlayerList />
      </form>
    </div>
  );
};

export const Cricket = () => {
  return (
    <div>
      <h3>Cricket</h3>
      <form>
        <CreatePlayerList />
      </form>
    </div>
  );
};

export const Killer = () => {
  return (
    <div>
      <h3>Killer</h3>
      <h1>Coming Soon!</h1>
    </div>
  );
};

export const Elimination = () => {
  return (
    <div>
      <h3>Elimination</h3>
      <h1>Coming Soon!</h1>
    </div>
  );
};
