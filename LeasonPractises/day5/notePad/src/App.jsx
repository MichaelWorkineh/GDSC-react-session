import { useState } from 'react'
import Form from './component/Form'
import Display from './component/display'
import './App.css'

function App() {
  const [Notes, setNotes] = useState([]);
  const [showForm, setshowForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [note, setNote] = useState({mainTopic:"", subTopic:"", noteContent:""});
  function update(input){
    setNotes([...Notes,input]);
    //console.log(Notes);
  }
  
  return (
    <main className='app'>
      <div className='previouseNotes'> {Notes.map(Notes=>(<Display  edit = {edit} setEdit = {setEdit}  note = {Notes}/>))} </div>
      {
        showForm ? 
          <Form func = {update}/>
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
