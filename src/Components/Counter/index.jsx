import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
      this.state = {
      value: 0,
    }
  }

  sayHello = () => {
    alert(this.state.value);
  }

  inc = () =>{
    const {value} = this.state;
    const {step} = this.props;
    this.setState({value: value + step});
   }

  dec = () =>{
    const {value} = this.state;
    const {step} = this.props;
    if (value <= 0) {alert('error')}
    else {this.setState({value: value - step})};
  }

   render() {
    return (
      <>
        <h2>Counter {this.state.value}</h2>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <button onClick = {this.sayHello}> sayHello </button>
      </>
    )
  }
}
