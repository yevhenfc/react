import React, { Component } from 'react';
import styles from './User.module.css';

export default class User extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Tom',
       surname: 'Fox',
       age: 20,
       isSelected: false,
    }
  }
  
  select = () => {
    const {isSelected} = this.state;
    this.setState({isSelected: !isSelected});
  }

  render() {
    const {name,surname,age,isSelected} = this.state;
    const userSelectStyle = isSelected ? styles.selected : null;
    return (
      <article className={userSelectStyle} onClick = {this.select}>
        <p>{name}, {surname}</p>
        <p>{age}</p>
      </article>
    )
  }
}

