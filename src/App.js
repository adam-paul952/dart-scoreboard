import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  const linkStyle = {
    margin: '2px',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '10px',
    background: 'gray',
    width: '300px',
    fontSize: '25px',
    color: 'black',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
  <div>
    <div id="header">
    <Header title='Welcome' />
    </div>
    <div className="btnTable">
      <form>
        <div><p className="optionBtn"><Link to='/game/create' style={linkStyle}>Create Game</Link></p></div>
        <div><p className="optionBtn"><Link to='/rules' style={linkStyle}>Rules</Link></p></div>
        <div><p className="optionBtn"><Link to='/create_player' style={linkStyle}>Create Player</Link></p></div>
      </form>
    </div>
  </div>
  );
}

export default App;
