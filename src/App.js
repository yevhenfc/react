import React, { Component } from 'react';
// import UsersPage from './Components/UsersPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    }
    console.log('constructor', this.state.x);
  }

  componentDidMount(){
    console.log('componentDidMount', this.state.x)
  };

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', this.state.x)    
  };

  componentWillUnmount(){
    console.log('componentWillUnmount', this.state.x)    
  };

  inc = () => {
    this.setState({x : this.state.x + 1});
    console.log('income function', this.state.x) 
  };

  render(){
    console.log('render', this.state.x) 
    return (
      <div>
        <h1>State X = {this.state.x}</h1>
        <button onClick={this.inc}>+</button>
      </div>
    )   
  }
}


