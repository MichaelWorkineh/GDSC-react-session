import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useState } from "react";
import './DetailsPage.css'
import image from "./assets/react.svg"
export default function DetailsPage({item, set}){
    const [quantity, setQuantity] = useState(1);
    function meatFoot(event){
        setQuantity(event.target.value);
    }
    function push(){
        const obj = {
            name: item.name,
            category: item.category,
            gender: item.gender,
            color: item.color,
            size: item.size,
            price: item.price,
            image_url: item.image_url,
            description: item.description,
            roughting: item.roughting,
            vendor: item.vendor,
            quantity: quantity
        };
        set(obj);
        alert(obj.name+" added to ur cart");
    }
    
    return(
        <div className="page">
            <header>
                <h2>{item.name+" details"}</h2>
                <NavLink to = {"/Cart"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                    Cart
                </NavLink>
            </header>
            <main className="itemInfo">
                <img className="itemImg" src = {image} alt={"an image of "+item.name}></img>
                <div className="itemdetails">
                    <h3>{item.name}</h3>
                    <div className="price">{item.price}</div>
                    <p className="description">
                        {item.description}
                    </p>
                    <h4>Size</h4>
                    <div className="sizes">
                        {item.size.map(size => (<div className="sizeBox">{size}</div>))}
                    </div>
                    <br></br>
                    <div className="orderSection">

                        <button className="orderButton" onClick={push}>{"Add to Cart - $"+(quantity*item.price)}</button>
                        <div className="quantitySetter">
                            <h5>Quantity</h5>
                            <input type="number" min="1" placeholder="1" onChange={meatFoot}></input>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </main>
        </div>
    );
}