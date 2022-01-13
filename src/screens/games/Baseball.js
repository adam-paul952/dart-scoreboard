import React from "react";
// Components
import Header from "../../components/Header";
import Scoreboard from "../../components/scoreboard/ScoreBoard";
import ScoreCalculator from "../../components/scoreCalculator/ScoreCalculator";
// Custom Hook
import useGame from "../../util/useGame";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";

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

  const { theme, themeToggle } = React.useContext(ThemeContext);

  return (
    <>
      <Header
        title="Baseball"
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
        theme={theme}
        themeToggle={themeToggle}
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
