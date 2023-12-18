import './inputSystem.css'
import { useState } from "react"
export default function InputSystem( updateArray){
    const[time,setTime] = useState("")
    const[plan,setPlan] = useState("")
    function addToList(e){
        e.preventDefault()
        const input ={plan: plan, time: time}
        console.log(input)
        updateArray.func (input);
        input = {plan:'', time:''}
    }
    
    return(
        <>
            <form onSubmit={addToList}>
                
                <textarea  value={plan} onChange={(e)=>{setPlan(e.target.value)}} rows = '10' cols = '40' className='plan'></textarea>
                <div>
                    <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}} className='time'></input>
                    <input type="submit" id='submit' className='submit'/>
                </div>
            </form>
        </>
    )
}