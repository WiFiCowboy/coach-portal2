import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EmployeeCard.css'
import data from './data'

export default class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = data
  }

  render() {

    return (
      this.state.employee.map(item => (
        <div className='employee-card' key={item.id}>
          <div className='image'><img src={item.image} alt=''></img></div>
          <div className='info-card'>
            <div className='info-data emp-name'><Link className='link' to='/scorecard'>
              {item.name}
            </Link></div>
            <div className='info-data tenure'>
              <p>10 yrears 2 Months</p>
            </div>
          </div>
          <div className="card-item"><h2>HPC</h2><h3>{item.hpc}</h3></div>
          <div className="card-item"><h2>VOC</h2><h3>{item.voc}</h3></div>
          <div className="card-item"><h2>AIQ</h2><h3>{item.aiq}</h3></div>
          <div className="card-item"><h2>True Test</h2><h3>{item.true}</h3></div>
          <div className="card-item"><h2>Billing</h2><h3>{item.billing}</h3></div>
          <div className="card-item"><h2>EP</h2><h3>{item.attianment}</h3></div>
          <div className="card-item"><h2>Attainment</h2><h3>{item.ep}</h3></div>
        </div>
      ))
    )
  }
}
