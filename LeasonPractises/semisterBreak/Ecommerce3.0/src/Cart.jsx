import React from "react";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import './Cart.css'
import items from "./items.json"
export default function Cart({order}){
    const Cart = JSON.parse(localStorage.getItem('order'));
    return(
        <>
            <header>
                <h1>Cart</h1>
            </header>
            <main>
                <div className="text">
                    <h3>Your cart</h3>
                    <p>Not ready to checkout? <a href="/" >Continue Shopping</a></p>
                </div>
                <div className="box">
                    <div className="orderCards">
                    {
                        Cart.map((cart, index) => (<CartItem item={cart} quantity={cart.quantity} size={"M"} key={index}/>))
                    }
                        
                    </div>
                    <OrderSummary orders={Cart}/>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}