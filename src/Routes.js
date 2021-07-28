import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './App';
import CreatePlayerList from './screens/CreatePlayer';
import CreateGame from './screens/CreateGame';
import CreateCricketBoard from './screens/Cricket';
import CreateBaseballBoard from './screens/Baseball';
import Rules from './screens/Rules';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/game/create' component={CreateGame} />
        <Route path='/create_player' component={CreatePlayerList} />
        <Route path='/game/cricket' component={CreateCricketBoard} />
        <Route path='/game/basedball' component={CreateBaseballBoard} />
        <Route path ='/rules' component={Rules} />
      </Switch>
    </Router>
  );
};