import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Component } from 'react';
import Nav from './components/Nav/Nav'
import IconBar from './components/IconBar/IconBar'
import Filters from './components/Filters/Filters'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'




export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <IconBar />
          <Filters />
          <Switch>
            <Route path="/" exact component={EmployeeCard} />
          </Switch>
        </div>
      </Router>
    );
  }

}


