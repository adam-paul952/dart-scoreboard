import React from 'react';
import Header from '../components/Header';
import ScoreCalculator from '../components/ScoreCalculator';

export default function CreateBaseballBoard() {
  // const [inning, setInning] = useState('');
  // const [score, setScore] = useState([]);
  return (
    <>
      <Header title='Baseball' goBackButton />
      <div className="inningCounter">
        <><p>Inning:</p></>
        <><p>`$[Inning #]`</p></>
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
        {/* Function here to import table from CreatePlayer then
        maintain score */}
      </div>
      <div className='scoreInput'>
        <ScoreCalculator />
      </div>
    </>
  );
};