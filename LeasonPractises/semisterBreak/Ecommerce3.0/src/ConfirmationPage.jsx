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
                <div className = "confirmMainBox">
                    <p>Bought Items</p>
                    <div className="boughtItem">
                       {
                            cart.length !=0 &&cart.map((acart, index) => (<p key={index}>{acart.name}</p>))
                        }
                        {
                            cart.length == 0 && (<p>Empty cart</p>)
                        }
                    </div>
                    <div className="return2home">
                         <p>you have successfuly purchased these items </p>
                        <button onClick={clear}> return to home</button>
                    </div>
                </div>
            </main>
        </>
    )
}