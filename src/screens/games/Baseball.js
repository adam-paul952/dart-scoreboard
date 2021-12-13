import React from "react";
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
    playerListHistory,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
    round,
    changeRounds,
    setRound,
  } = useGame();

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
        changeRounds={changeRounds}
        round={round}
        setRound={setRound}
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

export default Baseball;
