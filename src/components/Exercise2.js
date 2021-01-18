import React,{useState} from 'react'

export default function Exercise2() {
  const [color, setColor] = useState('')
  const colorsArray = ['red', 'green', 'yellow', 'purple','gray','orange'];
  return (
    <div className="container" style={{backgroundColor:color}}>
      <h1>Select a color for the background</h1>
      {colorsArray.map(item=> 
        <button onClick={()=>setColor(item)}>{item}</button>
      )}
    </div>
  )
}
