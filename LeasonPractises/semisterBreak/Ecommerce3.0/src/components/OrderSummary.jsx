import React from "react";
import './OrderSummary.css'
export default function OrderSummary({orders}){
    let totalCost = 0;
/*
    for(let i = 0; i<orders.size(); i++){
        totalCost += orders[i].quantity * orders[i].price;
    }
*/
    return(
        <div className="orderSummary">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>{totalCost}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Calculated at the next step</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{totalCost}</td>
                </tr>
            </table>
            <button className="check">Continue to checkout</button>
        </div>
    );
}