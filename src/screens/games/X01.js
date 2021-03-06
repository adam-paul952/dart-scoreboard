import React from "react";
// Components
import Header from "../../components/Header";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
import X01ScoreCalculator from "../../components/scoreCalculator/X01ScoreCalculator";
// Hooks
import useGame from "../../util/useGame";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

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
    currentPlayer,
    playerListHistory,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
    setTurn,
    setCurrentPlayer,
    turn,
    round,
    changeRounds,
    showOutShot,
    setShowOutShot,
    winner,
    setWinner,
  } = useGame();

  const { theme, themeToggle } = React.useContext(ThemeContext);
  return (
    <>
      <Header
        title={x01Points}
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
        outShotButton
        theme={theme}
        themeToggle={themeToggle}
      />
      <Scoreboard
        variant="x01"
        x01Points={x01Points}
        playerList={playerList}
        setPlayerList={setPlayerList}
        getCurrentPlayer={getCurrentPlayer}
        getCurrentPlayerById={getCurrentPlayerById}
        getCurrentPlayerByName={getCurrentPlayerByName}
        currentPlayer={currentPlayer}
        round={round}
      />
      <X01ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        assignX01PlayerScore={assignX01PlayerScore}
        resetScoreList={resetScoreList}
        x01Points={x01Points}
        playerListHistory={playerListHistory}
        set={set}
        undo={undo}
        redo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        setTurn={setTurn}
        setCurrentPlayer={setCurrentPlayer}
        currentPlayer={currentPlayer}
        turn={turn}
        changeRounds={changeRounds}
        showOutShot={showOutShot}
        setShowOutShot={setShowOutShot}
        winner={winner}
        setWinner={setWinner}
      />
    </>
  );
};

export default X01;
