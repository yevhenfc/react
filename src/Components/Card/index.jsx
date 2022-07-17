import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {name, email, imgSrc}= this.props.user;
    return (
      <div>
        <img src="imgSrc" alt="photo" />
        <p>Name:  {name}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}
