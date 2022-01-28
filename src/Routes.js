import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./auth/ProtectedRoute";

import App from "./App";
import CreatePlayerList from "./screens/CreatePlayer";
import CreateGame from "./screens/createGame/CreateGame";
import X01GameSelection from "./screens/createGame/X01SetUp";
import EliminationSetUp from "./screens/createGame/EliminationSetUp";
import KillerSetUp from "./screens/createGame/KillerSetUp";
import Cricket from "./screens/games/Cricket";
import Baseball from "./screens/games/Baseball";
import X01 from "./screens/games/X01";
import Elimination from "./screens/games/Elimination";
import Killer from "./screens/games/Killer";
import Rules from "./screens/games/Rules";
import LoginUser from "./screens/dashboard/LogIn";
import UserRegistration from "./screens/dashboard/Register";
import Dashboard from "./screens/dashboard/Dashboard";

const Routes = () => {
  return (
    <Router basename="/dart-scoreboard">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/create_player" component={CreatePlayerList} />
        <Route exact path="/game/cricket" component={Cricket} />
        <Route exact path="/game/baseball" component={Baseball} />
        <Route exact path="/game/x01" component={X01} />
        <Route exact path="/game/elimination" component={Elimination} />
        <Route exact path="/game/killer" component={Killer} />
        <Route path="/game/x01/create" component={X01GameSelection} />
        <Route path="/game/elimination/create" component={EliminationSetUp} />
        <Route path="/game/killer/create" component={KillerSetUp} />
        <Route path="/rules" component={Rules} />
        <Route path="/game/login" component={LoginUser} />
        <Route path="/game/register" component={UserRegistration} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
