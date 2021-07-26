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

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/CreateGame' component={CreateGame} />
        <Route path='/CreatePlayer' component={CreatePlayerList} />
        <Route path='/Cricket' component={CreateCricketBoard} />
        <Route path='/Baseball' component={CreateBaseballBoard} />
      </Switch>
    </Router>
  );
};