import React from 'react';
import styles from './hello.module.css';
export default function Hello(props) {
  const {usName, usSurname} = props;
  return (
    <>
      <p className={styles.wrapper_hello_react}>Hello, {usName} {usSurname}</p>
    </>
  )
}