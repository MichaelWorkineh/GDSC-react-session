import React from "react";
import Category from "./components/Category";

import { NavLink, useNavigate } from "react-router-dom";

import tops from './assets/Gemini_Generated_Image.jpg'
import bottoms from './assets/Gemini_Generated_Image (1).jpg'
import outerwear from './assets/Gemini_Generated_Image (2).jpg'
import shoes from './assets/Gemini_Generated_Image (3).jpg'
import dressess from './assets/Gemini_Generated_Image (4).jpg'
import skirts from './assets/Gemini_Generated_Image (5).jpg'
import ItemCard from "./components/ItemCard"

import data from './items.json'

import './HomePage.css'

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


export default function HomePage(){
    return(
        <>
            <header>
                <h1>Ecommerce</h1>
                <button>Cart</button>
            </header>
            <main className="main">
                <h2>Categories</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>
                    button
                </button>
                <div className="catagories">
                    {catagories.map(catagory => (<NavLink to = {catagory.roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}><Category name={catagory}/></NavLink>))}
                </div>

                <h2>Our latest arrivals</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button>
                    button
                </button>
                <br></br>
                <div className="item">
                    <NavLink to = {data[0].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[0]}/>
                    </NavLink>

                    <NavLink to = {data[1].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[1]}/>
                    </NavLink>

                    <NavLink to = {data[2].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[2]}/>
                    </NavLink>
                </div>
                <h2>Our Products</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button>
                    button
                </button>
                <br></br>
                <div className="item">
                    <NavLink to = {data[6].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[6]}/>
                    </NavLink>
                    <NavLink to = {data[7].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[7]}/>
                    </NavLink>
                    <NavLink to = {data[8].roughting} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard item={data[8]}/>
                    </NavLink>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}