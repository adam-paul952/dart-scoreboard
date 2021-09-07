import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import CricketScoreCalculator from "../components/CricketScoreCalculator";
import Scoreboard from "../components/ScoreBoard";

const Cricket = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  round,
  // changeRound,
  turn,
}) => {
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
      <CricketScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        // changeRound={changeRound}
        round={round}
        turn={turn}
      />
    </>
  );
};

Cricket.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
  round: PropTypes.number,
  changeRound: PropTypes.func,
  turn: PropTypes.number,
};
export default Cricket;
