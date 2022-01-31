import React from "react";
// Components
import Header from "../../components/Header";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
import EliminationScoreCalculator from "../../components/scoreCalculator/EliminationScoreCalculator";
// Hooks
import useGame from "../../util/useGame";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

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
    winner,
    setWinner,
  } = useGame();

  const { theme, themeToggle } = React.useContext(ThemeContext);
  return (
    <>
      <Header
        title="Elimination"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
        theme={theme}
        themeToggle={themeToggle}
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
        winner={winner}
        setWinner={setWinner}
      />
    </>
  );
};

export default Elimination;
