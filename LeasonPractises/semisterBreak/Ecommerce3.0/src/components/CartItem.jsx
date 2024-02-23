import React from "react";
import './CartItem.css';
import image from '../assets/react.svg'
export default function CartItem({item, quantity, size}){
    console.log(item.name);
    return(
        <div className="cartItems">
            <img className="itemProfile"  src={image} alt={"an image of " + item.name}></img>
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