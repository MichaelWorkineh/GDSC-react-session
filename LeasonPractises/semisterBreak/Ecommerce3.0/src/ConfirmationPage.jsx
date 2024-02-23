import React from "react";
import './ConfirmationPage.css'
export default function ConfirmationPage(cart){
    const Cart = cart;
    function clear(){
        localStorage.setItem('order', JSON.stringify([]));
        window.location.href = '/';
    }
    return(
        <>
            <header><h1>Confirmation</h1></header>
            <main>
                <p>Bought Items</p>
                <div className="boughtItem">
                    {
                        Cart.map((cart, index) => (<p key={index}>{cart.name}</p>))
                    }
                </div>
                <p>you have successfuly purchased these items</p>
                <button onClick={clear}> return to home</button>
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}