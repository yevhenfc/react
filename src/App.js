import React, { Component } from 'react'
// import Calendaar from './Components/Calendar'
import Card from './Components/Card'

const testUser = {
  id: 1,
  name: 'asd',
  surname: 'avf'
}

export default class App extends Component {
  render() {
    return (
      <>
        <Card user={testUser}/>
      </>
    )
  }
}

