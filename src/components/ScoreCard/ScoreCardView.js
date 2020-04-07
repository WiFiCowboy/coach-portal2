import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ScoreCardView.css'


class ScoreCardView extends Component {
  render() {
    return (
      <div className="hpc-container">
        <h2 className="label">Scorecard Detail</h2>
        <table className="hpc-info">
          <thead>
            <tr>
              <th>Key Metrics Category</th>
              <th>Metric</th>
              <th>Target</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="9" scope="rowgroup">Eff/Util</th>
              <th>Install 1st AVA</th>
              <td>Surreptitious</td>
              <td>3.81</td>
            </tr>
            <tr>
              <th scope="row">Repair 1st AVA</th>
              <td>Surreptitious</td>
              <td>1.26</td>
            </tr>
            <tr>
              <th scope="row">Made Appt Install</th>
              <td>>=65</td>
              <td>66.22</td>
            </tr>
            <tr>
              <th scope="row">Made Appt Repair</th>
              <td>>=65</td>
              <td>57.22</td>
            </tr>
            <tr>
              <th scope="row">Repair Customer Duration</th>
              <td>>=75</td>
              <td>72.12</td>
            </tr>
            <tr>
              <th scope="row">Repair Customer Duration DS1</th>
              <td>>=78.2</td>
              <td>70.97</td>
            </tr>
            <tr>
              <th scope="row">Repair Customer Duration Ethernet</th>
              <td>>=75</td>
              <td>73.53</td>
            </tr>
            <tr>
              <th scope="row">HPC</th>
              <td>Surreptitious</td>
              <td>3.10</td>
            </tr>
            <tr>
              <th scope="row">Multiple Dispatch Rate</th>
              <td>Surreptitious</td>
              <td>1.5</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="2" scope="rowgroup">AIQ</th>
              <th>Installation</th>
              <td>>=90</td>
              <td>93.85</td>
            </tr>
            <tr>
              <th scope="row">Repair</th>
              <td>>=87</td>
              <td>89.67</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="6" scope="rowgroup">DE</th>
              <th>SDCR Install</th>
              <td>>=67</td>
              <td>64.26</td>
            </tr>
            <tr>
              <th scope="row">SDCR Repair</th>
              <td>>=86</td>
              <td>79.45</td>
            </tr>
            <tr>
              <th scope="row">MDR Install</th>
              <td>{"<=1.49"}</td>
              <td>1.62</td>
            </tr>
            <tr>
              <th scope="row">MDR Repair</th>
              <td>{"<=1.19"}</td>
              <td>1.25</td>
            </tr>
            <tr>
              <th scope="row">HPC Install</th>
              <td>{"<=4.95"}</td>
              <td>4.18</td>
            </tr>
            <tr>
              <th scope="row">HPC Repair</th>
              <td>{"<=2.51"}</td>
              <td>2.52</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th rowSpan="1" scope="rowgroup">VOC</th>
              <th>Voice of the Customer</th>
              <td>>=90</td>
              <td>99.07</td>
            </tr>
          </tbody>
        </table>
        <button className='back-button'><Link to='/coach-portal2'>Back</Link></button>
      </div>
    )
  }
}
export default ScoreCardView;  