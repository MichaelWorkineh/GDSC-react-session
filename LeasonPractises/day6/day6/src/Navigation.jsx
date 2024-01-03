import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation () { 
    const navigate = useNavigate();
    const handleHomeClick = () => {navigate("/");}
    return(
      <nav>
        <NavLink to="/"  onClick={handleHomeClick} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
          <strong className="nav">Home</strong>
        </NavLink>
        <NavLink to="/About"  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
          <strong className="nav"> About</strong>
        </NavLink>
        <NavLink to="/Contact"  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
          <strong className="nav"> Contact</strong>
        </NavLink>
      </nav>
    )
  }
  