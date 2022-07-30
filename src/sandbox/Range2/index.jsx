import React from 'react'

export default function Range2(props) {

  const mult2 = () => {props.setValue(props.value * 2)}

  return (
    <div>
        <button onClick={mult2}>mult</button>
        <p>value {props.value}</p>
    </div>
  )
}
