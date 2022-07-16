import React, { Component } from 'react'

export default class HelloClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHello: true,
      msg: '',
    }
  }

  changeMode = () => {
    if(this.props.isHelloMode) {
      this.setState ({
        isHello: true,
        msg: 'Hello'
      });
    }
    else {
      this.setState ({
        isHello: false,
        msg: 'Bye',
      });
    }
  } 

  render() {
  const {name, surname, isHelloMode} = this.props;
  return (
      <>
        <p>{isHelloMode ? 'Hello' : 'Bye'}
        , {name} {surname
          }</p>
      </>
    )
  }
}