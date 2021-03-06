import React, { Component } from 'react'
import './DailyView.css'
import LogisticView from '../LogisticView/LogisticView'

export default class DailyView extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div className="daily-container">
        <h2 className="label">Job Summary</h2>
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
        <h2 className="label">TIME Summary</h2>
        <table>
          <thead>
            <tr>
              <th>AM</th>
              <th>PM</th>
              <th>TRAVEL</th>
              <th>FUEL</th>
              <th>TOTAL EARNED</th>
            </tr>
            <tr>
              <td>0.24</td>
              <td>0.16</td>
              <td>1.27</td>
              <td>0.03</td>
              <td>14.84</td>
            </tr>
            <tr>
              <th>TOTAL DISPOUT</th>
              <th>DAILY JOB ESM</th>
            </tr>
            <tr>
              <td>6.98</td>
              <td>6.98</td>
            </tr>
          </thead>
        </table>
        <LogisticView />
        {/* <button className='back-button'><Link to='/hpc'>Back</Link></button> */}
      </div>
    )
  }
}