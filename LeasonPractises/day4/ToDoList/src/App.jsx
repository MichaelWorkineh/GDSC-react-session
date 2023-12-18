import { useState } from 'react'
import './App.css'
import InputSystem from './InputSystem'
import ListDisplay from './ListDisplay'

function App() {
  const[ ToDoList,setToDoList] = useState([])
  
  function updateArray(value){
    if(value.plan !== ''||value.time !== '') {
      ToDoList = setToDoList([...ToDoList,value])
    }
    else{
      alert('write something!')
    }
  }

  return (
    <>
      <h1>To Do List</h1>
      <div className='content'>
        <table  width={500}>
          <thead>
            <th className='xl'>Time</th>
            <th className='yl'>Plan</th>
          </thead>

          {ToDoList.map(ToDoList=>(<ListDisplay value = {ToDoList} />))}
        </table>
        {console.log(ToDoList)}
        <InputSystem func = {updateArray}/>
      </div>
    </>
  )
}

export default App
