import React from "react";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import Scoreboard from "../components/ScoreBoard";

export default function CreateCricketBoard({ playerList }) {
  return (
    <>
      <Header title="Cricket" goBackButton />
      <Scoreboard playerList={playerList} cricket />
      <ScoreCalculator isCricketBoard playerList={playerList} />
    </>
  );
}
