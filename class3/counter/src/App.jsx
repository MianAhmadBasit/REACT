import { useState } from 'react'
import './App.css'

function App() {
const [counter , setCounter] = useState(15) 

const addValue=() => {
  console.log("clicked " , counter)
  // const counters = counter+1
  setCounter(counter+1)
}
const rmValue=() => {
  console.log("clicked " , counter)
  // const counters = counter+1
  setCounter(counter-1)
}


  return (
    <>
      <h1>Counter App with MAB</h1>
        <h2>COUNTER VALUE: {counter}</h2>
        <button onClick={addValue}>Add VALUE {counter}</button>
        <br />
        <button onClick={rmValue}>Remove Value {counter}</button>
          <footer>{counter}</footer>      
    </>
  )
}

export default App
