import React, { Component } from 'react'
// import Calendaar from './Components/Calendar'
// import Card from './Components/Card'
// import Clock from './Components/Clock'
// import SignInForm from './Components/SignInForm'
// import ReactPosts from './Components/ReactPosts'
import CounterFun from './Components/CounterFun'

// const testUser = {
//   id: 1,
//   name: 'asd',
//   surname: 'avf'
// }

export default class App extends Component {
  render() {
    return (
      <>
  
        <CounterFun step={5}/>
      </>
    )
  }
}

