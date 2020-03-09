import React, { Component } from 'react'
import './Filters.css'


export default class Filters extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter-item">
          <select>
            <option>MTD - 6 Mo Rolling</option>
            <option>{`3 Mo Rolling (Completed)`}</option>
            <option>Daily</option>
            <option>QTD</option>
            <option>YTD</option>
          </select>
        </div>
        <div className="filter-item">
          <input type='date' />
        </div>
        <div className="filter-item">
          <button className="btn"><i className="fa fa-refresh"></i>Update Results</button>
        </div>
        <div className="filter-item">
          <button className="btn export"><i className="fa fa-download export"></i>Export Results</button>
        </div>
      </div>
    )
  }
}

