import Greeter from './Greeter'
import './App.css'

function App() {
  const name = "Michael Workineh";
  return (
    <div>
      <h1>Greetings</h1>      
      <Greeter message = {name}/>
    </div>
    )
}

export default App
