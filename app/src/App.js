import React from 'react';
import {BrowserRouter as Router, Route, Switch , NavLink} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavLink exact to ='/login'>
        Login
      </NavLink>
      <NavLink exact to ='/signUp'>
        Sign-Up
      </NavLink>
      <Router>
        <Switch>
            <Route exact path ='/login'>

            </Route>
            <Route exact path ='/signUp'>

            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
