import './App.css'
import { useState } from 'react'
import Button from './Button.jsx'
function App() {
  const [randomNum, setRandomNum] = useState(0)
  function Generator(){
    setRandomNum(Math.floor(Math.random()*100))
  }
  return (
    <div className='bigCard'>
      <h1>Random number Generator</h1>
      <div className='card'>  
        <p>current value </p>
        <strong>{randomNum}</strong>
        <br></br>
        <Button Generator={Generator}/>
      </div>
    </div>
  )
}

export default App
