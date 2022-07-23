import React, { Component } from 'react';
import styles from './Card.module.css';

export default class Card extends Component {
  render() {
    const {user: {name, surname}, select} = this.props;
    const selectedStyle = isSelected ? style.selected: null;
    return (
      <li onClick={select}> 
        <p>{name} {surname}</p>
      </li>
    )
  }
}
