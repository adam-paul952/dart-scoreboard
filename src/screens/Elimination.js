import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import EliminationScoreCalculator from "../components/EliminationScoreCalculator";
import useGame from "../util/useGame";

const Elimination = () => {
  const {
    playerList,
    setPlayerList,
    changeTurns,
    getCurrentPlayer,
    resetScoreList,
    turn,
  } = useGame();
  return (
    <>
      <Header
        title="Elimination"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
      />
      <Scoreboard
        playerList={playerList}
        variant="elimination"
        getCurrentPlayer={getCurrentPlayer}
      />
      <EliminationScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        turn={turn}
      />
    </>
  );
};

export default Elimination;
