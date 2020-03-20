import React from 'react'
import FlagData from './FlagData'
import './FlagBar.css'

function FlagBar() {

  const flag = FlagData.months.map(item => {
    if (item.flagOn) {
      return (
        <div className="flag-block">
          <i className="fa fa-flag" ></i>
        </div>
      )
    }
  })

  const flagDispaly = FlagData.months.map(item => {
    return (
      <div key={item.id} className="flag-block">
        <h4> {item.month} </h4>
        {flag}
      </div>
    )
  }
  )



  return (
    <div className="flag-container">
      <div className="tech-type">
        <h3>HD</h3>
        <i className="fa fa-home" ></i>
      </div>
      <div className="flag-month">
        {flagDispaly}
        {/* {flag} */}
      </div>
    </div>
  )
}

export default FlagBar;