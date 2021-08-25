import React from "react";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import Scoreboard from "../components/ScoreBoard";

const Cricket = ({ playerList }) => {
  return (
    <>
      <Header title="Cricket" goBackButton resetButton />
      <Scoreboard playerList={playerList} cricket />
      <ScoreCalculator isCricketBoard playerList={playerList} />
    </>
  );
};
export default Cricket;
