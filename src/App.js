import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Component } from 'react';
import Nav from './components/Nav/Nav'
import IconBar from './components/IconBar/IconBar'
import Filters from './components/Filters/Filters'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import DailyView from './components/DailyView/DailyView'
import JobView from './components/JobView/JobView'
import HpcView from './components/Hpc/HpcView'




export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <IconBar />
          <Filters />
          <HpcView />
          <Switch>
            <Route path="/coach-portal2" exact component={EmployeeCard} />
            <Route path="/dailyview" component={DailyView} />
            <Route path="/jobview" component={JobView} />
          </Switch>
        </div>
      </Router>
    );
  }

}


