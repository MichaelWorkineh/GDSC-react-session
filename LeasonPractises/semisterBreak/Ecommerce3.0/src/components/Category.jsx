import React from "react";
import image from "../assets/react.svg"
import './Category.css'

export default function Category({name}){
    return(
        <div className="catagory">
            <img src={name.image}></img>
            <h3>{name.catagory}</h3>
        </div>
    );
}