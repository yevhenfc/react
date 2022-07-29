import React, { useEffect, useState } from 'react'

export default function ClockFun(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect (
    () => {if (isRunning) {
        const timerId = setInterval(() => {setTime(time + 1)}, 1000);
        return () => {clearInterval(timerId)};
      } 
    }
    ,[time, isRunning]
  )

  
  
  return (
  <>
    <h1>{time}</h1>
    <button onClick={() => setIsRunning(true)}>  start</button>
    <button onClick={() => setTime(0)}>          stop </button>
    <button onClick={() => setIsRunning(false)}> reset</button>
  </>  
  )
}
