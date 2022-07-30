import React, {useEffect, useState} from 'react'
import CardContest from './CardContest';
const db = [...];

export default ManagedContest(props){

// www.squadhelp.com
  const [data, setData] = useState([]); 

  useEffect(() => {
    return setData(db);
  }, data
  );

  const mapCards = (c, i) =>{
    return <CardContest key={i} data={c}/>
  } 

  return (
    <ul> {data.map(mapCards)} </ul>
  )
}
