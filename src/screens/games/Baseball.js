import React, { useState } from "react";
import Header from "../../components/Header";
import Scoreboard from "../../components/ScoreBoard";
import ScoreCalculator from "../../components/ScoreCalculator";
import useGame from "../../util/useGame";

const Baseball = () => {
  const {
    playerList,
    setPlayerList,
    changeTurns,
    getCurrentPlayer,
    resetScoreList,
    turn,
    getCurrentPlayerById,
    getCurrentPlayerByName,
    setTurn,
    setCurrentPlayer,
    currentPlayer,
  } = useGame();

  const [round, setRound] = useState(0);

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
        getCurrentPlayerByName={getCurrentPlayerByName}
        getCurrentPlayerById={getCurrentPlayerById}
        round={round}
        currentPlayer={currentPlayer}
      />
      <ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        setRound={setRound}
        round={round}
        turn={turn}
        resetScoreList={resetScoreList}
        setTurn={setTurn}
        setCurrentPlayer={setCurrentPlayer}
        currentPlayer={currentPlayer}
      />
    </>
  );
};

export default Baseball;
