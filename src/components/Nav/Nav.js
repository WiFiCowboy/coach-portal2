import React, { Component } from 'react'
import logo from '../../assets/attLogo.png'
import './Nav.css'
import { FaBars, FaCog } from 'react-icons/fa';

class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="nav-links">
          <div className="nav-icons "><FaBars className="block" /></div>
          <div className="logo"><img src={logo} alt="globe" ></img></div>
          <div className="nav-icons "><FaCog className="block" /></div>
        </div>
      </nav >
    );
  }
}

export default Nav;