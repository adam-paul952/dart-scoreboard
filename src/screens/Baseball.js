import React from "react";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import ScoreCalculator from "../components/ScoreCalculator";

const Baseball = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  changeRound,
  round,
}) => {
  return (
    <>
      <Header
        title="Baseball"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
      />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        baseball
        round={round}
        getCurrentPlayer={getCurrentPlayer}
      />
      <ScoreCalculator
        isBaseballBoard
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        changeRound={changeRound}
        round={round}
      />
    </>
  );
};

export default Baseball;
