import React, { useState } from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import ScoreCalculator from "../components/ScoreCalculator";
import { Button } from "react-bootstrap";

export default function CreateBaseballBoard({ playerList }) {
  const inningNumber = ["Player", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Total"];

  return (
    <>
      <Header title="Baseball" goBackButton />
      <Scoreboard playerList={playerList} baseball />
      <ScoreCalculator playerList={playerList} />
      <br />
      <br /> <br /> <br />
      <Button
        onClick={() => {
          console.log(playerList);
        }}
      >
        Show State
      </Button>
      {/* <Button
        onClick={() => {
          console.log(playerList.length);
        }}
      >
        Show State Length
      </Button> */}
    </>
  );
}
