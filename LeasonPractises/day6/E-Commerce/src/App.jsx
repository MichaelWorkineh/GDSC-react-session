import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Home from './component/Home'
import Cart from "./component/Cart";
import IndividualProduct from './component/IndividualProduct';
import Navigation from "./component/Navigation";
import PageNotFound from "./component/PageNotFound";

import coat from "./component/images/coat.jpg";
import shoe from "./component/images/shoe.jpg";
import table from "./component/images/table.jpg";
import watch from "./component/images/watch.jpg";

function App() {  
  //data
  const items = [
    {image: {locaton: coat, alt:"coat"}, price: "11.50", name: "coat", index:0},
    {image: {locaton:shoe, alt:"shoe"}, price: "121.50", name: "shoe", index:1},
    {image: {locaton:table, alt:"table"}, price: "21.50", name: "table", index:2},
    {image: {locaton:watch, alt:"watch"}, price: "12.50", name: "watch", index:3}
  ]
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);

  function set(value){
    setCart([...cart,value])
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<Home items={items} index={setIndex}/>} />
        <Route path="/IndividualProduct/1" element = {<IndividualProduct item={items[0]} set = {set} cart={cart}/>} />
        <Route path="/IndividualProduct/2" element = {<IndividualProduct item={items[1]} set = {set} cart={cart}/>} />
        <Route path="/IndividualProduct/3" element = {<IndividualProduct item={items[2]} set = {set} cart={cart}/>} />
        <Route path="/IndividualProduct/4" element = {<IndividualProduct item={items[3]} set = {set} cart={cart}/>} />
        <Route path="/Cart" element = {<Cart cartList = {cart} set = {setCart}/>} />
        <Route path="/*" element = {<PageNotFound/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App

/*
    * <Home items={items}/>
    * <IndividualProduct item={items[3]}/>
 */