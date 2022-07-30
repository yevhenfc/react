import React, { useEffect, useState } from 'react'
import {format, getHours, getSeconds, roundToNearestMinutes, subMilliseconds} from 'date-fns';
import styles from './ClockMatrix.module.scss';

export default function ClockMatrix(props) {
  
  const [time, setTime] = useState(new Date(0,0,0,0,0,10));
  const [isRun, setIsRun] = useState(false);
  const handleRun = () => {setIsRun(!isRun)};
  const handleReset = () => {setTime(new Date(0,0,0,0,0,10))};

  useEffect(() => {
        if(isRun && getHours(time) == 0) {
            const id = setInterval( () => {
                setTime(subMilliseconds(time, 1000));
            }, 1000);
            return () => {
                clearInterval(id)
            }
        }
  })

  return (
    <div className={styles.container}>
        <h1 className={styles.time}>{format(time, 'HH:mm:ss')}</h1>
        <button className={styles.btn} onClick={handleRun}>{isRun ? 'Stop' : 'Start'}</button>
        <button className={styles.btn} onClick={handleReset}>Reset</button>
    </div>
  )
}
