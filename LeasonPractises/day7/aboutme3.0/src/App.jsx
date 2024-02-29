import image from './download.jpg'
import './index.css'
import Me from './me.jpg'
import Text from './Text'
import img from './download.jpg'
function App() {

  return (
    <>
      <Text image={Me} title={"introduction"} stuff={"Hi, I'm Michael, a studentin Addis Ababa. I'm passionate about solving problems, and I love drawing."} className = "padding: 1rem"/>
      <Text image={img} title={"Contact Me"} stuff={"Feel free to reach out to me via email (micwor96@gmail.com) at telegram (@micwor)."}/>
      <Text image = {Me} title={"About Me"} stuff = {"I graduated from AASTU currnetly studying software Engineering. I thrive on challenges and constantly seek new ones to grow both personally and professionally."}/>
    </>
  )
}

export default App
