import React from 'react'
import "./TodoList.css"

function Task({ task, deleteTask, completedTask }) {
  const handleDelete = () => {
    deleteTask(task.id)
  }

  return (
    <div
      className = "task"
      style={{textDecoration: task.completed ? 'line-through' : 'none'}}
    >
      <h2>{task.taskName}</h2>
      <button onClick={handleDelete}
      className='delete'
      >X</button>
      <button
      className='complete'
      onClick={()=> completedTask(task.id)}
      >Complete</button>
    </div>
  )
}

export default Task