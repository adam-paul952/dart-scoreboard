import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import ScoreCalculator from "../components/ScoreCalculator";
import { Button } from "react-bootstrap";

export default function CreateBaseballBoard({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
}) {
  return (
    <>
      <Header title="Baseball" goBackButton />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        baseball
      />
      <ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
      />
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
