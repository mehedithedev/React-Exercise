import React , {useState} from 'react'

function ShowHide() { 
  const [showText, setShowText]= useState(true)

  
  return (
    <div>
      <button
        onClick={()=>
          setShowText(!showText)
        }
      >
        Show/Hide
      </button>
     {showText === true && <h1>Hello</h1>}
     
    </div>
  )
}

export default ShowHide
