import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <div id="header">
      <h1>Welcome</h1>
    </div>
    <div className="btnTable">
      <form>
        <div><p className="optionBtn"><Link to='/game/create'>Create Game</Link></p></div>
        <div><p className="optionBtn"><Link to='/rules'>Rules</Link></p></div>
        <div><p className="optionBtn"><Link to='/create_player'>Create Player</Link></p></div>
      </form>
    </div>
  </div>
  );
}

export default App;
