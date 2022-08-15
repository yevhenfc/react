import React, { Component } from 'react'
import InnerCounter from '../InnerCounter'
import PropTypes from 'prop-types';
import { StepContext } from '../../Contexts';

export default class Counter extends Component {
  constructor(props) {
    super(props)
      this.state = {
      value: 0,
    }
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

  NewValueHandler = (newValue) => {
    this.setState({value: newValue});
  };

  shouldComponentUpdate(nextProps, nextState){
    const {value} = this.state;
    const {step}  = this.props;
  console.log(nextProps, nextState);
  return value !== nextState.value && step !== nextProps.step;
  };

  render() {
    const {value} = this.state;
    console.log('counter');
    return (
      <>
        <h2>Counter {this.state.value}</h2>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <StepContext.Consumer>
          {step => {
            return <p>{step}</p>
        }}
        </StepContext.Consumer>
      </>
    )
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,    
}

Counter.defaultProps = {
  step: 1,
}