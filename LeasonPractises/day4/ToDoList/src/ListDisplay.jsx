import './ListDisplay.css'
export default function ListDisplay(value){
    return(
        <tr>
            <td width={100}>{value.value.time}</td>
            <td width={300}>{value.value.plan}</td>
        </tr>
        )
}