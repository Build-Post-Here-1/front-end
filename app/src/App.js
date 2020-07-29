import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/DashBoard'
import Profile from './components/Profile'

import logo from './logo.svg';
import reddit from './pic/reddit.png'
import './App.css';


import {Banner} from './styles/styles'

function App() {


  return (
    <div className="App">
        <Router>

          <nav>
            <Banner>
            <img
            className='reddit'
            src={reddit}
            alt='thumbnail'
            />
          <NavLink  className ='nav' exact to='/login'>
            Login
          </NavLink>

          <NavLink  className ='nav'     exact to='/signUp'>
            Sign-Up
          </NavLink>

          <NavLink  className ='nav'  exact to='/profile'>
            Profile
        </NavLink>
          <NavLink  className ='nav'  exact to='/dashboard'>
            DashBoard
        </NavLink>
         </Banner>
        </nav>
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
