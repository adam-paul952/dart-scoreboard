import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './App';
import CreatePlayerList from './screens/CreatePlayer';
import { CreateGame,  X01, Baseball, Cricket, Elimination, Killer } from './screens/CreateGame';
import CreateCricketBoard from './screens/Cricket';
import CreateBaseballBoard from './screens/Baseball';
import Rules from './screens/Rules';
import ScoreCalculator from './components/ScoreCalculator';
import CricketScoreCalculator from './components/CricketScoreCalculator';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/game/create' component={CreateGame} />
        <Route path='/create_player' component={CreatePlayerList} />
        {/* <Route path='/game/cricket' component={CreateCricketBoard} />
        <Route path='/game/baseball' component={CreateBaseballBoard} /> */}
        <Route path='/rules' component={Rules} />
        <Route path='/game/x01/create' component={X01}></Route>
        <Route path='/game/baseball/create' component={Baseball}></Route>
        <Route path='/game/cricket/create' component={Cricket}></Route>
        <Route path='/game/elimination/create' component={Elimination}></Route>
        <Route path='/game/killer/create' component={Killer}></Route>
        <Route path='/game/score_calculator' component={ScoreCalculator}></Route>
        <Route path='/game/cricket_score' component={CricketScoreCalculator}></Route>
      </Switch>
    </Router>
  );
};