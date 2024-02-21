import React from "react";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import './Cart.css'
import items from "./items.json"
export default function Cart({order}){
    //<CartItem item={items[0]} quantity={1} size={"M"}/>
    return(
        <>
            <header>
                <h1>Cart</h1>
            </header>
            <main>
                <div className="text">
                    <h3>Your cart</h3>
                    <p>Not ready to checkout? <a href="" >Continue Shopping</a></p>
                </div>
                <div className="box">
                    <div>
                        <CartItem item={items[0]} quantity={1} size={"M"}/>
                        <CartItem item={items[0]} quantity={1} size={"M"}/>
                    </div>
                    <OrderSummary/>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}