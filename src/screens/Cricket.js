import React from 'react';
import Header from '../components/Header';
import ScoreCalculator from '../components/ScoreCalculator';
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
      <div className='scoreInput'>
        <ScoreCalculator isCricketBoard />
      </div>
    </div>
  );
};
