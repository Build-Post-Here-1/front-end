import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Login from './Login'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink exact to='/login'>
          Login
      </NavLink>
        <NavLink exact to='/signUp'>
          Sign-Up
      </NavLink>

        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signUp'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
