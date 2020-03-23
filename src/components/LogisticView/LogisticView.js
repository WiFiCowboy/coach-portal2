import React, { Component } from 'react'
import FlagBar from '../FlagBar/FlagBar'
import './LogisticView.css'
import { Link } from 'react-router-dom'

export default class LogisticView extends Component {
  render() {
    return (
      <div className="daily-container">
        <FlagBar />
        <h2 className="label">Logistic Performance</h2>
        <table className="esm-info">
          <thead>
            <tr>
              <th>Start Time</th>
              <th>Left Garage</th>
              <th>Depart Diff</th>
              <th>Scheduled Stop</th>
              <th>Last Stop</th>
              <th>Return Diff</th>
              <th>Drive Duration</th>
              <th>Stop Duration</th>
              <th>Stop Points</th>
            </tr>
            <tr>
              <td>Mar-5 08:00</td>
              <td>Mar-5 08:15</td>
              <td>.25</td>
              <td>Mar-5 16:30</td>
              <td>Mar-5 16:00</td>
              <td>.50</td>
              <td>1.00</td>
              <td>1.00</td>
              <td>4</td>
            </tr>
          </thead>
        </table>
        <button className='back-button'><Link to='/dailyview'>Back</Link></button>
      </div>
    )
  }
}