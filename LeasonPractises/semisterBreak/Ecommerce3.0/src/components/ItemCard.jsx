import React from "react";
import image from '../assets/react.svg';
import './ItemCard.css'
export default function ItemCard({item}){
    return(
        <div className="itemCard">
            <img src={image}></img>
            <div className="info">
                <h3>{item.name}</h3>
                <h4>{"$" + item.price}</h4>
            </div>
        </div>
    );
}