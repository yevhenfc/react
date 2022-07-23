import React, { Component } from 'react';
import styles from './Card.module.css';

export default class Card extends Component {
  render() {
    const {user: {name, surname, isSelected}, select} = this.props;
    const selectedStyle = isSelected ? styles.selected: null;
    return (
      <li onClick={select} className={selectedStyle}> 
        <p>{name} {surname}</p>
      </li>
    )
  }
}
