import { useState } from 'react'
/*
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
 */
import items from "./items.json"
import Search from './components/Search.jsx'
import './App.css'
import Cart from './Cart.jsx'
import CartItem from './components/CartItem.jsx'
import DetailsPage from './DetailsPage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <DetailsPage item={items[0]}/>
    </>
  )
}

export default App
