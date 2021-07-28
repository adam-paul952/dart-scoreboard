import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './App';
import CreatePlayerList from './CreatePlayer';
import CreateGame from './CreateGame';
import CreateCricketBoard from './Cricket';
import CreateBaseballBoard from './Baseball';
import Rules from './Rules';

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