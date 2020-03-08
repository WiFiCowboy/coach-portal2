import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav'
import IconBar from './components/iconBar'
import Home from './components/Home'
import Hpc from './components/Hpc'
import Voc from './components/Voc'
import Atnd from './components/Atnd'
import Details from './components/Details'
import HpcDetails from './components/HpcDetails'
import './App.css';
import { Component } from 'react';




export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <IconBar />
          <Switch>
            <Route path="/coach-portal" exact component={Home} />
            <Route path="/hpc/:id" exact component={HpcDetails} />
            {/* <Route path="/hpc" component={Hpc} /> */}
            <Route path="/voc" component={Voc} />
            <Route path="/atnd" component={Atnd} />
            <Route path="/manager/:id" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }

}


