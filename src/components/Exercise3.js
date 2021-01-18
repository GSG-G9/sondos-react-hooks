import React, {useState} from 'react'

export default function Exercise3() {

  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("")

  const handleChange = (event) => {
     setTask(event.target.value)
     
   }

  const handleAdd = () => {
    setTodo((prevTodo)=> {
     return [...prevTodo, task]
    })
  }

  const handleDelete = (key) => {
    setTodo(todo.filter((item,index)=>
      index!==key
    ))
  }

  return (
    <div>
      <input type="text" placeholder="enter a new task" onChange={handleChange}></input>
      <button onClick={handleAdd}>Add</button>
       {todo.map((item,index)=> 
       <div className="todo">
         <p>{item}</p>
         <button onClick={()=>handleDelete(index)}>delete</button>
       </div>
       )}
    </div>
  )
}
