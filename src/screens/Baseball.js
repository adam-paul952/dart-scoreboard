import React from "react";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import { Button, Table } from "react-bootstrap";

export default function CreateBaseballBoard({ playerList }) {
  const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];

  return (
    <>
      <Header title="Baseball" goBackButton />
      <Table>
        <thead>
          <tr>
            {inningNumber.map((inning, index) => {
              return <th key={index}>{inning}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {playerList.map((player, index) => {
            return (
              <tr key={index}>
                <th key={index} style={{ borderColor: "black" }}>
                  {player.player}
                </th>
                <td key={index + 1}>{player.score}</td>
                <td key={index + 2}>{player.score}</td>
                <td key={index + 3}>{player.score}</td>
                <td key={index + 4}>{player.score}</td>
                <td key={index + 5}>{player.score}</td>
                <td key={index + 6}>{player.score}</td>
                <td key={index + 7}>{player.score}</td>
                <td key={index + 8}>{player.score}</td>
                <td key={index + 9}>{player.score}</td>
                <td key={index + 10}>{player.scoreList[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ScoreCalculator />
      <br /> <br />
      <br />
      <Button
        onClick={() => {
          console.log(playerList);
        }}
      >
        Show State
      </Button>
      <Button
        onClick={() => {
          console.log(playerList.length);
        }}
      >
        Show State Length
      </Button>
    </>
  );
}
