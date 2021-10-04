import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import CreatePlayerList from "./screens/CreatePlayer";
import {
  CreateGame,
  X01GameSelection,
  EliminationSetUp,
  KillerSetUp,
} from "./screens/CreateGame";
import Cricket from "./screens/Cricket";
import Baseball from "./screens/Baseball";
import X01 from "./screens/X01";
import Elimination from "./screens/Elimination";
import Killer from "./screens/Killer";
import Rules from "./screens/Rules";
import X01OutShotChart from "./components/X01OutChart";

export default function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/create_player" component={CreatePlayerList} />
        <Route exact path="/game/cricket" component={Cricket} />
        <Route exact path="/game/baseball" component={Baseball} />
        <Route exact path="/game/x01" component={X01}></Route>
        <Route exact path="/game/elimination" component={Elimination} />
        <Route exact path="/game/killer" component={Killer} />
        <Route path="/game/x01/create" component={X01GameSelection} />
        <Route path="/game/elimination/create" component={EliminationSetUp} />
        <Route path="/game/killer/create" component={KillerSetUp} />
        <Route path="/rules" component={Rules} />
        <Route path="/outchart" component={X01OutShotChart} />
      </Switch>
    </Router>
  );
}
