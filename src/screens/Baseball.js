import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Scoreboard from "../components/ScoreBoard";
import ScoreCalculator from "../components/ScoreCalculator";

const Baseball = ({
  playerList,
  setPlayerList,
  changeTurns,
  getCurrentPlayer,
  resetScoreList,
  round,
  setRound,
  turn,
}) => {
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
      />
      <ScoreCalculator
        playerList={playerList}
        setPlayerList={setPlayerList}
        changeTurns={changeTurns}
        getCurrentPlayer={getCurrentPlayer}
        setRound={setRound}
        round={round}
        turn={turn}
        resetScoreList={resetScoreList}
      />
    </>
  );
};

Baseball.propTypes = {
  playerList: PropTypes.array,
  setPlayerList: PropTypes.func,
  changeTurns: PropTypes.func,
  getCurrentPlayer: PropTypes.func,
  resetScoreList: PropTypes.func,
  round: PropTypes.number,
  setRound: PropTypes.func,
  turn: PropTypes.number,
};

export default Baseball;
