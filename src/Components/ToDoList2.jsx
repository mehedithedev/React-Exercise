import React, { useState } from 'react'

function ToDoList2() {
    const [newTask, setNewTask] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange=(evt)=>{
        setNewTask(evt.target.value)
    }

    const handleClick=()=>{

    }
  return (
    <div>
        <input
            onChange={handleChange}
        />
        <button
            onClick={handleClick}
        >Add task</button>
        <div className='listItems'>
            {newTask}
        </div>
    </div>
  )
}

export default ToDoList2