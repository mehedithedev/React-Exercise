import React , {useState} from 'react'

function Increament() {

  const [age, setAge] = useState(0)

  const increaseAge= ()=>{
    setAge(age+1)
  }

  return (
    <div>
      <h1>Increase Age</h1>
      {age}
      <button
       onClick={increaseAge}
      >
        Increase Age
      </button>
    </div>
  )
}

export default Increament
