import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlagBar from '../FlagBar/FlagBar'
import './HpcView.css'


class HpcView extends Component {
  render() {
    return (
      <div className="hpc-container">
        <FlagBar />
        <h2 className="label">HPC Detail</h2>
        <table className="hpc-info">
          <thead>
            <tr>
              <th>Key Metrics</th>
              <th>Objectives</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="5" scope="rowgroup">HPC</th>
              <th>Completed</th>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">HPC</th>
              <td>2.54</td>
            </tr>
            <tr>
              <th scope="row">Goal</th>
              <td>3.15</td>
            </tr>
            <tr>
              <th scope="row">Variance Hrs</th>
              <td>-2</td>
            </tr>
            <tr>
              <th scope="row">% HPC Variance</th>
              <td>-19%</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="5" scope="rowgroup"><Link className='link' to='/dailyview'>Performance</Link></th>
              <th>Efficiency</th>
              <td>103.77</td>
            </tr>
            <tr>
              <th scope="row">Utilization</th>
              <td>89.29</td>
            </tr>
            <tr>
              <th scope="row">Productivity</th>
              <td>92.65</td>
            </tr>
            <tr>
              <th scope="row">Total Hrs</th>
              <td>98</td>
            </tr>
            <tr>
              <th scope="row">Earned Hrs</th>
              <td>90.8</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="4" scope="rowgroup">Quality</th>
              <th>AIQ</th>
              <td>90.55</td>
            </tr>
            <tr>
              <th scope="row">Job Base</th>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">Install Defects</th>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">Repair Defects</th>
              <td>9</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="4" scope="rowgroup">Dispatch</th>
              <th>DE</th>
              <td>81.25</td>
            </tr>
            <tr>
              <th scope="row">Total Jobs</th>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">Complete</th>
              <td>90</td>
            </tr>
            <tr>
              <th scope="row">Incomplete</th>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <button className='back-button'><Link to='/scorecard'>Back</Link></button>
      </div>
    )
  }
}
export default HpcView;  