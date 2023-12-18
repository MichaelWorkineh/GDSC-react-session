import './ListDisplay.css'
export default function ListDisplay(value){
    return(
        <tr>
            <td>{value.value.time}</td>
            <td>{value.value.plan}</td>
        </tr>
        )
}