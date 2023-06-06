import React, { useState } from 'react'
import Task from './Task'

function ToDoList2() {
  const [newTask, setNewTask] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (evt) => {
    setNewTask(evt.target.value)
  }

  const handleClick = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task])
    setNewTask('')
  }

  const deleteTask = (id) => {
    const filteredToDo = todoList.filter((task) => task.id !== id)
    setTodoList(filteredToDo)
  }

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if (task.id=== id){
          return { ...task, completed: true}
        } else{
          return task
        }
      })
    )
  }

  return (
    <div>
      <input onChange={handleChange} value={newTask} />
      <button onClick={handleClick}>Add task</button>
      <div className='listItems'>
       {todoList.map((task) => {
  return (
    <Task key={task.id} task={task} deleteTask={deleteTask} />
  )
})}
      </div>
    </div>
  )
}

export default ToDoList2