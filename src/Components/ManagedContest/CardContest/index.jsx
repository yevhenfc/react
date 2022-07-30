import React from 'react'

export default function CardContest() {
  const [head, setHead] = useState("");
  const [body, setBody] = useState("");
  const [icon, setIcon] = useState("");
  
  return (
    <div>
      <h2>{head}</h2>
      <p>{body}</p>
    </div>
  )
}
