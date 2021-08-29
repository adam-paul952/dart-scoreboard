import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import CreatePlayerList from "./screens/CreatePlayer";
import {
  CreateGame,
  X01GameSelection,
  Elimination,
  Killer,
} from "./screens/CreateGame";
import Cricket from "./screens/Cricket";
import Baseball from "./screens/Baseball";
import X01 from "./screens/X01";
import Rules from "./screens/Rules";

export default function Routes() {
  // Main array to hold player objects
  const [playerList, setPlayerList] = useState([]);

  const addPlayer = (player) => {
    setPlayerList([...playerList, player]);
  };

  const deletePlayer = (rowNumber) => {
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
  // console.log(`Current round is ${round}`);
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
      setRound(0);
    }
  };
  // console.log(playerList);

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
              addPlayer={addPlayer}
              deletePlayer={deletePlayer}
            />
          )}
        />
        <Route
          exact
          path="/game/cricket"
          component={() => (
            <Cricket
              playerList={playerList}
              getCurrentPlayer={getCurrentPlayer}
            />
          )}
        />
        <Route
          exact
          path="/game/baseball"
          component={() => (
            <Baseball
              playerList={playerList}
              addPlayer={addPlayer}
              setPlayerList={setPlayerList}
              changeTurns={changeTurns}
              getCurrentPlayer={getCurrentPlayer}
              resetScoreList={resetScoreList}
              changeRound={changeRound}
              round={round}
              turn={turn}
            />
          )}
        />
        <Route
          exact
          path="/game/x01"
          component={() => (
            <X01
              x01Points={x01Points}
              playerList={playerList}
              addPlayer={addPlayer}
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
            <X01GameSelection
              x01GameSelect={x01GameSelect}
              assignX01PlayerScore={assignX01PlayerScore}
            />
          )}
        ></Route>
        <Route path="/game/elimination/create" component={Elimination}></Route>
        <Route path="/game/killer/create" component={Killer}></Route>
        <Route path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
}
