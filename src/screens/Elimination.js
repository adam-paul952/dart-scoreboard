import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import EliminationScoreCalculator from "../components/EliminationScoreCalculator";

const Elimination = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  //   round,
  //   changeRound,
  turn,
}) => {
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
      />
      <EliminationScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        turn={turn}
      />
    </>
  );
};

Elimination.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
  round: PropTypes.number,
  changeRound: PropTypes.func,
  turn: PropTypes.number,
};

export default Elimination;
