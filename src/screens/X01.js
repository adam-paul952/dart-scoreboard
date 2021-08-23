import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import ScoreCalculator from "../components/ScoreCalculator";

const CreateX01Board = ({
  x01Points,
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
}) => {
  console.log(x01Points);
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
      <ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
      />
    </>
  );
};

export default CreateX01Board;
