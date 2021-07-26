import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div id="header">
    <h1>Welcome</h1>
      <div>
        <form>
          <table id="btnTable">
            <tbody>
              <tr>
                <td><button><Link to='/CreateGame'>Create Game</Link></button></td>
                <td><button disabled={true}>Resume Game</button></td>
              </tr>
              <tr>
                <td><button>Rules</button></td>
                <td><button disabled={true}>Statistics</button></td>
              </tr>
              <tr>
                <td><button disabled={true}>Create Player</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
  </div>
  );
}

export default App;
