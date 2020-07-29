import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'
import Profile from './components/Profile'

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

        <NavLink exact to='/profile'>
          Profile
      </NavLink>
        <NavLink exact to='/dashboard'>
          DashBoard
      </NavLink>

        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signUp'>
            <Register />
          </Route>

          <PrivateRoute exact path='/dashboard'>
            <DashBoard />
          </PrivateRoute>

          <PrivateRoute exact path='/profile'>
            <Profile />
          </PrivateRoute>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
