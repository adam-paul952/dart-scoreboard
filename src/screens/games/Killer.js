import React from "react";
// Components
import Header from "../../components/Header";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
import KillerScoreCalculator from "../../components/scoreCalculator/KillerScoreCalculator";
// Hooks
import useGame from "../../util/useGame";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

const Killer = () => {
  const {
    playerList,
    setPlayerList,
    changeTurns,
    getCurrentPlayer,
    getCurrentPlayerByName,
    getCurrentPlayerById,
    resetScoreList,
    turn,
    round,
    setRound,
    changeRounds,
    currentPlayer,
    setCurrentPlayer,
    playerListHistory,
    setTurn,
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
        title="Killer"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
        theme={theme}
        themeToggle={themeToggle}
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
        round={round}
        setRound={setRound}
        changeTurns={changeTurns}
        changeRounds={changeRounds}
        turn={turn}
        currentPlayer={currentPlayer}
        resetScoreList={resetScoreList}
        playerListHistory={playerListHistory}
        setTurn={setTurn}
        setCurrentPlayer={setCurrentPlayer}
        set={set}
        undo={undo}
        redo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </>
  );
};

export default Killer;
