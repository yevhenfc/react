import { fromUnixTime } from 'date-fns/esm';
import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignInForm.module.css';

const PASSWORD_REGEXP = /^\S(8,12).$/;
       userEmail: '',
       userPassword: '',
       isPasswordValid: false,

    }
  }

  
  setHeight = (e) => {this.setState({height: e.target.value})};
  setWidth  = (e) => {this.setState({width: e.target.value})};
    
  setPassword = (e) => {
    this.state(
      {userPassword: e.target.value,
      isPasswordValid: PASSWORD_REGEXP.test(e.target.value)})
  }
  
  handleSubmit = (e) => {e.preventDefault()};


  render() {
    const{height, width, userEmail, userPassword, isPasswordValid} = this.state;
    const passwordClasses = classNames(styles.input, {
      [styles.PasswordValid]:     isPasswordValid,
      [styles.passwordInvalid]:  !isPasswordValid,
    })
  
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={height}    onChange={this.setHeight}    placeholder='height'   ></input>
        <input type="text" value={width} onChange={this.setWidth} placeholder='width'></input>
        <input type="email" value={userEmail} onChange={this.setEmail} placeholder='email'></input>
        <input className={passwordClasses} type="password" value={userPassword} onChange={this.setPassword} placeholder='password'></input>
        
        <button type="submit">Ok</button>
        <div style={`border: '1px solid black', height: ${height}px, width=${width}px`}>

        </div>
      </form>
    )
  }
}
