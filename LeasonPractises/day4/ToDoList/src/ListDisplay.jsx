export default function ListDisplay(value, inputFun){
    function handleClick(){
        inputFun.func(value)
        alert (' is done')
    }
    return(
        <tr>
            <td>{value.value.time}</td>
            <td>{value.value.plan}</td>
            <td><input type="checkbox" onClick={handleClick}></input></td>
        </tr>
        )
}