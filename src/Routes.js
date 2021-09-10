import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import CreatePlayerList from "./screens/CreatePlayer";
import {
  CreateGame,
  X01GameSelection,
  EliminationSetUp,
  Killer,
} from "./screens/CreateGame";
import Cricket from "./screens/Cricket";
import Baseball from "./screens/Baseball";
import X01 from "./screens/X01";
import Elimination from "./screens/Elimination";
import Rules from "./screens/Rules";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/create_player" component={CreatePlayerList} />
        <Route exact path="/game/cricket" component={Cricket} />
        <Route exact path="/game/baseball" component={Baseball} />
        <Route exact path="/game/x01" component={X01}></Route>
        <Route exact path="/game/elimination" component={Elimination} />
        <Route path="/game/x01/create" component={X01GameSelection} />
        <Route path="/game/elimination/create" component={EliminationSetUp} />
        <Route path="/game/killer/create" component={Killer} />
        <Route path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
}
