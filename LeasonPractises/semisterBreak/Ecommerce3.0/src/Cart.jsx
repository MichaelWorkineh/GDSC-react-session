import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import './Cart.css'
export default function Cart({order}){
    return(
        <>
            <header>
                <h1>Cart</h1>
            </header>
            <main>
                <div className="text">
                    <h3>Your cart</h3>
                    <p>Not ready to checkout? 
                        <NavLink to = {"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                            Continue Shopping
                        </NavLink>
                    </p>
                </div>
                <div className="box">
                    <div className="orderCards">
                    {
                        order.map((cart, index) => (<CartItem item={cart} quantity={cart.quantity} size={"M"} key={index}/>))
                    }
                        
                    </div>
                    <OrderSummary orders={order}/>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}