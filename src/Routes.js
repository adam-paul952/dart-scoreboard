import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import CreatePlayerList from "./screens/CreatePlayer";
import {
  CreateGame,
  X01,
  Baseball,
  Cricket,
  Elimination,
  Killer,
} from "./screens/CreateGame";
import CreateCricketBoard from "./screens/Cricket";
import CreateBaseballBoard from "./screens/Baseball";
import CreateX01Board from "./screens/X01";
import Rules from "./screens/Rules";
import ScoreCalculator from "./components/ScoreCalculator";
import Scoreboard from "./components/ScoreBoard";
import Header from "./components/Header";
import X01ScoreCalculator from "./components/X01ScoreCalculator";

export default function Routes() {
  // Main array to hold player objects
  const [playerList, setPlayerList] = useState([]);

  const updatePlayerList = (player) => {
    setPlayerList([...playerList, player]);
  };

  const deleteRow = (rowNumber) => {
    let updatedRows = [...playerList];
    updatedRows.splice(rowNumber, 1);
    setPlayerList(updatedRows);
  };
  const [game, setGame] = useState("");
  // console.log(game);
  // Set turns and methods to cycle through players and rounds
  const [turn, setTurn] = useState(0);

  const changeTurns = () => {
    const newTurn = turn + 1;
    setTurn(newTurn % playerList.length);
  };

  const getCurrentPlayer = () => {
    return playerList[turn];
  };

  const [round, setRound] = useState(0);

  const changeRound = () => {
    const nextRound = round + 1;
    if (turn === 0) {
      setRound(nextRound);
    }
  };
  console.log(round);
  // Set X01 points to game and players
  const [x01Points, setX01Points] = useState(0);

  const x01GameSelect = (value) => {
    setX01Points(value);
  };

  const assignX01PlayerScore = (x01Points) => {
    let playerScore = [...playerList];
    for (let i = 0; i < playerScore.length; i++) {
      playerScore[i].score = x01Points;
      setPlayerList(playerScore);
    }
  };

  // console.log(x01Points);

  const resetScoreList = () => {
    let newScoreList = [...playerList];
    for (let i = 0; i < newScoreList.length; i++) {
      newScoreList[i].scoreList = [];
      newScoreList[i].score = x01Points;
      setPlayerList(newScoreList);
      setTurn(0);
    }
  };
  console.log(playerList);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/game/create"
          component={() => (
            <CreateGame
              playerList={playerList}
              setPlayerList={setPlayerList}
              game={game}
              setGame={setGame}
              assignX01PlayerScore={assignX01PlayerScore}
            />
          )}
        />
        <Route
          path="/create_player"
          component={() => (
            <CreatePlayerList
              playerList={playerList}
              updatePlayerList={updatePlayerList}
              deleteRow={deleteRow}
            />
          )}
        />
        <Route
          exact
          path="/game/cricket"
          component={() => <CreateCricketBoard playerList={playerList} />}
        />
        <Route
          exact
          path="/game/baseball"
          component={() => (
            <CreateBaseballBoard
              playerList={playerList}
              updatePlayerList={updatePlayerList}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              resetScoreList={resetScoreList}
              changeRound={changeRound}
              round={round}
            />
          )}
        />
        <Route
          path="game/scoreboard"
          component={() => {
            <Scoreboard
              playerList={playerList}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              changeRound={changeRound}
              round={round}
            />;
          }}
        />
        <Route
          exact
          path="/game/x01"
          component={() => (
            <CreateX01Board
              x01Points={x01Points}
              playerList={playerList}
              updatePlayerList={updatePlayerList}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              assignX01PlayerScore={assignX01PlayerScore}
              resetScoreList={resetScoreList}
              changeRound={changeRound}
              round={round}
            />
          )}
        ></Route>
        <Route
          path="/game/x01/create"
          component={() => (
            <X01
              x01GameSelect={x01GameSelect}
              assignX01PlayerScore={assignX01PlayerScore}
            />
          )}
        ></Route>
        <Route path="/game/baseball/create" component={Baseball}></Route>
        <Route path="/game/cricket/create" component={Cricket}></Route>
        <Route path="/game/elimination/create" component={Elimination}></Route>
        <Route path="/game/killer/create" component={Killer}></Route>
        <Route
          path="/game/score_calculator"
          component={() => (
            <ScoreCalculator
              playerList={playerList}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              changeRound={changeRound}
              round={round}
            />
          )}
        />
        <Route
          path="/game/x01scorecalculator"
          component={() => (
            <X01ScoreCalculator
              playerList={playerList}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              x01Points={x01Points}
              assignX01PlayerScore={assignX01PlayerScore}
            />
          )}
        />
        <Route path="/rules" component={Rules} />
        <Route
          path="/game/header"
          component={() => (
            <Header
              title
              goBackButton
              resetButton
              resetScoreList={resetScoreList}
            />
          )}
        ></Route>
      </Switch>
    </Router>
  );
}
