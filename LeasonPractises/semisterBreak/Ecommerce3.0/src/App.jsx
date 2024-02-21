import { useState } from 'react'
/*
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
 */
import items from "./items.json"
import Search from './components/Search.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search placeholder="search" data={items}/>
    </>
  )
}

export default App
