import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       time: 0
    };
    
    this.timerId = null;
  };
  
  start = () => !this.timerId ? this.timerId = setInterval(this.next, 1000) : null;
  next = () => {this.setState({time: this.state.time + 1})}; 
  reset = () => {this.setState({time: 0})};
  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  }
  componentDidMount(){this.start()};
  componentWillUnmount(){this.stop()};
  render() {
     return (
      <>
        <h1>{this.state.time}</h1>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </>
    )
  }
}
