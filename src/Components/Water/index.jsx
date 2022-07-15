import React, { Component } from 'react';
//import  './Water.css';
import styles from './Water.module.css';

export default class Water extends Component {
  constructor(props){
    super(props);
    this.state = {
        shape: 'water'
    }
    this.styleWater = '';
  }

changeShape = () => {
    const {temperature} = this.props;
    let newShape;
    if      (temperature < 0)   {newShape = 'ice';   this.styleWater = 'ice'}
    else if (temperature > 100) {newShape = 'steam'; this.styleWater = 'steam'}
    else                        {newShape = 'water'; this.styleWater = 'water'};
    this.setState({shape: newShape});
}

render() {
    this.changeShape();
    return (
      <>
        {/* <p className={this.styleWater}>{this.state.shape}</p> */}
        <p className={styles[this.styleWater]}>{this.state.shape}</p>
      </>
    )
  }
}
