import { useParams} from 'react-router-dom'
import { NavLink } from "react-router-dom";
const UserProfile = () =>{
    let  { userId  } = useParams()
    return(
        <div className="out">
            <h1>UserProfile { userId }</h1>
            <NavLink to="/"  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                <strong className="nav"> Home</strong>
            </NavLink>
        </div>
    )
}

export default UserProfile;