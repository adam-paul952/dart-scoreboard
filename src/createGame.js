import React, { useState } from 'react';

import './App.css';
// import CreatePlayerList from './CreatePlayer'

export default function CreateGame() {
  const [games, setGames] = useState([
    { label: 'Please Select Your Game', value: 'Please Select Your Game' },
    { label: 'X01', value: 'X01'},
    { label: 'Baseball',value: 'Baseball'},
    { label: 'Cricket', value: 'Cricket'},
    { label: 'Elimination', value: 'Elimination'},
    { label: 'Killer', value: 'Killer'}
    ]);

  const handleChange = (event) => {
    let selectedGame = event.target.value;
    setGames(selectedGame);
  };

  return (
      <div>
        <div id="selection">
          <form>
            <span>Select Your Game:</span>
            <select className="gameSelect">
              {games.map(game => (
                <option key={game.value} value={game.value}  onChange={handleChange}>
                  {game.label}
                </option>
              ))}
            </select>
            <div className="gameContainer">
              {}
            </div>
            <div id="submitBtn">
              <input type="button" value="Submit"></input>
              <input type="button" value="Return"></input>
            </div>
          </form>
        </div>
      </div>
  );
}

function X01() {
  return (
    <div>
      <h3>X01</h3>
      <form>
        <label>
          Points:
        </label>
        <select>
          <option value="301">301</option>
          <option value="501">501</option>
          <option value="601">601</option>
          <option value="701">701</option>
          <option value="801">801</option>
          <option value="901">901</option>
          <option value="1001">1001</option>
        </select>
        <input type="button" value="Submit"></input>
        <input type="button" value="Return"></input>
      </form>
    </div>
  );
};

const baseball = () => {
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

const cricket = () => {
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

const killer = () => {
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

const elimination = () => {
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
