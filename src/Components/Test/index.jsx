import React, { useEffect, useState } from 'react'

export default function Test() {
  const[w, setW] = useState(window.innerWidth);
  const[h, setH] = useState(window.innerHeight);
  const [inlineStyle, setInlineStyle] = useState(null);

  useEffect( () => {
    window.addEventListener('resize',() =>{
        setW(window.innerWidth);
        setH(window.innerHeight);
    })
  }
  )

return (
    <>
        <p>width {w}</p>
        <p>height {h}</p>
    </>
  )
}
