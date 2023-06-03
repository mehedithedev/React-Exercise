import React, { useState } from 'react'

function ColorChange() {
    const [textColor, setTextColor]= useState('Black')
  return (
    <div>
        <h1
            style={{color: textColor}}
        >Here goes some text</h1>
        <button
            onClick={()=> setTextColor(textColor==='black' ? "red": "black")}
        >
            Change Text Color
        </button>
    </div>
  )
}

export default ColorChange
