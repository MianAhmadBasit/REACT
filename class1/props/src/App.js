
import React,{useState} from 'react'
import Data from './comp/data'

function App() {

const [no , setNo] = useState(2)
function click() {
  setNo(no+2/4*55%88)

}

  return (
    <div>App 
       <button onClick={click}>Ahmad{no}</button>
      <h1>{no}</h1>
     <Data name="hassan" age ={33} srno={0} />
     <Data name="ali" age ={233} />
     <Data name="raza" age ={303} />
     <Data name="hassan muhammad" age ={2233} />
     <Data name="rosume" age ={303} />


    </div>
  )
}

export default App