import React from "react";
import './ConfirmationPage.css'
export default function ConfirmationPage({cart}){
    function clear(){
        window.location.href = '/';
    }
    return(
        <>
            <header><h1>Confirmation</h1></header>
            <main>
                <p>Bought Items</p>
                <div className="boughtItem">
                    {
                        cart.map((acart, index) => (<p key={index}>{acart.name}</p>))
                    }
                </div>
                <p>you have successfuly purchased these items</p>
                <button onClick={clear}> return to home</button>
            </main>
        </>
    )
}