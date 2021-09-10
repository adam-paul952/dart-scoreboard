import React from "react";
import Header from "../components/Header";
import CricketScoreCalculator from "../components/CricketScoreCalculator";
import Scoreboard from "../components/ScoreBoard";
import useGame from "../util/useGame";

const Cricket = () => {
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
        title="Cricket"
        resetScoreList={resetScoreList}
        goBackButton
        resetButton
      />
      <Scoreboard
        playerList={playerList}
        variant="cricket"
        getCurrentPlayer={getCurrentPlayer}
      />
      <CricketScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        turn={turn}
      />
    </>
  );
};

export default Cricket;
