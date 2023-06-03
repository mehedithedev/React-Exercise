import React, { useState } from 'react'

function ToDoList() {
const [ToDoList, setTodoList]= useState([])
const [task, setTask]= useState('')
  return (
    <div className='App'>
      <h1>Welcome to Mehedi's To-Do List App</h1>
      <div className='addTask'>
        <input
            onChange={(evt)=>setTask(evt.target.value)}
        />
        <button

        >+</button>
      </div>
      <div className='list'></div>
    </div>
  )
}

export default ToDoList
