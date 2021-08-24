import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import X01ScoreCalculator from "../components/X01ScoreCalculator";

const CreateX01Board = ({
  x01Points,
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  assignX01PlayerScore,
}) => {
  // console.log(x01Points);
  console.log(playerList);
  return (
    <>
      <Header title={x01Points} goBackButton resetButton />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        x01
        x01Points
      />
      <X01ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        assignX01PlayerScore={assignX01PlayerScore}
      />
    </>
  );
};

export default CreateX01Board;
