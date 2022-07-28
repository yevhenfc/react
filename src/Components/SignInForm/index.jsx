import { fromUnixTime } from 'date-fns/esm'
import React, { Component } from 'react'

export default class SignInForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       height: '',
       width: '',
    }
  }

  setHeight = (e) => {this.setState({height: e.target.value})};
  setWidth  = (e) => {this.setState({width: e.target.value})};
  handleSubmit = (e) => {e.preventDefault()};

  render() {
    const{height, width} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={height}    onChange={this.setHeight}    placeholder='height'   ></input>
        <input type="text" value={width} onChange={this.setWidth} placeholder='width'></input>
        <button type="submit">Ok</button>
        <div style={`border: '1px solid black', height: ${height}px, width=${width}px`}>

        </div>
      </form>
    )
  }
}
