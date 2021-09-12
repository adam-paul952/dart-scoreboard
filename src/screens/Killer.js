import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import useGame from "../util/useGame";

const Killer = () => {
  const {
    playerList,
    setPlayerlist,
    changeTurns,
    getCurrentPlayer,
    getCurrentPlayerByName,
    getCurrentPlayerById,
    resetScoreList,
    turn,
  } = useGame();
  return (
    <>
      <Header
        title="Killer"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
      />
      <Scoreboard
        variant="killer"
        playerList={playerList}
        getCurrentPlayer={getCurrentPlayer}
        getCurrentPlayerById={getCurrentPlayerById}
        getCurrentPlayerByName={getCurrentPlayerByName}
      />
    </>
  );
};

export default Killer;
