import OrderList from "./OrderList";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./Cart.css";
import empty from "./images/Empty-pana.png"
import tree from "./images/bamboo-tree-rafiki.png"
import cart from "./images/Add-to-Cart-pana.png";

export default function Cart({cartList, set}){
    console.log(cartList)
    const x = cartList
    let i = 0;
    function totalCost(){
        let sum = 0;
        for(let n = 0; n<cartList.length; n++){
            sum += (cartList[n].price*cartList[n].quantity);
        }
        return sum;
    }
    return(
        <div>
            <Navigation/>
            {cartList.length > 0?
            <>
                <h1>My cart</h1>
                {cartList.map((cartList,index)=>(
                    <div><OrderList key={i++} item={cartList} /> <button onClick={
                    () => {
                        x.splice(index,1)
                        set(x)
                        console.log(index+" element's "+"deletion done!")
                        window.location.href("http://localhost:5173/Cart");
                        //console.log(cartList)
                    }
                }>
                    <NavLink to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        cancel
                    </NavLink>
                </button></div>))}
                <img src= {cart} width="300" className="trees"></img>
                <div className="Total">Total Expense ${totalCost()}</div>
                </>:<>
                <h1>Cart is empty</h1>
                <img src = {empty} width = '500'></img>
                </>
                }
        </div>
    )
}