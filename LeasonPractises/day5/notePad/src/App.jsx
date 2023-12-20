import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'

function App() {
  const [Notes, setNotes] = useState({});
  const [showForm, setshowForm] = useState(false)
  return (
    <main className='app'>
      { showForm && <Form/>}
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
