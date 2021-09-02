import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import Scoreboard from "../components/ScoreBoard";

const Cricket = ({ playerList, getCurrentPlayer, resetScoreList }) => {
  return (
    <>
      <Header
        title="Cricket"
        resetScoreList={resetScoreList}
        goBackButton
        resetButton
      />
      <Scoreboard
        playerList={playerList}
        variant="cricket"
        getCurrentPlayer={getCurrentPlayer}
      />
      <ScoreCalculator
        isCricketBoard
        playerList={playerList}
        getCurrentPlayer={getCurrentPlayer}
      />
    </>
  );
};

Cricket.propTypes = {
  playerList: PropTypes.array,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
};
export default Cricket;
