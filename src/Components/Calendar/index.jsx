import React, { Component } from 'react'
import {format} from 'date-fns';

export default class Calendar extends Component {
  render() {
    return (
      <>
        <p>{format(new Date(), 'EEEE LLLL yyyy DDDD')}</p>
        <p>{format(new Date(), 'yyy LLL dd')}</p>
        <p>{format(new Date(), 'yyyyMMdd')}</p>
      </>
    )
  }
}
