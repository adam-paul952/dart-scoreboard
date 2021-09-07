import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import X01ScoreCalculator from "../components/X01ScoreCalculator";

const X01 = ({
  x01Points,
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  assignX01PlayerScore,
  resetScoreList,
}) => {
  return (
    <>
      <Header
        title={x01Points}
        goBackButton
        resetButton
        resetScoreList={resetScoreList}
      />
      <Scoreboard
        playerList={playerList}
        setPlayerList={setPlayerList}
        variant="x01"
        getCurrentPlayer={getCurrentPlayer}
        x01Points={x01Points}
      />
      <X01ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        assignX01PlayerScore={assignX01PlayerScore}
        resetScoreList={resetScoreList}
        x01Points={x01Points}
      />
    </>
  );
};

X01.propTypes = {
  x01Points: PropTypes.string.isRequired,
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  assignX01PlayerScore: PropTypes.func,
  resetScoreList: PropTypes.func,
};

export default X01;
