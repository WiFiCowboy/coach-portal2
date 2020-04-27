import React, { Component } from 'react'
import history from './../../history'
// import { Link } from 'react-router-dom'
import './CoachForm.css'

export default class CoachForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleSubmit(event) {
  //   alert('A Form was submitted for: ' + this.state.value);
  //   event.preventDefault();
  //   history.push('/scorecard')
  // }


  render() {
    return (
      <form className='coach-form'>
        <label>
          Coaching :
          <input type="radio" value="coaching" onChange={this.handleChange} />
        </label>
        <label>
          Verbal :
          <input type="radio" value="verbal" onChange={this.handleChange} />
        </label>
        <label>
          Other :
          <input type="radio" value="other" onChange={this.handleChange} />
        </label>
        <label>
          Notes :
          <input type="text" />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        {/* <button className='back-button'><Link to='/jobview'>Back</Link></button> */}
        <button onClick={() => history.push('/scorecard')}>submit</button>
      </form>
    );
  }
}