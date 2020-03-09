import React, { Component } from 'react'
import './IconBar.css'
// import { FaChartBar, FaNewspaper, FaExclamationTriangle, FaTasks, FaUsers, FaTruck, FaGlobeAmericas, FaLink, FaTable, FaTrophy, FaEdit, FaFontAwesome } from 'react-icons/fa'
import icons from './IconStore'
// import FaFontAwesomeIcon from 'react-icons/fa'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class IconBar extends Component {
  constructor(props) {
    super(props);
    this.state = icons
  }

  render() {

    const faIcon = this.state.icons.map(item => (
      <div className="icon-block" key={item.id}>
        <span><i className={item.name} ></i></span>
        <span className="icon-title">{item.title}</span>
      </div>
    ))

    return (
      <div className="icon-bar">
        {faIcon}
      </div>
    )
  }
}