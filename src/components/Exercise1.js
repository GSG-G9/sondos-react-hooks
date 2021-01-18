
import React, {useState} from 'react'

export default function Exercise1() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Add</button>
       <p>{count}</p>
      <button onClick={()=>setCount(count-1)}>Sub</button>
      <div><button onClick={()=>setCount(0)}>Reset</button></div>
    </div>
  )
}
