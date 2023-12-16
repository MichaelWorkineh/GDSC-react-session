import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputSystem from './InputSystem'
import ListDisplay from './ListDisplay'
function App() {
  const[ ToDoList,setToDoList] = useState([])
  
  function updateArray(value){ 
    ToDoList = setToDoList([...ToDoList,value])
  }
  function deleteList(value){
    ToDoList.slice(ToDoList.indexOf(value),1)
    
  }
  return (
    <>
      <h1>To Do List</h1>
      <table>
        <thead>
          <th>Time</th>
          <th>Plan</th>
        </thead>
        {ToDoList.map(ToDoList=>(<ListDisplay value = {ToDoList} func = {deleteList}/>))}
      </table>
      {console.log(ToDoList)}
      <InputSystem func = {updateArray}/>
    </>
  )
}

export default App
