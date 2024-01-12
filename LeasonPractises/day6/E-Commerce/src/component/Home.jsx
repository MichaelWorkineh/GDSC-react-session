import ItemCard from "./ItemCard";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import './Home.css'
import ecommerce from "./images/EcommerceWebPage-pana.png"

export default function Home({items}, index){
    const navigate = useNavigate();
    const handleHomeClick = () => {navigate("/");}
    
    return(
        <>
            <header>
                    <Navigation/>
                    <h1>E-Commerce</h1>
            </header>
            <div className="home">
                <div className="welcomeBox">
                    <p className="welcome">
                       <big> <b>Ignite your inner shopper! ⚡️</b></big><br></br> Welcome to my ecommerce website, your one-stop shop for tables, shoes, watchs and coats brimming with style, quality, and value. Explore curated collections, discover hidden gems, and get ready to indulge in a shopping experience that sparks joy. Dive in, browse at your leisure, and find that perfect piece to elevate your life. Shop with confidence – we're here to make your journey smooth and satisfying. Let's get started
                    </p>
                    <img src= {ecommerce}  alt="ecommerce image from stroyset.com by Pana" width="400"/>
                </div>
                <nav className="itemList">
                    <NavLink to = "/IndividualProduct/1" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                                <ItemCard key = {0} item = {items[0]} />
                    </NavLink>
                    <NavLink to = "/IndividualProduct/2" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                                <ItemCard key = {1} item = {items[1]} />
                    </NavLink>
                    <NavLink to = "/IndividualProduct/3" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                                <ItemCard key = {2} item = {items[2]} />
                    </NavLink>
                    <NavLink to = "/IndividualProduct/4" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                                <ItemCard key = {3} item = {items[3]} />
                    </NavLink>
                </nav>
            </div>
        </>
    )
}