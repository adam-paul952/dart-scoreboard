import React from "react";
import Header from "../../components/Header";
import Scoreboard from "../../components/ScoreBoard";
import EliminationScoreCalculator from "../../components/EliminationScoreCalculator";
import useGame from "../../util/useGame";

const Elimination = () => {
  const {
    playerList,
    setPlayerList,
    changeTurns,
    getCurrentPlayer,
    getCurrentPlayerByName,
    getCurrentPlayerById,
    resetScoreList,
    turn,
    setTurn,
    setCurrentPlayer,
    currentPlayer,
    playerListHistory,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
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
        getCurrentPlayerByName={getCurrentPlayerByName}
        getCurrentPlayerById={getCurrentPlayerById}
      />
      <EliminationScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        turn={turn}
        resetScoreList={resetScoreList}
        setTurn={setTurn}
        setCurrentPlayer={setCurrentPlayer}
        currentPlayer={currentPlayer}
        playerListHistory={playerListHistory}
        set={set}
        undo={undo}
        redo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </>
  );
};

export default Elimination;
