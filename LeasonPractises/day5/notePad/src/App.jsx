import { useState } from 'react'
import Form from './component/Form'
import Display from './component/display'
import './App.css'

function App() {
  const [Notes, setNotes] = useState([]);
  const [showForm, setshowForm] = useState(false)
  
  function update(input){
    setNotes([...Notes,input]);
  }
  
  return (
    <main className='app'>
      <div className='previouseNotes'> {Notes.map(Notes=>(<Display note = {Notes}/>))} </div>
      {
        showForm ? 
          <div className='form'>
            <Form func = {update}/>
          </div>
          : 
          <>
            <div className='openingCard'>
              <h2 className='greetings'>Hi, there!</h2>
              <h2 className='instructions'>press <strong>show</strong> to start taking notes!</h2>
            </div>
          </>
      }
      <button onClick={() =>{
        setshowForm(prev => {
          return !prev;
        })
      }}
      className='showBtn'
      >
        {showForm?"hide":"show"}
      </button>
    </main>
  )
}

export default App
