import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function CreateBaseballBoard() {
  return (
    <div>
      <h1>Baseball</h1>;
      <div className="inningCounter">
        <div><p>Inning:</p></div>
        <div><p>`$[Inning #]`</p></div>
      </div>
      <div className="scoreboard">
        <div className="playerName">Player</div>
        <div className="innOne">1</div>
        <div className="innTwo">2</div>
        <div className="innThree">3</div>
        <div className="innFour">4</div>
        <div className="innFive">5</div>
        <div className="innSix">6</div>
        <div className="innSeven">7</div>
        <div className="innEight">8</div>
        <div className="innNine">9</div>
        <div className="total">Total</div>
      </div>
      <div className="playerList">

      </div>
    </div>
  );
};