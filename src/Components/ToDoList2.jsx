import React, { useState } from 'react'

function ToDoList2() {
    const [newTask, setNewTask] = useState('')
    const [todoList, setTodoList] = useState([])

  

    const handleChange=(evt)=>{
        setNewTask(evt.target.value)
    }

    const handleClick=()=>{
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
            taskName: newTask
        }

        
    }
  const deleteTask = (itemName) => {
  const filteredToDo = todoList.filter((item) => item !== itemName)
  setTodoList(filteredToDo)
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
                            onClick={()=>deleteTask(item)}
                        >X</button>
                    </diV>
                )
            })}
        </div>
    </div>
  )
}

export default ToDoList2