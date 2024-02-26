import { useState } from 'react'
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import items from "./items.json"
import './App.css'
import Cart from './Cart.jsx'
import DetailsPage from './DetailsPage.jsx'
import HomePage from './HomePage.jsx'
import ShopCategories from './ShopCategories.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [order, setOrder] = useState([]);

  function set(value){
    if(order.length != 0) console.log("not empty");
    else console.log("emptied");
    setOrder(order);
    let temp = [...order, value];
    setOrder(temp);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<HomePage/>} />

        <Route path="/confirm" element = {<ConfirmationPage cart = {order}/>} />
        
        <Route path="/Shoes" element = {<ShopCategories category={"Shoes"} categories={items.filter((value)=>{return value.category.includes("Shoes");})}/>} />
        <Route path="/Shoes/RunningShoes" element = {<DetailsPage item={items[3]} set={set} order={order}/>} />
        <Route path="/Shoes/AnkleBoots" element = {<DetailsPage item={items[8]} set={set} order={order}/>} />
        <Route path="/Shoes/EspadrilleFlats" element = {<DetailsPage item={items[13]} set={set} order={order}/>} />

        <Route path="/Tops" element = {<ShopCategories category={"Tops"} categories={items.filter((value)=>{return value.category.includes("Tops");})}/>} />
        <Route path="/Tops/CottonT-Shirt" element = {<DetailsPage item={items[0]} set={set} order={order}/>} />
        <Route path="/Tops/PoloShirt" element = {<DetailsPage item={items[5]} set={set} order={order}/>} />
        <Route path="/Tops/Button-UpShirt" element = {<DetailsPage item={items[10]} set={set} order={order}/>} />

        <Route path="/Outerwear" element = {<ShopCategories category={"Outerwear"} categories={items.filter((value)=>{return value.category.includes("Outerwear");})}/>} />
        <Route path="/Outerwear/HoodedSweatshirt" element = {<DetailsPage item={items[2]} set={set} order={order}/>} />
        <Route path="/Outerwear/LeatherJacket" element = {<DetailsPage item={items[7]} set={set} order={order}/>} />
        <Route path="/Outerwear/QuiltedVest" element = {<DetailsPage item={items[12]} set={set} order={order}/>} />

        <Route path="/Bottoms" element = {<ShopCategories category={"Bottoms"} categories={items.filter((value)=>{return value.category.includes("Bottoms");})}/>} />
        <Route path="/Bottoms/DenimJeans" element = {<DetailsPage item={items[1]} set={set} order={order}/>} />  
        <Route path="/Bottoms/CargoPants" element = {<DetailsPage item={items[6]} set={set} order={order}/>} />
        <Route path="/Bottoms/ChinoPants" element = {<DetailsPage item={items[11]} set={set} order={order}/>} />

        <Route path="/Dresses" element = {<ShopCategories category={"Dresses"} categories={items.filter((value)=>{return value.category.includes("Dresses");})}/>} />
        <Route path="/Dresses/SummerDress" element = {<DetailsPage item={items[4]} set={set} order={order}/>} />

        <Route path="/Skirts" element = {<ShopCategories category={"Skirts"} categories={items.filter((value)=>{return value.category.includes("Skirts");})}/>} />
        <Route path="/Skirts/MaxiSkirt" element = {<DetailsPage item={items[9]} set={set} order={order}/>} /> 

        <Route path="/Cart" element = {<Cart order = {order}/>}/> 
      </Route>
    )
  )

  return (
    <>
      <div className='router'>
        <RouterProvider router={router}/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </>
  )
}

export default App
