import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Search from "./components/Search";
import ItemCard from "./components/ItemCard";
import data from "./items.json"
import './ShoptsCategories.css'
export default function({category, categories}){
    /*
        const catagories = [
    {
        catagory: "Tops",
        image:tops,
        roughting:"/Tops"
    },
    {
        catagory: "Bottoms",
        image:bottoms,
        roughting:"/Bottoms"
    },
    {
        catagory: "Outerwear",
        image:outerwear,
        roughting:"/Outerwear"
    },
    {
        catagory: "Shoes",
        image:shoes,
        roughting:"/Shoes"
    },
    {
        catagory: "Dresses",
        image:dressess,
        roughting:"/Dresses"
    },
    {
        catagory: "Skirts",
        image:skirts,
        roughting:"/Skirts"
    }
]
    */
    return(
        <>
            <header>
                <h1>{category}</h1>
                <NavLink to = {"/Cart"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                    Cart
                </NavLink>
            </header>
            <main>
                <div className="it">
                    <div className="side1">
                        <h3>Shop</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <Search placeholder={"search"} data={data}/>
                </div>
                <br></br>
                <div className="itemList">
                    {categories.map(cata => (<NavLink to = {cata.roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}><ItemCard item={cata} /></NavLink>))}
                </div>
                <hr></hr>
            </main>
        </>
    )
}