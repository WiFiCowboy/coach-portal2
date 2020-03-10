import React, { Component } from 'react'
import './EmployeeCard.css'

export default class EmployeeCard extends Component {

  render() {
    return (
      <div className='employee-card'>
        <div className='image'><img src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Employee Image"></img></div>
        <div className='info-card'>
          <div className='info-data'></div>
          <div className='info-data'></div>
          <div className='info-data'></div>
          <div className='info-data'></div>
        </div>
      </div>
    )
  }
}