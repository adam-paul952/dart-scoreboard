import React from 'react';
import Header from '../components/Header';
import '../App.css';

export default function CreateCricketBoard() {
  return (
    <div>
      <Header title='Cricket' goBackButton />
      <br /> <br /> <br />
      <div>
        <table id="scoreboard">
          <tr>
          <th colspan='2'>Player</th>
          <th>20</th>
          <th>19</th>
          <th>18</th>
          <th>17</th>
          <th>16</th>
          <th>15</th>
          <th>Bull</th>
          </tr>
          <tbody>
            <tr>
              <td colspan='2'>Player Name</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan='2'>Player Name</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br /> <br /> <br />
      <div id="scorekeypad">
        <form>
          <table>
            <tr>
              <td><button>20</button></td>
              <td><button>19</button></td>
              <td><button>18</button></td>
            </tr>
            <tr>
              <td><button>17</button></td>
              <td><button>16</button></td>
              <td><button>15</button></td>
            </tr>
            <tr>
              <td><button>enter</button></td>
              <td><button>bull</button></td>
              <td><button>delete</button></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
