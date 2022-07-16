import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
      this.state = {
      value: 0,
      step: 1,
    }
  }

  sayHello = () => {
    alert(this.state.value);
  }

  inc = () =>{
    const {value, step} = this.state;
    this.setState({value: value + step});
   }

  dec = () =>{
    const {value, step} = this.state;
    if (value <= 0) {alert('error')}
    else {this.setState({value: value - step})};
  }

  add1ToStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
    console.log(step);
  }

   render() {
    return (
      <>
        <h2>Counter {this.state.value}</h2>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <button onClick={this.add1ToStep}> step+1</button>
        <button onClick = {this.sayHello}> sayHello </button>
      </>
    )
  }
}
