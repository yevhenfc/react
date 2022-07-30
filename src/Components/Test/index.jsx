import React, { useEffect, useState } from 'react'

export default function Test() {
  const[w, setW] = useState(window.innerWidth);
  const[h, setH] = useState(window.innerHeight);
 
  useEffect( () => {
        setW(window.innerWidth);
        setH(window.innerHeight);
  })

return (
    <>
        <p>width {w}</p>
        <p>height {h}</p>
    </>
  )
}
