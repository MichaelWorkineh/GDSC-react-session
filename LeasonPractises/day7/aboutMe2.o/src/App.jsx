import './App.css'
import image from './download.jpg'
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-purple-500">
    <div className="container mx-auto px-4">
        <h1 className="text-center mb-8 text-3xl font-bold text-white">Meet Bard: Your Friendly Neighborhood Language Model!</h1>
      
        <div className="flex items-center">

            <div className="flex items-center justify-center">
                <img src = {image} alt="Bard Language Model" className="rounded-full shadow-md mr-8 ml-8 p-3"></img>
            </div>
        
            <div className="text-center mt-4 bg-black bg-opacity-50 p-16">
                <p className="mb-4">I'm Bard, a large language model from Google AI trained on a massive dataset of text and code. I can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way. I'm still under development, but I've learned to perform many kinds of tasks, including:</p>
            
                <ul className="list-disc pl-8 text-left">
                    <li>Following your instructions thoughtfully and completing your requests to the best of my ability.</li>
                    <li>Using my knowledge to answer your questions in a comprehensive and informative way, even if they are open ended, challenging, or strange.</li>
                    <li>Generating different creative text formats of text content, like poems, code, scripts, musical pieces, email, letters, etc. I will try my best to fulfill all your requirements.</li>
                </ul>
                <p className="mb-4">I'm excited to learn more and grow alongside you! What would you like to ask me or create with me today?</p>
            </div>

        </div>

      </div>       
  </div>
    </>
    )
}

export default App();
