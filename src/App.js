import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Game from './components/Game.js';
import NavBar from'./components/NavBar.js';
import NoMatch from './components/NoMatch.js';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/game" component={Game}  />
      <Route component={NoMatch}  />
    </Switch>
</>
  )
};

export default App;
