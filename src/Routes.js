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
  console.log(game);
  // Set turns and methods to cycle through players
  const [turn, setTurn] = useState(0);

  const changeTurns = () => {
    const newTurn = turn + 1;
    setTurn(newTurn % playerList.length);
  };
  console.log(turn);

  const getCurrentPlayer = () => {
    return playerList[turn];
  };
  // Set X01 points to game and players
  const [x01Points, setX01Points] = useState("");

  const x01GameSelect = (value) => {
    setX01Points(value);
  };

  // console.log(x01Points);

  const resetScoreList = () => {
    let newScoreList = [];
    setPlayerList([...playerList, newScoreList]);
  };

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
            />
          )}
        ></Route>
        <Route
          path="/game/x01/create"
          component={() => <X01 x01GameSelect={x01GameSelect} />}
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
            />
          )}
        />
        <Route path="/rules" component={Rules} />
        <Route path="/game/header" component={Header}></Route>
      </Switch>
    </Router>
  );
}
