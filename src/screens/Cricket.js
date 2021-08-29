import React from "react";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import Scoreboard from "../components/ScoreBoard";

const Cricket = ({ playerList, getCurrentPlayer }) => {
  return (
    <>
      <Header title="Cricket" goBackButton resetButton />
      <Scoreboard
        playerList={playerList}
        variant="cricket"
        getCurrentPlayer={getCurrentPlayer}
      />
      <ScoreCalculator
        isCricketBoard
        playerList={playerList}
        getCurrentPlayer={getCurrentPlayer}
      />
    </>
  );
};
export default Cricket;
