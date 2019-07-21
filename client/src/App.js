import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history/history';
import Splash from './pages/Splash/index';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route component={Splash} />
      </Switch>
    </Router>
  );
}

export default App;
