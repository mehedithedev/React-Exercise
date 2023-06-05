import React, { useState } from 'react'

function ToDoList() {
const [ToDoList, setTodoList]= useState([])
const [task, setTask]= useState('')

  const addTask=()=>{
    const task = {
      id: ToDoList.length ===0 ? 1: ToDoList[ToDoList.length-1].id+1,
      taskName: task
    }
  }

  const deletetask = (taskName)=>{
      const newToList= ToDoList.filter((task)=>{
        if (task===taskName){
          return false;
        } else{
          return true
        }
      })
      setTodoList(newToList)
  }
  return (
    <div className='App'>
      <h1>Welcome to Mehedi's To-Do List App</h1>
      <div className='addTask'>
        <input
            onChange={(evt)=>setTask(evt.target.value)}
        />
        <button
          onClick={()=>{ 
            setTodoList([...ToDoList, task])
          }}
        >+</button>
      </div>
      <div className='list'>
        {ToDoList.map((list)=>{
          return(
            <div>
              <h1>{list.taskName}</h1>
              <button onClick={()=>deletetask(list)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ToDoList
