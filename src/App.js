import React from 'react';
import './App.css';
import { Component } from 'react';
import Nav from './components/Nav/Nav'
import IconBar from './components/IconBar/IconBar'
import Filters from './components/Filters/Filters'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'




export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <IconBar />
        <Filters />
        <EmployeeCard />
      </div>
    );
  }

}


