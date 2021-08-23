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
  resetScoreList,
}) {
  return (
    <>
      <Header title="Baseball" goBackButton resetButton />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        baseball
      />
      <ScoreCalculator
        isBaseballBoard
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
      />
      <br />
      <br /> <br /> <br />
      <Button
        onClick={() => {
          resetScoreList();
        }}
      >
        Reset Scores
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
