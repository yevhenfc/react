import React, { Component } from 'react'

export default class HelloClass extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {usName, usSurname} = this.props;
    return (
      <>
        <p>Hello, {usName} {usSurname}</p>
      </>
    )
  }
}