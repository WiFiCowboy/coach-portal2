import React, { Component } from 'react'
import FlagBar from '../FlagBar/FlagBar'
import './JobView.css'
import { Link } from 'react-router-dom'

export default class JobView extends Component {
  render() {
    return (
      <div className="daily-container">
        <FlagBar />
        <h2 className="label">Job Detail</h2>
        <table className="esm-info">
          <thead>
            <tr>
              <th>WORK ORDER ID</th>
              <th>DISPOUT</th>
              <th>CMP</th>
              <th>JOBTYPE</th>
              <th>TRANSPORT</th>
              <th>EARNED</th>
              <th>DURATION</th>
              <th>STATUS</th>
            </tr>
            <tr>
              <td>W01101000</td>
              <td>Mar-5 08:15</td>
              <td>Mar-5 13:02</td>
              <td>IRJHAM</td>
              <td>FTTN-BP</td>
              <td>5.91</td>
              <td>7.01</td>
              <td>COMPLETE</td>
            </tr>
          </thead>
        </table>
        <button className='back-button'><Link to='/dailyview'>Back</Link></button>
      </div>
    )
  }
}