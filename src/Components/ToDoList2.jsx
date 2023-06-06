import React, { useState } from 'react'

function ToDoList2() {
    const [newTask, setNewTask] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange=(evt)=>{
        setNewTask(evt.target.value)
    }

    const handleClick=()=>{
        let newToDoList= [...todoList, newTask]
        setTodoList(newToDoList)


        
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
            {todoList.map((item)=>{
                return(
                    <diV>
                        <h2>{item}</h2>
                        <button
                        >X</button>
                    </diV>
                )
            })}
        </div>
    </div>
  )
}

export default ToDoList2