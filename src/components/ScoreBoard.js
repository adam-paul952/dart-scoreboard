import React from "react";
import { Table } from "react-bootstrap";

const Scoreboard = ({ playerList, baseball, cricket, x01, x01Points }) => {
  return (
    <>
      <Table>
        <TableHeader
          playerList={playerList}
          baseball={baseball}
          cricket={cricket}
          x01={x01}
        />
        <PlayerData
          playerList={playerList}
          baseball={baseball}
          cricket={cricket}
          x01={x01}
          x01Points={x01Points}
        />
      </Table>
    </>
  );
};

const TableHeader = ({ playerList, baseball, cricket, x01 }) => {
  const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];
  const cricketNumbers = ["Player", 20, 19, 18, 17, 16, 15, "Bull"];
  return (
    <>
      <thead>
        <tr>
          {baseball &&
            inningNumber.map((inning, index) => {
              return <th key={index}>{inning}</th>;
            })}
          {cricket &&
            cricketNumbers.map((number, index) => {
              return <th key={index}>{number}</th>;
            })}
        </tr>
      </thead>
    </>
  );
};

const PlayerData = ({ playerList, baseball, cricket, x01Points, x01 }) => {
  return (
    <>
      <tbody>
        {baseball &&
          playerList.map((player, index) => {
            return (
              <tr key={index}>
                <th key={index} style={{ borderColor: "black" }}>
                  {player.player}
                </th>
                <td key={index + 1}>{player.scoreList[index]}</td>
                <td key={index + 2}>{player.scoreList[index + 1]}</td>
                <td key={index + 3}>{player.scoreList[index + 2]}</td>
                <td key={index + 4}>{player.scoreList[index + 3]}</td>
                <td key={index + 5}>{player.scoreList[index + 4]}</td>
                <td key={index + 6}>{player.scoreList[index + 5]}</td>
                <td key={index + 7}>{player.scoreList[index + 6]}</td>
                <td key={index + 8}>{player.scoreList[index + 7]}</td>
                <td key={index + 9}>{player.scoreList[index + 8]}</td>
              </tr>
            );
          })}
        {cricket &&
          playerList.map((player, index) => {
            return (
              <tr key={index}>
                <th key={index} style={{ borderColor: "black" }}>
                  {player.player}
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        {x01 &&
          playerList.map((player, index) => {
            return (
              <tr key={index}>
                <th style={{ borderColor: "black" }}>{player.player}</th>
                <td>{player.score}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default Scoreboard;
