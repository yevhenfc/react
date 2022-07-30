import React, { useState} from 'react'
import styles from './Test.module.scss'

export default function Test() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
//   const [inlineStyle, setInlineStyle] = useState(null);  

  const widthHandler  = (e) => {setWidth(e.target.value)}
  const heightHandler = (e) => {setHeight(e.target.value)}  
  const inlineStyle = ({  
            width:  `${width}px`,
            height: `${height}px`
          })

  //   const rerenderBox = () => {
//     setInlineStyle({  
//         width:  `${width}px`,
//         height: `${height}px`
//       })
//     }

//   useEffect(() => {
//     setInlineStyle({  
//         width:  `${width}px`,
//         height: `${height}px`
//       });
//   }, [inlineStyle]);

  return (
  <>
  <input type="text" value={width}  onChange={widthHandler} />
  <input type="text" value={height} onChange={heightHandler} />
  {/* <button onClick={rerenderBox}>rerender</button> */}
  <div className={styles.box} style = {inlineStyle}></div>
  </>  
  )
}
