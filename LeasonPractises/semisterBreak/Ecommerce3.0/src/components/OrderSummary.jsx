import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

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
            <div className="checkOutButtonRegin">
                <NavLink to = {"/confirm"} className= "checkoutButton" state={{data:"name"}}>
                    Continue to checkout
                </NavLink>
            </div>
        </div>
    );
}