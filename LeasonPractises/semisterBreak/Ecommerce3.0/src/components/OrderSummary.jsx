import React from "react";
import './OrderSummary.css'
export default function OrderSummary({orders}){
    function totalCost(){
        let sum = 0;
        for(let n = 0; n<orders.length; n++){
            sum += (orders[n].price*orders[n].quantity);
        }
        console.log(sum);
        return sum;
    }
    return(
        <div className="orderSummary">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>{totalCost()}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Calculated at the next step</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{totalCost()}</td>
                </tr>
            </table>
            <a href="/confirm">Continue to checkout</a>
        </div>
    );
}