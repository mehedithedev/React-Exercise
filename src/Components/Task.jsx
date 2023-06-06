import React from 'react'

function Task({ task, deleteTask }) {
  const handleDelete = () => {
    deleteTask(task.id)
  }

  return (
    <div>
      <h2>{task.taskName}</h2>
      <button onClick={handleDelete}>X</button>
      <button
        
      >Complete</button>
    </div>
  )
}

export default Task