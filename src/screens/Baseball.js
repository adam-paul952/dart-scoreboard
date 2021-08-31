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
  round,
  changeRound,
  turn,
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
        variant="baseball"
        getCurrentPlayer={getCurrentPlayer}
      />
      <ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        changeRound={changeRound}
        round={round}
        turn={turn}
      />
    </>
  );
};

export default Baseball;
