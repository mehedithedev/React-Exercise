import React, { useState } from 'react'

function Counter() {
    const [count, setCount]= useState(0)
  return (
    <div>

      <button
        onClick={()=>{
            setCount(count+1)
        }}
      >+</button>
      <button
        onClick={()=>{
            setCount(count-1)
        }}
      >-</button>
      <button
        onClick={()=>{
            setCount(0)
        }}
      >Set To zero</button>
      {count}
    </div>
  )
}

export default Counter
