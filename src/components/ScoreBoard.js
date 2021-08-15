import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const Scoreboard = ({ playerList, baseball }) => {
  return (
    <>
      <Table>
        <TableHeader baseball={baseball} />
        <PlayerData playerList={playerList} baseball={baseball} />
      </Table>
    </>
  );
};

const TableHeader = ({ baseball }) => {
  const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];
  return (
    <>
      <thead>
        <tr>
          {baseball &&
            inningNumber.map((inning, index) => {
              return <th key={index}>{inning}</th>;
            })}
        </tr>
      </thead>
    </>
  );
};

const PlayerData = ({ playerList, baseball }) => {
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
      </tbody>
    </>
  );
};

export default Scoreboard;
