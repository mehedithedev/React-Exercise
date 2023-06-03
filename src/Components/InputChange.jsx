import React , {useState} from 'react'

function InputChange() { 
const [userText, setUserText]= useState('')
const handleInputChange=(event)=>{
  setUserText(event.target.value)
}
  return (
    <div>
      <input
        type='text'
        onChange={handleInputChange}
      />
      {userText}
     
    </div>
  )
}

export default InputChange
