import React, { Component } from 'react'

export default class InnerCounter extends Component {
  MakeZeroHandler = () => {
    this.props.NewValueHandler(0);
  }
  render() {
    return (
      <>
        <p>Inner counter {this.props.value}</p>
        <button onClick={this.MakeZeroHandler}>makeZero</button>
      </>
    )
  }
}
