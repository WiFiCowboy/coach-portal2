import React from 'react'
import FlagData from './FlagData'
import './FlagBar.css'

function FlagBar() {

  const flagDispaly = FlagData.months.map(item => {
    return (
      <div key={item.id} className="flag-block">
        <h4> {item.month} </h4>
        {item.flagOn === true ?
          <div className="flag-block">
            <i className="fa fa-flag" ></i>
          </div>
          :
          <div className="flag-block">
            <i className="fa fa-flag-o" ></i>
          </div>}
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
      </div>
    </div>
  )
}

export default FlagBar;