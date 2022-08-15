import React, { Component } from 'react'
// import Calendaar from './Components/Calendar'
// import Card from './Components/Card'
// import Clock from './Components/Clock'
// import SignInForm from './Components/SignInForm'
// import ReactPosts from './Components/ReactPosts'
// import CounterFun from './Components/CounterFun'
// import ManagedContest from './Components/ManagedContest'
//import CountClick from './Components/CountClick'
// import ClockMatrix from './Components/ClockMatrix'
//import RangeParent from './sandbox/RangeParent'
import Counter from './Components/Counter';


import { StepContext } from './Contexts';
// import { createContext } from 'react';
// const stepContext = createContext();


// const testUser = {
//   id: 1,
//   name: 'asd',
//   surname: 'avf'
// }

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
    }
  }
  
  handleStep = e => {
    this.setState({step: Number(e.target.value)});
  }

  render() {
    const {step} = this.state;
    return (
      <StepContext.Provider value={step}>
        <Counter />
     
      </StepContext.Provider>
    
      // <>
      //   <input type="number" value={step} onChange={this.handleStep}></input>
      //   <Counter step={step}/>
      // </>
    )
  }
}

