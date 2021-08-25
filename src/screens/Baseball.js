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
  changeRound,
  round,
}) {
  return (
    <>
      <Header title="Baseball" goBackButton resetButton />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        baseball
        round={round}
      />
      <ScoreCalculator
        isBaseballBoard
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        changeRound={changeRound}
        round={round}
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
    </>
  );
}
