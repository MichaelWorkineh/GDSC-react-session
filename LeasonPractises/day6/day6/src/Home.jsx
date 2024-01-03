import Navigation from "./Navigation"
import { NavLink, useNavigate } from "react-router-dom";
const Home = () =>{
   return(
    <div className="out">
            <h1>Home</h1>

            <NavLink to="/UserProfile/123"  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                <strong className="nav"> User</strong>
            </NavLink>
            <Navigation/>
        </div>) 
}

export default Home