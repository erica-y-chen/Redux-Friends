import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute';

function App() {

    return (
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path ="/protected" component={Friends} />
      </Router>
    );
}


export default App;
