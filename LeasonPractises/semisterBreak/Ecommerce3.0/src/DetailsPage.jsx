import React from "react";
import { useState } from "react";
import './DetailsPage.css'
import image from "./assets/react.svg"
export default function DetailsPage({item}){
    const [quantity, setQuantity] = useState();
    return(
        <>
            <header>
                <h2>{item.name+" details"}</h2>
                <button>Cart</button>
            </header>
            <main>
                <img src = {image} alt={"an image of "+item.name}></img>
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
                        <a href="" className="orderBox">{"Add to Cart - $"+(quantity*item.price)}</a>
                        <div className="quantitySetter">
                            <h5>Quantity</h5>
                            <input type="number"></input>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </main>
            <footer>footer</footer>
        </>
    );
}