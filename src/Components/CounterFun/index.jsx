import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function CounterFun(props) {
  const [value, setValue] = useState(0);

  return (
    <>
    <h2>Counter {value}</h2>
    <button onClick={() => setValue(value + props.step)}> + </button>
    <button onClick={() => setValue(value - props.step)}> - </button>
    </>
    )

}

CounterFun.propTypes = {
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,    
}

CounterFun.defaultProps = {
  step: 1,
}