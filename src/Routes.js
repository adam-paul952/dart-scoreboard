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
import Rules from "./screens/Rules";
import ScoreCalculator from "./components/ScoreCalculator";

export default function Routes() {
  const [playerList, setPlayerList] = useState([]);

  const updatePlayerList = (player) => {
    setPlayerList([...playerList, player]);
  };
  console.log(playerList);

  const deleteRow = (rowNumber) => {
    let updatedRows = [...playerList];
    updatedRows.splice(rowNumber, 1);
    setPlayerList(updatedRows);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/game/create"
          component={() => <CreateGame playerList={playerList} />}
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
        <Route exact path="/game/cricket" component={CreateCricketBoard} />
        <Route
          exact
          path="/game/baseball"
          component={() => <CreateBaseballBoard playerList={playerList} />}
        />
        <Route path="/game/x01/create" component={X01}></Route>
        <Route path="/game/baseball/create" component={Baseball}></Route>
        <Route path="/game/cricket/create" component={Cricket}></Route>
        <Route path="/game/elimination/create" component={Elimination}></Route>
        <Route path="/game/killer/create" component={Killer}></Route>
        <Route
          path="/game/score_calculator"
          component={ScoreCalculator}
        />
        <Route path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
}
