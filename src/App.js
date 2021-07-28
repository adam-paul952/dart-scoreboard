import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div id="header">
    <h1>Welcome</h1>
      <div>
        <form>
          <table className="btnTable">
            <tbody>
              <tr>
                <td><button className="optionBtn"><Link to='/game/create'>Create Game</Link></button></td>
                {/*<td><button disabled={true}>Resume Game</button></td>*/}
              </tr>
              <tr>
                <td><button className="optionBtn"><Link to='/rules'>Rules</Link></button></td>
                {/*<td><button disabled={true}>Statistics</button></td>*/}
              </tr>
              <tr>
                <td><button className="optionBtn"><Link to='/create_player'>Create Player</Link></button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
  </div>
  );
}

export default App;
