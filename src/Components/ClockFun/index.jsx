import React, { useEffect, useState } from 'react'

export default function ClockFun(props) {
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const reset = () => {
    setTime1(0);
    setTime2(0);
  }

  useEffect (
    () => {if (isRunning) {
        const timerId1 = setInterval(() => {setTime1(time1 + 1)}, 1000);
        const timerId2 = setInterval(() => {setTime2(time2 - 1)}, 1000);
        return () => {clearInterval(timerId1);clearInterval(timerId2)};
      } 
    }
    ,[time1, time2, isRunning]
  )

  
  
  return (
  <>
    <h1>{time1} {time2}</h1>
    <button onClick={() => setIsRunning(true)}>         start</button>
    <button onClick={() => {setTime1(0); setTime2(0)}}> stop </button>
    <button onClick={() => setIsRunning(false)}>        reset</button>
  </>  
  )
}
