import React from "react";
import './CartItem.css';
import image from '../assets/react.svg'
export default function CartItem({item, quantity, size}){
    
    return(
        <div className="item">
            <img src={image} alt={"an image of " + item.name}></img>
            <div className="itemDetails">
                <p className="toBeBold">{item.name}</p>
                <p className="size">{"Size: " + size}</p>
                <p className="Quantity">{"Quantity: " + quantity}</p>
                <p className="toBeBold">{"$" + (quantity*item.price)}</p>
            </div>
            <div className="theRest">
                <p className="makerName">{"by " + item.vendor}</p>
                <button className="remove">Remove</button>
            </div>
        </div>
    );
}