import Button from './Button'
import {useState} from 'react'

export default function Counter (){
    const [count, setCount] = useState(0);

    function adder(){
        setCount(count+1);    
    }
    return(
        <>
            <h1>{count}</h1>
            <Button adder={adder}/>
        </>
    )
}