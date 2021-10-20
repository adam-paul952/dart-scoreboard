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
import Cricket from "./screens/games/Cricket";
import Baseball from "./screens/games/Baseball";
import X01 from "./screens/games/X01";
import Elimination from "./screens/games/Elimination";
import Killer from "./screens/games/Killer";
import Rules from "./screens/games/Rules";
import LoginUser from "./screens/dashboard/LogIn";
import UserRegistration from "./screens/dashboard/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import EditUserInfo from "./screens/dashboard/EditUser";
import DeleteUser from "./screens/dashboard/DeleteUser";
import SelectPlayersFromDB from "./screens/dashboard/ShowPlayersFromDB";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user/edit" component={EditUserInfo} />
        <Route path="/user/delete" component={DeleteUser} />
        <Route path="/user/select_players" component={SelectPlayersFromDB} />
      </Switch>
    </Router>
  );
};

export default Routes;
