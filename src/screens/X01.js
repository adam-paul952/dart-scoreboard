import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import X01ScoreCalculator from "../components/X01ScoreCalculator";
import useGame from "../util/useGame";

const X01 = () => {
  const {
    x01Points,
    assignX01PlayerScore,
    playerList,
    setPlayerList,
    changeTurns,
    resetScoreList,
    getCurrentPlayer,
    getCurrentPlayerById,
    getCurrentPlayerByName,
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
        variant="x01"
        x01Points={x01Points}
        playerList={playerList}
        setPlayerList={setPlayerList}
        getCurrentPlayer={getCurrentPlayer}
        getCurrentPlayerById={getCurrentPlayerById}
        getCurrentPlayerByName={getCurrentPlayerByName}
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
