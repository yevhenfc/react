import React, { Component } from 'react'
import {format, add, addDays, sub} from 'date-fns';

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       day: new Date()
    }
  }
  
  addDays = options => {
    const newDay = add(this.state.day, options);
    this.setState({day: newDay});
  }

  addDays2 = options => {
    const newDay = addDays(this.state.day, options);
    this.setState({day: newDay});
  }
  
  subDays = options => {
    const newDay = sub(this.state.day, options);
    this.setState({day: newDay});
  }

  render() {
    const {day} = this.state;
    return (
      <>
        <p>{format(new Date(), 'EEEE LLLL yyyy DDDD')}</p>
        <p>{format(new Date(), 'yyy LLL dd')}</p>
        <p>{format(new Date(), 'yyyyMMdd')}</p>
        <p>{format(day, 'yyyyMMdd')}</p>
        <button onClick={() =>this.addDays({days: 1})}>Add 1 day</button>
        <button onClick={() =>this.addDays({days: 1})}>Add 1 day</button>        
        <button onClick={() =>this.addDays2(10)}>Add 10 days</button>
        <button onClick={() =>this.subDays({days: 2})}>Sub 2 days</button>
      </>
    )
  }
}
