import React, { Component } from 'react';
import styles from './UserCard.module.css';



export default class UserCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
      } 
 
    render() {
    // const user = this.props.user;
    const {fullName, email, tel, imgSrc} = this.props.user;
    return (
        <div className={styles.card_container}> 
          <img src={imgSrc}></img>
          
          <h2>{fullName}</h2>
          <h4>{email}</h4>
          <p>{tel}</p>       
        </div>
    )
  }
}
