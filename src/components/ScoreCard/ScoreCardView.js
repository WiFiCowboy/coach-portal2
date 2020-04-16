import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FlagBar from '../FlagBar/FlagBar'
import './ScoreCardView.css'
// import data from './ScoreCardData'
import DailyView from '../DailyView/DailyView'


class ScoreCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: true,
      totalHrsWrk: true,
      active: false,
      notActive: false
    }
  }

  handleTest = () => {
    return `className="cmp"`
  }

  test = () => {
    if (this.state.addClass) {
      return "cmp"
    }
  }

  handleClass = () => {
    this.setState({ addClass: !this.state.addClass })
  }

  addClass() {
    if (this.state.addClass) {
      return "red"
    }
  }

  render() {
    // const isOn = this.state.active
    return (
      <div className="metric-container">
        <FlagBar />
        <h2 className="top-label">Employee Detail</h2>
        <DailyView />
        <table className="key-metrics">
          <thead className="table-header">
            <tr>
              <th colSpan="13">Key Metrics</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="performance" rowSpan="4" scope="rowgroup">Performance</th>
              <th scope="row">Efficiency</th>
              <th scope="row">Utilization</th>
              <th scope="row">Productivity</th>
              <th scope="row">Total Hrs Wrk</th>
              <th scope="row">Earned Hrs</th>
              <th scope="row">Demand Hrs</th>
              <th scope="row">Non-Productive Hrs</th>
              <th scope="row">Available time Not Dispatched</th>
            </tr>
            <tr>
              <td >100%</td>
              <td >50%</td>
              <td >50%</td>
              <td onClick={this.handleClass} className={this.addClass()}>7.5</td>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
            </tr>
            <tr className="inner-header">
              <th scope="row">NJA hrs</th>
              <th scope="row">Execption Hrs</th>
              <th scope="row">Execption Codes</th>
              <th scope="row">Lunch Taken</th>
              <th scope="row">Dispatched Through Lunch</th>
            </tr>
            <tr>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
              <td onClick={this.handleClass} className={this.addClass()}>4</td>
              <td >1</td>
              <td >Y</td>
              <td >Y</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="dispatch" rowSpan="2" scope="rowgroup">Dispatch</th>
              <th scope="row">DE</th>
              <th scope="row">Total Jobs</th>
              <th scope="row">Completed install</th>
              <th scope="row">Completed Repair</th>
              <th scope="row">Jep Install</th>
              <th scope="row">Jep Repair</th>
            </tr>
            <tr>
              <td onClick={this.handleClass} className={this.addClass()}>50%</td>
              <td >2</td>
              <td >1</td>
              <td >0</td>
              <td >0</td>
              <td onClick={this.handleClass} className={this.addClass()}>1</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="hpc" rowSpan="2" scope="rowgroup">HPC</th>
              <th scope="row">Completed</th>
              <th scope="row">HPC</th>
              <th scope="row">Goal</th>
              <th scope="row">Variance Hrs</th>
              <th scope="row">% HPC Variance</th>
            </tr>
            <tr>
              <td>2</td>
              <td>1.5</td>
              <td>3.5</td>
              <td>-2</td>
              <td>-20</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="quality" rowSpan="2" scope="rowgroup">Quality</th>
              <th scope="row">AIQ</th>
              <th scope="row">Job base</th>
              <th scope="row">Install defects</th>
              <th scope="row">Repair Defects</th>
              <th scope="row">Pending Install Defects</th>
              <th scope="row">Pending Repair Defects</th>
              <th scope="row">Total Number of Defects</th>
            </tr>
            <tr>
              <td >90%</td>
              <td >40</td>
              <td >1</td>
              <td >3</td>
              <td >0</td>
              <td onClick={this.handleClass} className={this.addClass()}>1</td>
              <td >4</td>
            </tr>
          </tbody>
        </table>
        <table className="key-metrics">
          <thead className="table-header">
            <tr>
              <th colSpan="9">KEY METRICS CATEGORY</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="performance" rowSpan="2" scope="rowgroup">Efficiency/Utilization</th>
              <th scope="row">Install 1st AVA</th>
              <th scope="row">Repair 1st AVA</th>
              <th scope="row">Made Appt Install</th>
              <th scope="row">Repair Customer Duration</th>
              <th scope="row">Repair Customer Duration DS1</th>
              <th scope="row">Repair Customer Duration Ethernet</th>
              <th scope="row">HPC</th>
              <th scope="row">Multiple Dispatch Rate</th>
            </tr>
            <tr>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
              <td >n/a</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="dispatch" rowSpan="3" scope="rowgroup">DE</th>
              <th scope="row">SDCR Install</th>
              <th scope="row">SDCR Repair</th>
              <th scope="row">MDR Install</th>
              <th scope="row">MDR Repair</th>
              <th scope="row">HPC Install</th>
              <th scope="row">HPC Repair</th>
            </tr>
            <tr>
              <td >{"Target >=67"}</td>
              <td >{"Target >=86"}</td>
              <td >{"Target <=1.49"}</td>
              <td >{"Target <=1.19"}</td>
              <td >{"Target <=4.95"}</td>
              <td >{"Target <=2.51"}</td>
            </tr>
            <tr>
              <td >{"Score 50"}</td>
              <td >{"Score 79.54"}</td>
              <td >{"Score 1.34"}</td>
              <td >{"Score 1.36"}</td>
              <td >{"Score 6.21"}</td>
              <td >{"Score 3.43"}</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="quality" rowSpan="3" scope="rowgroup">AIQ</th>
              <th scope="row">Install</th>
              <th scope="row">Repair</th>
            </tr>
            <tr>
              <td>{"Target >=90"}</td>
              <td>{"Target >=87"}</td>
            </tr>
            <tr>
              <td>{"Score 90.3"}</td>
              <td>{"Score 84.26"}</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="voc" rowSpan="2" scope="rowgroup">{"VOC Target >=90"}</th>
              <th scope="row">Voice of the Customer</th>
              <th scope="row">New Surveys</th>
            </tr>
            <tr>
              <td>{"Score 95"}</td>
              <td>{"Score 0"}</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="epic" rowSpan="2" scope="rowgroup">EPIC CENTER MEASURMENTS</th>
              <th scope="row">Effective Performance</th>
              <th scope="row">Attainment</th>
            </tr>
            <tr>
              <td>77</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
        <table className="key-metrics">
          <thead className="table-header">
            <tr>
              <th colSpan="9">COMPLIANCE/COVERAGES/TRAINING/ADMINISTRATIVE</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className='stats' rowSpan="2" scope="rowgroup">Stats</th>
              <th scope="row">Billing</th>
              <th scope="row">TRUE</th>
              <th scope="row">Required Monthly Coverages</th>
            </tr>
            <tr>
              <td onClick={this.handleClass} className={this.addClass()}>40</td>
              <td onClick={this.handleClass} className={this.addClass()}>68</td>
              <td >90</td>
            </tr>
          </tbody>
          <tbody className="table-body">
            <tr className="inner-header">
              <th className="admin" rowSpan="2" scope="rowgroup">Administrative</th>
              <th scope="row">Crew Meetings</th>
              <th scope="row">Safety Meeting</th>
              <th scope="row">Qualities</th>
              <th scope="row">Safeties</th>
              <th scope="row">Rides</th>
              <th scope="row">Coaching</th>
              <th scope="row">Disiplinary Action</th>
              <th scope="row">CAP</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <table className="key-metrics actions-table">
          <thead className="table-header">
            <tr>
              <th colSpan="1">TECHNICIAN COVERAGE ITEMS</th>
            </tr>
          </thead>
          <tbody className="alert" >
            <tr>
              <th scope="row">Efficiency</th>
            </tr>
            <tr>
              <th scope="row">DE</th>
            </tr>
            <tr>
              <th scope="row">Dispatched Through Lunch</th>
            </tr>
            <tr>
              <th scope="row">TRUE</th>
            </tr>
            <tr>
              <th scope="row">Billing</th>
            </tr>
          </tbody>
        </table>
        <table className="key-metrics actions-table">
          <thead className="table-header">
            <tr>
              <th colSpan="2">ACTION TAKEN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Verbal Coverage</th>
              <td>Date:</td>
            </tr>
            <tr>
              <th scope="row">Coaching</th>
              <td>Date:</td>
            </tr>
            <tr>
              <th scope="row">Other {"(Explain)"}</th>
              <td>Date:</td>
            </tr>
            <tr>
              <th scope="row">No Coverage Needed</th>
              <td>Reason:</td>
            </tr>
          </tbody>
        </table>
        <button className='back-button'><Link to='/coach-portal2'>Back</Link></button>
      </div>
    )
  }
}
export default ScoreCardView;  