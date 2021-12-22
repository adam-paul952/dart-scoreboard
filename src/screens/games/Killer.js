import React from "react";
import Header from "../../components/Header";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
import KillerScoreCalculator from "../../components/scoreCalculator/KillerScoreCalculator";
import useGame from "../../util/useGame";

const Killer = () => {
  const {
    playerList,
    setPlayerList,
    // changeTurns,
    getCurrentPlayer,
    getCurrentPlayerByName,
    getCurrentPlayerById,
    resetScoreList,
    // turn,
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
      <KillerScoreCalculator
        getCurrentPlayer={getCurrentPlayer}
        playerList={playerList}
        setPlayerList={setPlayerList}
      />
    </>
  );
};

export default Killer;
