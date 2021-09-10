import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import X01ScoreCalculator from "../components/X01ScoreCalculator";
import useGame from "../util/useGame";

const X01 = () => {
  const {
    x01Points,
    playerList,
    setPlayerList,
    changeTurns,
    getCurrentPlayer,
    assignX01PlayerScore,
    resetScoreList,
  } = useGame();
  return (
    <>
      <Header
        title={x01Points}
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
      />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        variant="x01"
        getCurrentPlayer={getCurrentPlayer}
        x01Points={x01Points}
      />
      <X01ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        assignX01PlayerScore={assignX01PlayerScore}
        resetScoreList={resetScoreList}
        x01Points={x01Points}
      />
    </>
  );
};

export default X01;
