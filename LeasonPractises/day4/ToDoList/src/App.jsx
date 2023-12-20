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
        <table>
          <thead>
            <th className='xl'> <td width={100}> Time </td></th>
            <th className='yl'> <td width={300}> Plan </td></th>
          </thead>

          {ToDoList.map(ToDoList=>(<ListDisplay value = {ToDoList} />))}
          <tfoot>
            <tf className="q"></tf>
            <tf className ="w"></tf>
          </tfoot>
        </table>
        {console.log(ToDoList)}
        <InputSystem func = {updateArray}/>
      </div>
    </>
  )
}

export default App
