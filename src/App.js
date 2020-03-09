import React from 'react';
import './App.css';
import { Component } from 'react';
import Nav from './components/Nav/Nav'
import IconBar from './components/IconBar/IconBar'
import Filters from './components/Filters/Filters'




export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <IconBar />
        <Filters />
      </div>
    );
  }

}


