import React from "react";
// Components
import Header from "../../components/Header";
import CricketScoreCalculator from "../../components/scoreCalculator/CricketScoreCalculator";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
// Hooks
import useGame from "../../util/useGame";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

const Cricket = () => {
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
  } = useGame();

  const { theme, themeToggle } = React.useContext(ThemeContext);

  return (
    <>
      <Header
        title="Cricket"
        resetScoreList={resetScoreList}
        goBackButton
        resetButton
        theme={theme}
        themeToggle={themeToggle}
      />
      <Scoreboard
        playerList={playerList}
        variant="cricket"
        getCurrentPlayer={getCurrentPlayer}
        getCurrentPlayerById={getCurrentPlayerById}
        getCurrentPlayerByName={getCurrentPlayerByName}
      />
      <CricketScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
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

export default Cricket;
